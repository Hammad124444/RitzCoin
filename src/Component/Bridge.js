import React, { useState,useEffect } from "react";
import {
    RitzABI, BRIDGE_MAIN_WALLET,
    RITZ_ETH_ADDRESS,
    RITZ_BSC_ADDRESS
} from './constant'
import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import { AVAILABLE_NETWORKS, Network } from './Networks'
import Web3 from "web3";
import swal from 'sweetalert';
import Store from './abii'
let instance = new Web3(window.ethereum);


console.log('available network', AVAILABLE_NETWORKS);
console.log('network=========', Network);
const Bridge = (props) => {
    const { chainId } = useWeb3React()
    const [account, setAccount] = useState("")
    const [selectValue, setSelectValue] = useState(['ETH', 'BSC'])
    const [inputValue, setInputValue] = useState('')
    const handleDropdownChange = (e) => {
        setSelectValue(e.target.value.split(',')[1].split('-TO-'))
        setAccount(window.ethereum.selectedAddress)
        let availableNetwork = AVAILABLE_NETWORKS[e.target.value.split(',')[0]];
        if (window.ethereum.selectedAddress) {
            if (e.target.value[0] == 5 || e.target.value[0] == 1) {
                if (window.ethereum.networkVersion == 4) {
                    window.ethereum
                        .request({
                            method: 'wallet_addEthereumChain',
                            params: [AVAILABLE_NETWORKS[e.target.value.split(',')[0]]]
                        })
                }
                else {
                    swal("Error", `Not Connected to RinkeBy , If you want ${availableNetwork.chainName} connection ,make sure you are connect to Rinkeby Network`);
                }
            }
            else if (e.target.value[0] == 4 && window.ethereum.networkVersion == 56) {

                window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x4' }],

                })
            }
            else {
                swal("Error", `Not Connected to Binance Chain , If you want  ${availableNetwork.chainName}Connection, make sure you are connect to Binance Network`);
            }
        }
        else {
            console.log("else")
            const web3 = new Web3(window.givenProvider)
            if (typeof window.ethereum !== 'undefined') {
                console.log('MetaMask is installed!');
                const accounts = window.ethereum.request({ method: 'eth_requestAccounts' })
            }
            else {
                swal("Error", "Make sure You have MetaMask Installed");
            }
        }
    }
    const send = () => {
        Store.methods.sell(2).send({
            from: window.ethereum.selectedAddress,
            to: Store.options.address
        })
    }
    const onSubmit = () => {
        if (account) {
            const contract = new instance.eth.Contract(
                JSON.parse(RitzABI),
                chainId === 97 || chainId === 56 ? RITZ_BSC_ADDRESS : RITZ_ETH_ADDRESS

            );
            contract.methods.transfer(BRIDGE_MAIN_WALLET, new BigNumber(Number(inputValue) * Math.pow(10, 18))).send({ from: account })
                .then((data) => {
                    console.log('data', data);
                    if (data.status) {
                        fetch('http://192.168.99.197:3000/v1/users', {
                            method: 'post',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                senderNetwork: selectValue[0],
                                receiverNetwork: selectValue[1],
                                userWallet: account,
                                txhash: data.transactionHash,
                                bridgeValue: inputValue
                            }),
                        })
                            .then((response) => response.json())
                            .then((responseJson) => {
                                console.log('responseJson', responseJson)
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    }
                })
                .catch((error) => {
                    console.log('error', error);
                });
        }
        else {
            alert('Connect wallet first')
        }
    }
useEffect(() => {
}, [account])
    return (
        <div className="bridge">
            <div className="form-wrapper">
                <form>
                    <fieldset >
                        <legend> Bridge your Ritz Token</legend>
                        <br />
                        <div className="mb-3">
                            <label htmlFor="disabledSelect" className="form-label">Select chain</label>

                            <select id="disabledSelect" className="form-select" onChange={(e) => handleDropdownChange(e)}>
                                {Network.map(item => {

                                    return (

                                        <option value={[item.chainId, item.name]} key={item.chainId} >{item.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="disabledTextInput" className="form-label">Value</label>
                            <input type="text" id="value_to_bridge" className="form-control" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Value to bridge" />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
                    </fieldset>
                </form>
            </div>
            <div className="enter-dApp-button">
                <button style={{ AlignItem: "Center" }} onClick={send} >  Send  </button>
            </div>
        </div >

    )
}

export default Bridge;