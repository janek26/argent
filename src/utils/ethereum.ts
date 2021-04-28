import { BigNumber, ethers } from "ethers"

const { NEXT_PUBLIC_JSON_RPC_PROVIDER } = process.env

export const ethereum = new ethers.providers.JsonRpcProvider(
  NEXT_PUBLIC_JSON_RPC_PROVIDER,
)

export const getBalance = async (address: string): Promise<BigNumber> => {
  return ethereum.getBalance(address)
}
