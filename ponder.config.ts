import { createConfig } from "ponder";
import { getAddress } from "viem";
import { erc20ABI } from "./abis/erc20ABI";
import { chain } from "./ponder.chains";

export function getMainChainConfig() {
  const config = {
    database: {
      kind: "postgres" as const,
      connectionString: process.env.DATABASE_URL || "",
    },
    chains: {
      polygon: {
        id: 137,
        rpc: chain["polygon"].rpc,
      },
      bsc: {
        id: 56,
        rpc: chain["bsc"].rpc,
      },
      kaia: {
        id: 8217,
        rpc: chain["kaia"].rpc,
      },
      base: {
        id: 8453,
        rpc: chain["base"].rpc,
      },
      lisk: {
        id: 1135,
        rpc: chain["lisk"].rpc,
      },
      world: {
        id: 480,
        rpc: chain["world"].rpc,
      },
      // etherlink: {
      //   id: 42793,
      //   rpc: chain["etherlink"].rpc,
      // },
      gnosis: {
        id: 100,
        rpc: chain["gnosis"].rpc,
      },
    },
    contracts: {
      ERC20_IDRX: {
        abi: erc20ABI,
        address: [getAddress("0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC")],
        chain: {
          polygon: {
            address: getAddress("0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC"),
            startBlock: chain["polygon"].startBlock,
          },
          bsc: {
            address: getAddress("0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC"),
            startBlock: chain["bsc"].startBlock,
          },
          kaia: {
            address: getAddress("0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22"),
            startBlock: chain["kaia"].startBlock,
          },
          base: {
            address: getAddress("0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22"),
            startBlock: chain["base"].startBlock,
          },
          lisk: {
            address: getAddress("0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22"),
            startBlock: chain["lisk"].startBlock,
          },
          world: {
            address: getAddress("0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22"),
            startBlock: chain["world"].startBlock,
          },
          // etherlink: {
          //   address: getAddress("0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22"),
          //   startBlock: chain["etherlink"].startBlock,
          // },
          gnosis: {
            address: getAddress("0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22"),
            startBlock: chain["gnosis"].startBlock,
          },
        },
      },
    },
    ordering: "multichain" as const,
  };

  return config;
}

export default createConfig(getMainChainConfig());
