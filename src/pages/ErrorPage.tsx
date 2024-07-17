import { Link, useRouteError } from "react-router-dom"

const ErrorPage: React.FC= () => {
    const error: any = useRouteError()

    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <p className="fs-3">
                <span className="text-danger">Oops!</span> Page not found.
            </p>
            <p className="lead">
                The page you're looking for doesn't exist.{" "}
                {error.statusText || error.message}
            </p>
            <Link to="/" className="btn btn-primary">
                Go Home
            </Link>
        </div>
    )
}

export default ErrorPage
