import { BigNumberish } from "@ethersproject/bignumber"
import { ethers } from "ethers"
import Image from "next/image"
import { FC } from "react"

import { Balance, Text, TokenEntryWrapper } from "./TokenEntry.style"

const TRANSPARENT_IMAGE =
  "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="

interface TokenEntryProps {
  address: string
  name?: string
  symbol?: string
  logoSrc?: string
  balance?: BigNumberish
  decimals?: number
}

export const TokenEntry: FC<TokenEntryProps> = ({
  address,
  name,
  decimals,
  symbol = "",
  logoSrc = TRANSPARENT_IMAGE,
  balance = 0,
}) => (
  <TokenEntryWrapper>
    {logoSrc && (
      <Image
        alt={`${name ?? address} image`}
        height={18}
        width={18}
        src={logoSrc}
        placeholder={TRANSPARENT_IMAGE}
      />
    )}
    <Text>
      {name ?? address}:
      <Balance>
        {ethers.utils.formatUnits(balance, decimals)} {symbol}
      </Balance>
    </Text>
  </TokenEntryWrapper>
)
