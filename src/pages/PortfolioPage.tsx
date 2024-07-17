import Donut from "../charts/Donut"

const PortfolioPage = () => {
    return (
        <div className="content-wrapper d-flex flex-column flex-grow-1 global-background">
            <div className="content flex-grow-1">
                <h1 className="mb-4 mt-2">Portfolio</h1>
                
                <div className="card shadow">
                    <div className="card-body">
                        <Donut chartData={[]} />
                    </div>
                </div> 
            </div>
        </div>
    )
}


export default PortfolioPage