import axios from "axios"
import { useEffect, useState } from "react"
import LoadingPage from "./LoadingPage"
import { SingleCoin } from "../util/coinApi"
import { useParams } from "react-router-dom"

const CryptoDetailsPage = () => {
    const { coinId }: any = useParams()
    const [coin, setCoin] = useState<any>()
  
    const getCoinData = async () => {
      const { data } = await axios.get(SingleCoin(coinId))
  
      setCoin(data)
    }
  
    useEffect(() => {getCoinData()}, [])
  
    if (!coin)
      return <LoadingPage />
  
    return (
      <>
        <div className="m-4">
          <img 
            src={coin?.image.large}
            alt={coin?.name}
            height={200}
          />
          <h2>{coin?.name}</h2>
        </div>
      </>
    )
  }

export default CryptoDetailsPage