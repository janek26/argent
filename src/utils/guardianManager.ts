import { GuardianManagerAbi__factory } from "../../types/ethers-contracts"
import { ethereum } from "./ethereum"

const { NEXT_PUBLIC_GUARDIAN_MANAGER_ADDRESS } = process.env

export const GuardianManager = GuardianManagerAbi__factory.connect(
  NEXT_PUBLIC_GUARDIAN_MANAGER_ADDRESS,
  ethereum,
)

export const countGuardians = GuardianManager.guardianCount
