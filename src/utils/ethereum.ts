import { BigNumber, ethers } from "ethers"

export const ethereum = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/7d0d81d0919f4f05b9ab6634be01ee73",
)

export const getBalance = async (address: string): Promise<BigNumber> => {
  return ethereum.getBalance(address)
}
