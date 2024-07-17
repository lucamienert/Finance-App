import { useState } from "react"
import LoadingPage from "./LoadingPage";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const { register, loading } = useAuth();
    const navigate = useNavigate()
  
    const handleSubmit = async (e: any) => {
      e.preventDefault()

      const form = e.target;
    
        if (!form.checkValidity()) {
          e.stopPropagation();
        } else {
  
        await register(email, password);
        navigate('/login')
        }
        form.classList.add('was-validated');
    }
  
    if (loading) {
      return <LoadingPage />
    } 

    return (
        <section className="p-3 p-md-4 p-xl-5">
  <div className="container">
    <div className="card shadow">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center justify-content-center h-100">
              <h2 className="h1 mb-4">Welcome</h2>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="row">
              <div className="col-12">
                <div className="mb-5">
                  <h3>Register</h3>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
              <div className="row gy-3 gy-md-4 overflow-hidden">
                <div className="col-12">
                    <label htmlFor="floatingInput" className="form-label">EMail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        Please put email.
                    </div>

                </div>
                <div className="col-12">
                    <label htmlFor="floatingInput2" className="form-label">Passwort</label>
                    <input
                        type="password"
                        className="form-control"
                        id="floatingInput2"
                        placeholder="******"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        Please put Password.
                    </div>
                </div>
                <div className="col-12">
                    <label htmlFor="floatingInput3" className="form-label">Passwort wiederholen</label>
                    <input
                        type="password"
                        className="form-control"
                        id="floatingInput3"
                        placeholder="******"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="invalid-feedback">
                        Please put Password.
                    </div>
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn bsb-btn-xl btn-primary" type="submit">Registrieren</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <hr className="mt-5 mb-4"/>
                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                  <Link to={'/login'} className="link-secondary text-decoration-none">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default RegisterPage