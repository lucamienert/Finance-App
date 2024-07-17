import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../util/api"

const EditProfilePage = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")

    const navigate = useNavigate()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
  
        const form = e.target;

        if (password !== newPassword)
            e.stopPropagation()
      
        if (!form.checkValidity()) {
            e.stopPropagation()
        } else {
            api.post('/resetPassword', {
                email: email,
                password: password,
                newPassword: newPassword
            })
                .catch(res => console.error(res))

            navigate(0)
        }
        
        form.classList.add('was-validated');
    }

    return (
        <div className="content-wrapper d-flex flex-column flex-grow-1 global-background">
            <div className="content flex-grow-1">
                <h1 className="mb-4 mt-2">Edit Profile</h1>

                <div className="card shadow">
                    <div className="card-body w-50">
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
                                    <label htmlFor="floatingInput2" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingInput2"
                                        placeholder="***"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="invalid-feedback">
                                        Please put Password.
                                    </div>
                                </div>
                                
                                <div className="col-12">
                                    <label htmlFor="floatingInput3" className="form-label">New Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingInput3"
                                        placeholder="***"
                                        required
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <div className="invalid-feedback">
                                        Please put Password.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn bsb-btn-xl btn-primary" type="submit">Update Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage