import { GuardianManagerAbi__factory } from "../../types/ethers-contracts"
import { ethereum } from "./ethereum"

export const GuardianManager = GuardianManagerAbi__factory.connect(
  "0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7",
  ethereum,
)

export const countGuardians = GuardianManager.guardianCount
