import "isomorphic-unfetch"

import { ETHEREUM_ADDRESS, fetchTokens, filterNullBalances } from "../1inch"

describe("1inch", () => {
  describe("unit tests", () => {
    it("should filterNullBalances correctly", () => {
      expect(
        filterNullBalances({ test1: "12", test2: "0", test3: "0" }),
      ).toMatchObject({
        test1: "12",
      })
    })
  })

  describe("integration tests (api)", () => {
    describe("fetchTokens should not crash", async () => {
      const result = await fetchTokens()

      it("should fetch ethereum as token", async () => {
        expect(result).toMatchObject({
          [ETHEREUM_ADDRESS]: {
            symbol: "ETH",
            name: "Ethereum",
            decimals: 18,
            address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            logoURI:
              "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
          },
        })
      })

      it("should not have any 0x0 as token", async () => {
        expect(result).not.toHaveProperty(
          "0x0000000000000000000000000000000000000000",
        )
      })
    })
  })
})
