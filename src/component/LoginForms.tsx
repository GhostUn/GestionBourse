'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ConnexionUser } from '@/app/API/login';
import { useUser } from "@/app/context/useContext";
import { useRouter } from 'next/navigation';


const LoginForms = () => {

     const { setUser } = useUser();
const router = useRouter();
    const [formData , setFormData] = useState({
        email : '',
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
    if (formData.email && formData.password ) {
        const response = await ConnexionUser(formData, setUser)
       
        
        router.push("/dashboard");
    }
    } catch (error) { 
       console.error('Erreur lors de la connexion :', error);  // ← Log sur console Render
      alert(error);
    }
  };
  return (


   <div className="d-flex justify-content-center align-items-center vh-100">
        {/* Background Shapes */}
        <div className="position-absolute background-shapes">
            <div className="shape shape-first"></div>
            <div className="shape shape-last"></div>
        </div>

        {/* Login Form */}
        <form className="glassmorphism-form bg-transparent p-5 rounded" onSubmit={handleSubmit}>
            <h3 className="text-center text-white fw-bold mb-4">Login</h3>

            {/* Username Field */}
            <div className="mb-3 text-white">
            <label htmlFor="username" className="form-label text-white fw-medium">
                Email
            </label>
            <input
                type="text"
                id="email"
                name='email'
                onChange={handleChange}
                value={formData.email}
                className="form-control bg-transparent text-white border-0"
                placeholder="domaine@g-mail.com"
               // style={{ backgroundColor: "rgba(237, 245, 247, 0.81)" }}
            />
            </div>

            {/* Password Field */}
            <div className="mb-4">
            <label htmlFor="password" className="form-label text-white fw-medium">
                Password
            </label>
            <input
                type="password"
                id="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="form-control bg-transparent text-white border-0"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            </div>

            {/* Login Button */}
            <button
            type="submit"
            className="btn btn-light w-100 fw-bold"
            style={{ color: "#080710" }}
            >
            Log In
            </button>
              <div className="d-flex align-items-center justify-content-center mt-5">
                <p>Pas de compte ?
                    <a href="/inscription"> S'inscrire ici </a>
                </p>
              </div>

            {/* Social Login Buttons */}
              <div className="d-flex justify-content-between mt-4 social-buttons gap-3 ">
            <div className="social-btn google d-flex align-items-center justify-content-center go">
                <FontAwesomeIcon icon={faGoogle} className="me-1 w-100" />
                Google
            </div>
            <div className="social-btn facebook d-flex align-items-center justify-content-center fb">
                <FontAwesomeIcon icon={faFacebook} className="me-2 w-100" />
                Facebook
          </div>
        </div>
        </form>
        </div>
  )
}

export default LoginForms
