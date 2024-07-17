import ThemeSwitcher from './ThemeSwitcher'
import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'
import { useAuth } from '../context/AuthContext'

const Sidebar = ({ children }: any) => {
  const {logout} = useAuth()

  const handleLogout = () => logout()

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <div className="d-flex align-items-center pb-3 mb-md-5 me-md-auto text-white text-decoration-none">
            </div>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <Link to="/" className="nav-link align-middle px-0">
                  <span className="ms-1 d-none d-sm-inline text-white">Dashboard</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/portfolio" className="nav-link align-middle px-0">
                  <span className="ms-1 d-none d-sm-inline text-white">Portfolio</span>
                </Link>
              </li>
              
              <li className="nav-item">
                <Link to="/addExpense" className="nav-link align-middle px-0">
                  <span className="ms-1 d-none d-sm-inline text-white">Add Income</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/addExpense" className="nav-link align-middle px-0">
                  <span className="ms-1 d-none d-sm-inline text-white">Add Expense</span>
                </Link>
              </li>

              <hr />

              <li className="nav-item">
                <Link to="/stocks" className="nav-link align-middle px-0">
                  <span className="ms-1 d-none d-sm-inline text-white">Stocks</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/crypto" className="nav-link align-middle px-0">
                  <span className="ms-1 d-none d-sm-inline text-white">Crypto</span>
                </Link>
              </li>

              <hr />

              <li className="nav-item">
                <Link to="/edit" className="nav-link align-middle px-0">
                  <span className="ms-1 d-none d-sm-inline text-white">Profil bearbeiten</span>
                </Link>
              </li>

              <li className="nav-item">
                <a href='#' className="nav-link align-middle px-0" onClick={handleLogout}><span className="ms-1 d-none d-sm-inline text-white">Logout</span></a>
              </li>
            </ul>
            <div className='row w-100'>
              <div className='col'><LanguageSwitcher /></div>
              <div className='col'><ThemeSwitcher /></div>
            </div>
            <div className="dropdown pb-4">
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col py-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
