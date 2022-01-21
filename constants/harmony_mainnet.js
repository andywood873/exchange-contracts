const WONE = "0x93edfa74e518c02c45ea258580ebce828169173aecfdb3aedad38b83a51fff5e";
exports.WRAPPED_NATIVE_TOKEN = WONE;
exports.PNG_SYMBOL = "harPNG";
exports.PNG_NAME = "Pangolin";
exports.TOTAL_SUPPLY = "230000000"; // 230M
exports.MULTISIG_OWNERS = [
  "0xDA315a838E918026E51A864c43766f5AE86be8c6" // shung
];
exports.PROPOSAL_THRESHOLD = "100000"; // 100K
exports.INITIAL_FARMS = [
  {
    tokenA: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", // USDC
    tokenB: WONE,
    weight: 2000
  },
  {
    tokenA: "0x049d68029688eAbF473097a2fC38ef61633A3C7A", // fUSDT
    tokenB: WONE,
    weight: 1000
  },
  {
    tokenA: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E", // DAI
    tokenB: WONE,
    weight: 1000
  }
];
exports.AIRDROP_AMOUNT = "11500000"; // 11.5M or 5% of max supply
exports.VESTER_ALLOCATIONS = [
  {
    recipient: "treasury", // community treasury
    allocation: 2105, // 20%
  },
  {
    recipient: "multisig", // fPNG team
    allocation: 1579, // 10% team + 5% vc investor
  },
  {
    recipient: "foundation", // PNG Foundation multisig
    allocation: 263, // 2.5% advisory
  },
  {
    recipient: "chef", // MiniChef
    allocation: 6053, // 57.5% LPs & PNG Staking
  }
];