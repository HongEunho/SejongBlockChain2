const path = require('path');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'app/contract'),
  compilers: {
    solc: {
      version: '^0.6.0',
    },
  },
  networks: {
    develop: {
      // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
  },
};
