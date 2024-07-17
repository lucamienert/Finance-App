import React from "react"

const LoadingPage: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center position-fixed w-100 h-100 spinner">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default LoadingPage