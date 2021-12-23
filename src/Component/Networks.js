
const IS_MAIN = true; // true:MAIN , false:TEST
export const AVAILABLE_NETWORKS = {
    137: {
        chainId: `0x${Number(137).toString(16)}`,
        chainName: "Polygon Mainnet",
        nativeCurrency: {
          name: "MATIC",
          symbol: "MATIC",
          decimals: 18
        },
        rpcUrls: [process.env.REACT_APP_Poly_rpcUrls],
        blockExplorerUrls: [process.env.REACT_APP_Poly_blockExplorerUrls]
      },
    56: {
        chainId: `0x${Number(56).toString(16)}`, // A 0x-prefixed hexadecimal string
        chainName: 'Binance Chain',
        rpcUrls: [process.env.REACT_APP_Bsc_rpcUrls],
        blockExplorerUrls: [process.env.REACT_APP_Bsc_blockExplorerUrls],
        nativeCurrency: {
            name: 'BinanceCoin',
            symbol: 'BNB',
            decimals: 56,
        },
    },
    97: {
        chainId:  `0x${Number(61).toString(16)}`, // A 0x-prefixed hexadecimal string
        chainName: 'Binance Testnet',
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
        blockExplorerUrls: ['https://testnet.bscscan.com'],
        nativeCurrency: {
            name: 'BinanceCoin',
            symbol: 'BNB',
            decimals: 18,
        },
    },
    4: {
        chainId: `0x${Number(4).toString(16)}`, // A 0x-prefixed hexadecimal string
        chainName: 'Rinkeby Test Network',
        rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
        blockExplorerUrls: ['https://rinkeby.etherscan.io'],
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
    },
    1: {
        chainId: '0x1', // A 0x-prefixed hexadecimal string
        chainName: 'Ethereum Mainnet',
        rpcUrls:  [process.env.REACT_APP_EtherNet_rpcUrls],
        blockExplorerUrls: [process.env.REACT_APP_MainNet_blockExplorerUrls],
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
    }, 
    3: {
        chainId: `0x${Number(3).toString(16)}`, // A 0x-prefixed hexadecimal string
        chainName: 'Ropsten Test Network',
        rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
        blockExplorerUrls: ['https://ropsten.etherscan.io'],
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
    }
}

export const Network = [ { name: 'ETH-TO-BSC', chainId:56 },{ name: 'ETH-TO-POLY', chainId: 137   },{ name: 'BSC-TO-ETH', chainId:4  }]