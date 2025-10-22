import { getAddress } from "viem";
import {
  base,
  bsc,
  etherlink,
  gnosis,
  kaia,
  lisk,
  polygon,
  worldchain,
} from "viem/chains";

type SupportedChains =
  | "base"
  | "bsc"
  | "kaia"
  | "lisk"
  | "polygon"
  | "world"
  | "etherlink"
  | "gnosis";
type EnvType = "development" | "staging" | "production";

type PonderChainConfig = {
  id: number;
  rpc: string | undefined;
  startBlock: number;
  contractAddress: string;
};

function getEnv(): EnvType {
  const env = process.env.NODE_ENV;
  if (env === "production") return "production";
  if (env === "staging") return "staging";
  return "development";
}

const env: EnvType = getEnv();

const contractAddresses: Record<SupportedChains, Record<EnvType, string>> = {
  base: {
    development: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    staging: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    production: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
  },
  bsc: {
    development: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
    staging: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
    production: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
  },
  kaia: {
    development: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    staging: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    production: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
  },
  lisk: {
    development: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    staging: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    production: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
  },
  polygon: {
    development: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
    staging: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
    production: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
  },
  world: {
    development: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    staging: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    production: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
  },
  etherlink: {
    development: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    staging: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    production: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
  },
  gnosis: {
    development: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    staging: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
    production: "0x18Bc5bcC660cf2B9cE3cd51a404aFe1a0cBD3C22",
  },
};

export const chain: Record<SupportedChains, PonderChainConfig> = {
  base: {
    id: base.id,
    rpc: process.env.PONDER_RPC_URL_BASE,
    startBlock: 36209841,
    contractAddress: getAddress(contractAddresses.base[env]),
  },
  bsc: {
    id: bsc.id,
    rpc: process.env.PONDER_RPC_URL_BSC,
    startBlock: 62940764,
    contractAddress: getAddress(contractAddresses.bsc[env]),
  },
  kaia: {
    id: kaia.id,
    rpc: process.env.PONDER_RPC_URL_KAIA,
    startBlock: 197201887,
    contractAddress: getAddress(contractAddresses.kaia[env]),
  },
  lisk: {
    id: lisk.id,
    rpc: process.env.PONDER_RPC_URL_LISK,
    startBlock: 22279725,
    contractAddress: getAddress(contractAddresses.lisk[env]),
  },
  polygon: {
    id: polygon.id,
    rpc: process.env.PONDER_RPC_URL_POLYGON,
    startBlock: 77109712,
    contractAddress: getAddress(contractAddresses.polygon[env]),
  },
  world: {
    id: worldchain.id,
    rpc: process.env.PONDER_RPC_URL_WORLD,
    startBlock: 20291300,
    contractAddress: getAddress(contractAddresses.world[env]),
  },
  etherlink: {
    id: etherlink.id,
    rpc: process.env.PONDER_RPC_URL_ETHERLINK,
    startBlock: 26503394,
    contractAddress: getAddress(contractAddresses.etherlink[env]),
  },
  gnosis: {
    id: gnosis.id,
    rpc: process.env.PONDER_RPC_URL_GNOSIS,
    startBlock: 42635165,
    contractAddress: getAddress(contractAddresses.gnosis[env]),
  },
};
