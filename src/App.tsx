import styled from "styled-components"

import { useEffect, useState } from "react"
import { createGlobalStyle } from "styled-components"

import { ButtonCyrpto } from "./ButtonCrypto"
import { CryptoChart } from "./CryptoChart"
import { CRYPTOS } from "./constants"

function App() {
  const [coinData, setCoinData] = useState<[number, number][]>([])
  const [error, setError] = useState<Error>()
  const [isloaded, setIsLoaded] = useState<boolean>(false)
  const [actualCrypto, setActualCrypto] = useState<string>("Bitcoin")

  const fetchCryptoData = (name: string) => {
    setIsLoaded(false)
    fetch(
      `https://api.coingecko.com/api/v3/coins/${name.toLowerCase()}/market_chart?vs_currency=usd&days=365&interval=daily`,
    )
      .then(response => response.json())
      .then(response => {
        setCoinData(response.prices)
        setIsLoaded(true)
      })
      .catch(err => setError(err))
  }

  useEffect(() => {
    fetchCryptoData(actualCrypto)
  }, [actualCrypto])

  return (
    <AppContainer>
      <GlobalStyles />
      {error ? (
        <h1>Error fetching data, try again later</h1>
      ) : (
        <>
          <AppHeader>Check Crypto Price</AppHeader>
          <ButtonContainer>
            {CRYPTOS.map(crypto => (
              <ButtonCyrpto
                key={crypto.name}
                name={crypto.name}
                icon={crypto.picture}
                onClick={() => {
                  setActualCrypto(crypto.name)
                }}
              />
            ))}
          </ButtonContainer>

          {isloaded ? (
            <CryptoChart chartTitle={actualCrypto} data={coinData} />
          ) : (
            actualCrypto && <AppParagraph>Loading data...</AppParagraph>
          )}
        </>
      )}
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  min-height: 100vh;
`
const AppHeader = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 20px;
  } ;
`
const AppParagraph = styled.p`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
export default App
