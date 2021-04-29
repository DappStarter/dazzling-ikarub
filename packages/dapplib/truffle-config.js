require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'good armed ozone sugar notice crime remember coin gesture neck flat gesture'; 
let testAccounts = [
"0x6bdd1a3b3bcf95ac1af9743ee557181c53b2cf92a1bd6e887d5701d15882ffbe",
"0x51cdcf009f3dafa3433b9936fbd51c9d9f3f998e6fdc855f03ab6fd86af2580d",
"0x7dc9d3de7d326cb94ac7df2bffdabcb71ddc95ffe48af499d0b49884716e50ba",
"0xf025a39aa190788154bc5c0fc9d0782c7f7c4d75daaa697d1a73983a0e598360",
"0xbdb300a07738fefa85d71f06cb0cdc6cc27c329f4e75f0942ceafe0f20a4c5ea",
"0x6ba3f98e4ff0deed649d9a1585e84a9a89142c25ecf3bf1287bd758694847409",
"0x1aa7883ec0b383a646889316fe18e4eb595b4caf7018540dbbe907dc0e8996f5",
"0xda45e23447d6f203c4e4b9c2065180e9429bf0e439c22100d840141bb1927381",
"0x53acdd10dee3d4587099cbd6e094226db234aa31a3f757fdaeaca61dca399030",
"0xf3c532f00605b86efab258433bcd086299ed4e02b10b416e1968329f0d21871f"
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

