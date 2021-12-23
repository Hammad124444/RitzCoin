import React, { useEffect, useState } from "react";
import detectEthereumProvider from '@metamask/detect-provider'
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
// import { injected } from "./connectors"
// import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
// import { AVAILABLE_NETWORKS, } from './Networks'
import Web3 from 'web3'
import swal from 'sweetalert';

const Header = () => {
    // console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion');
    const [account, setAccount] = useState("")
    const [active, setActive] = useState()
    const [chain, setChain] = useState("")

    // const {  activate, account, error, deactivate, chainId: _chainId } = useWeb3React();
    const connect = async () => {
        // const web3 = new Web3(ethereum)
        // if (typeof ethereum !== 'undefined') {
        //     console.log('MetaMask is installed!');
        //     const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
        //     setAccount(ethereum.selectedAddress)
        // }
        // else {
        //     swal("Error", "Make sure You have MetaMask Installed");
        // }
        if (window.ethereum) {
            if (window.ethereum && window.ethereum.isMetaMask) {
                window.ethereum.request({ method: 'eth_requestAccounts' })
                setAccount(window.ethereum.selectedAddress)

            } else {

                swal("Error", "Make sure You have MetaMask Installed");

            }


        }
        else if ("ethereum#initialized") {
            window.addEventListener('ethereum#initialized', handleEthereum, {
                once: true,
            });
            window.location = 'https://metamask.app.link/dapp/192.168.1.19:3000';
            window.ethereum.request({ method: 'eth_requestAccounts' })
            swal("Error", window.ethereum.selectedAddress)
            setTimeout(handleEthereum, 3000);

            // If the event is not dispatched by the end of the timeout,cccc
            // the user probably doesn't have MetaMask installed.
            // setTimeout(handleEthereum, 3000); // 3 seconds
        }
        else {
            window.location = 'https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&ref=producthunt&_branch_match_id=981839266904730289&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz00tScxNLM7WSywo0MvJzMvWT6ooz3a1yHeztAQA%2FOIqTSQAAAA%3D'
        }


        // injected &&
        //     activate(injected, undefined, true)
        //         .then(async (res) => {
        //             await window.ethereum.request({
        //                 method: 'wallet_addEthereumChain',
        //                 params: [AVAILABLE_NETWORKS[window.ethereum.networkVersion]],
        //             }
        //             ,setActive(true)
        //             ,account = window.ethereum.selectedAddress

        //             )
        //         })
        //         .catch((error) => {
        //             if (error instanceof UnsupportedChainIdError) {
        //                 activate(injected);
        //             } else {
        //                 // setPendingError(error?.message || 'Something went wrong');
        //             }
        //            }
        //         );


        //    console.log(window.ethereum.accounts[0])
    };
    function handleEthereum() {
        const { ethereum } = window;
        if (ethereum && ethereum.isMetaMask) {
            ethereum.request({ method: 'eth_requestAccounts' })

        } else {

            swal("Error", "Make sure You have MetaMask Installed");

        }
    }
    const connectWalletButton = () => {
        return (
            <button onClick={connect} > Connect to wallet </button>
        )
    }
    const mintNftButton = () => {
        return (
            <>
                <button>
                    {account}
                </button>
            </>
        )
    }
    useEffect(() => { connect() }, [account])
    return (
        <header id="header">
            <div className="header--content">
                <Navbar expand="lg" className="navbar-bg">
                    <div className="container-fluid">
                        <Navbar.Brand href="#">
                            <Image src="images/Header-Logo.gif" alt="" fluid />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="">
                            <Nav className="my-2 my-lg-0 navbar-nav">
                                <Nav.Link href="#"><img src="/images/menu/home.svg" className="img-fluid" alt="Home icon" /> Home</Nav.Link>
                                <Nav.Link href="#"><img src="/images/menu/swap.svg" alt="Swap icon" />Swap</Nav.Link>
                                <Nav.Link href="#"><img src="/images/menu/pools.svg" alt="Pools icon" />Pools</Nav.Link>
                                <Nav.Link href="#"><img src="/images/menu/liquidity.svg" alt="Liquidity icon" />Liquidity</Nav.Link>
                                <Nav.Link href="#"><img src="/images/menu/farm.svg" alt="Farm icon" />Farm</Nav.Link>
                                <Nav.Link href="#"><img src="/images/menu/bridge.svg" alt="Bridge icon" />Bridge</Nav.Link>
                                <NavDropdown title="More" id="navbarScrollingDropdown" className="dropdown">
                                    <div className="dropdown-menu">
                                        <NavDropdown.Item href="#analytics">Analytics</NavDropdown.Item>
                                        <NavDropdown.Item href="#docs">Docs</NavDropdown.Item>
                                    </div>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <div className="enter-dApp-button">
                    <a href="#">

                        {account ? mintNftButton() : connectWalletButton()}
                        {/* <Button type="button" className="btn" onClick={tryActivation}><img src="/images/menu/connect-wallet.svg" alt="Wallet Icon" class="wallet-icon" /><span>Connect Wallet</span></Button> */}
                    </a>

                </div>

            </div>
        </header>
    )
}


export default Header;