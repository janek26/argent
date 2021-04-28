import urlJoin from "url-join"

export type OneInchBalances = {
  [token: string]: string
}

export const ETHEREUM_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
export const TOKEN_ENDPOINT = "https://api.1inch.exchange/v3.0/1/tokens"
export const BALANCES_ENDPOINT = (address: string): string =>
  urlJoin(
    "https://balances.1inch.exchange/v1.1/1/balances/",
    address,
    "?tokensFetchType=listedTokens",
  )

export const fetchErc20Balances = (address: string): Promise<OneInchBalances> =>
  fetch(BALANCES_ENDPOINT(address))
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
  fetch(TOKEN_ENDPOINT)
    .then((x) => x.json())
    .then((x) => x.tokens)
