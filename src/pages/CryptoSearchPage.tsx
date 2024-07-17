import axios from "axios"
import { useEffect, useState } from "react"
import LoadingPage from "./LoadingPage"
import { CoinList } from "../util/coinApi"
import { Link } from "react-router-dom"

const CryptoSearchPage = () => {
    const [coins, setCoins] = useState<any>(null)
    const [searchQuery, setSearchQuery] = useState('')

    const getCoinData = async () => {
        const { data } = await axios.get(CoinList('eur'))
        setCoins(data)
    }

    useEffect(() => {
        getCoinData()
    }, [])

    if (!coins)
        return <LoadingPage />

    const filteredCoins = coins.filter((coin: any) => 
        coin.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div>
            <h1 className="mb-4 mt-2">Cryptos</h1>

            <div className="card">
                <div className="card-body">
                    <label className="form-control-label">Suche...</label>
                    <input 
                        type="text" 
                        placeholder="Search for a coin..." 
                        value={searchQuery}
                        className="form-control"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="card mt-2">
                <div className="card-body">
                    <ul>
                        {filteredCoins.map((coin: any) => (
                            <li key={coin.id}>
                                <img 
                                    src={coin?.image}
                                    alt={coin?.name}
                                    height={30}
                                />
                                <Link to={`/crypto/${coin.id}`}>{coin.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CryptoSearchPage