const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      //network_id: "1642602702260",
      network_id: "76626",
      host: "localhost",
      port: 8545, // for ganache gui
      //port: 8545, // for ganache-cli
      gas: 6721975,
      gasPrice: 20000000000,
    },
  },
};
