import { BigNumber } from "@ethersproject/bignumber"
import { ethers } from "ethers"
import { GetStaticProps, NextPage } from "next"
import { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

import { Button } from "../components/Button"
import { InputField } from "../components/InputField"
import { Spinner } from "../components/Spinner"
import { ThemeSwitcher } from "../components/ThemeSwitcher"
import { TokenEntry } from "../components/TokenEntry"
import {
  ETHEREUM_ADDRESS,
  OneInchBalances,
  OneInchTokens,
  fetchErc20Balances,
  fetchTokens,
} from "../utils/1inch"
import { getBalance } from "../utils/ethereum"
import { countGuardians } from "../utils/guardianManager"

const Flex = styled.div`
  display: flex;
  & > * + * {
    margin-left: 0.5rem;
  }
  & > button {
    height: 40px;
  }
`

type IndexPageProps = {
  tokens: OneInchTokens
}

type FormData = {
  address: string
}

const balancesToIterator = (balances: OneInchBalances): string[][] =>
  Object.entries(balances).map(([token, balance]) => [token, balance])

const IndexPage: NextPage<IndexPageProps> = ({ tokens }) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const [balance, setBalance] = useState<BigNumber | null>(null)
  const [guardians, setGuardians] = useState<BigNumber | null>(null)
  const [erc20Balances, setErc20Balances] = useState<string[][]>([])

  const onSubmit = handleSubmit(async ({ address }) => {
    setBalance(null)
    setGuardians(null)
    setErc20Balances([])

    if (ethers.utils.isAddress(address)) {
      setBalance(await getBalance(address))
      setGuardians(await countGuardians(address))
      setErc20Balances(balancesToIterator(await fetchErc20Balances(address)))
    } else {
      setError("address", { message: "Not a valid Ethereum Address!" })
    }
  })

  return (
    <>
      <ThemeSwitcher />
      <div>
        <h1>Argent Test</h1>
        <Flex as="form" onSubmit={onSubmit}>
          <InputField
            error={errors.address?.message}
            autoFocus
            placeholder="Argent Wallet Address"
            {...register("address")}
          />

          <Button disabled={isSubmitting} type="submit">
            {">>>"}
          </Button>
        </Flex>
        {balance && (
          <TokenEntry
            address={ETHEREUM_ADDRESS}
            balance={balance}
            decimals={tokens[ETHEREUM_ADDRESS].decimals}
            logoSrc={tokens[ETHEREUM_ADDRESS].logoURI}
            symbol={tokens[ETHEREUM_ADDRESS].symbol}
            name={"Ether"}
          />
        )}
        {guardians && (
          <TokenEntry
            address="0x0"
            balance={guardians}
            decimals={0}
            name={"Guardians"}
          />
        )}
        {erc20Balances.length !== 0 && <h2>ERC20 (by 1inch.io API)</h2>}
        {erc20Balances.map(([token, balance]) => (
          <TokenEntry
            key={token}
            address={token}
            balance={balance}
            decimals={tokens[token]?.decimals}
            logoSrc={tokens[token]?.logoURI}
            name={tokens[token]?.name}
            symbol={tokens[token]?.symbol}
          />
        ))}
        {isSubmitting && <Spinner />}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const tokens = await fetchTokens()

  return {
    props: {
      tokens,
    },
    revalidate: 60 * 60, // refetch once an hour
  }
}

export default IndexPage
