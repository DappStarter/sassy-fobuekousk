require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict argue system venture stool dash mean protect hidden knife fresh story'; 
let testAccounts = [
"0x0987147eba8e651257616bfb7bafd16c6049c82840dab42c21f43d7da70282b5",
"0xc3a5195e0bea22970ab3b92dec0a32194c9e075eec43ca16d466d7c3cb43821e",
"0xb7db7703b804759cdcda8869a89d9067eec6db2ed8fe58c6739970017c4c0f36",
"0x8387407514f2c2e8c3ad69263cefdd1382835d558a9a6e2a838c99420256ca99",
"0xdb3696d2a4e438c112f8651bc576e7ad57db74cab15be87f401b736b5100f775",
"0x1e9984227be94322c961fc4d7271deb0f6759b42b9791317bd7cdeb94ac9e87a",
"0x7659b737e268b8fc233f659e6687fb0f14da2aae6a65072182763b4ed524c9bd",
"0xc115d7d4704c973b5022f35c8586e9fafc9293c115d1cb2035f82211883ae1eb",
"0xce203b2552f5bddf3172c74ee006c385d8442df7ead1ef1abb6815fe5cb09620",
"0xff94a64468536af7c1d3b28217733db2ef883cb22e841f543e75107725e7c389"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

