import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        // console.log(user)
        signInUser(email, password)
            .then(result => {
                // console.log(result.user)

                // update last sign in time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime }
                fetch('https://v1-coffee-store-server-phi.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(loginInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                    })
            })
            .catch(error => {
                alert(error)
            })
    }
    return (
        <div className='flex justify-center mt-20'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C] text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;