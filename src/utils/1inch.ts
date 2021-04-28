export type OneInchBalances = {
  [token: string]: string
}

export const ETHEREUM_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"

export const fetchErc20Balances = (address: string): Promise<OneInchBalances> =>
  fetch(
    `https://balances.1inch.exchange/v1.1/1/balances/${address}?tokensFetchType=listedTokens`,
  )
    .then((x) => x.json())
    .then(filterNullBalances)

export const filterNullBalances = (
  balances: OneInchBalances,
): OneInchBalances =>
  Object.fromEntries(
    Object.entries(balances)
      .filter(([_, balance]) => balance !== "0")
      .filter(([token]) => token !== ETHEREUM_ADDRESS),
  )

export type OneInchTokens = {
  [token: string]: {
    symbol: string
    name: string
    address: string
    decimals: number
    logoURI: string
  }
}

export const fetchTokens = (): Promise<OneInchTokens> =>
  fetch("https://api.1inch.exchange/v3.0/1/tokens")
    .then((x) => x.json())
    .then((x) => x.tokens)
