import React from 'react';
import { useState } from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            email: email,
            password: password
        };
        console.log(payload);
    try {
        const response =  await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.error('Login error:', error);
    }
    }
    return (
        <main className="min-h-screen overflow-hidden bg-[#f5f7f2] text-[#17251d]">
            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-10 sm:px-10 lg:justify-between lg:px-16">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9e8c2] opacity-70 blur-3xl" />
                <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-[#f6d9a6] opacity-60 blur-3xl" />

                <section className="relative hidden max-w-md lg:block">
                    <div className="mb-10 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1d6b4f] text-xl font-bold text-white shadow-lg shadow-[#1d6b4f]/20">
                            O
                        </div>
                        <span className="text-xl font-bold tracking-tight">onedrive</span>
                    </div>
                    <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#d07939]">Welcome back</p>
                    <h1 className="text-6xl font-black leading-[0.95] tracking-[-0.06em] text-[#173a2d]">
                        Your files are waiting.
                    </h1>
                    <p className="mt-7 max-w-sm text-lg leading-8 text-[#607167]">
                        Pick up right where you left off and keep everything important within reach.
                    </p>
                    <div className="mt-12 flex gap-2">
                        <span className="h-2 w-12 rounded-full bg-[#1d6b4f]" />
                        <span className="h-2 w-2 rounded-full bg-[#d07939]" />
                        <span className="h-2 w-2 rounded-full bg-[#cad5cb]" />
                    </div>
                </section>

                <section className="relative w-full max-w-md rounded-[2rem] border border-white/80 bg-white/90 p-7 shadow-[0_24px_70px_rgba(34,65,48,0.12)] backdrop-blur sm:p-10">
                    <div className="mb-8 lg:hidden">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d6b4f] font-bold text-white">O</div>
                            <span className="text-xl font-bold">onedrive</span>
                        </div>
                    </div>
                    <div className="mb-8">
                        <p className="mb-2 text-sm font-semibold text-[#d07939]">Good to see you</p>
                        <h2 className="text-3xl font-black tracking-tight text-[#173a2d]">Log in to onedrive</h2>
                        <p className="mt-2 text-sm leading-6 text-[#718077]">Access your files from wherever you are.</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#30453a]" htmlFor="email">Email address</label>
                            <input className="w-full rounded-xl border border-[#dce5dd] bg-[#f9fbf8] px-4 py-3.5 text-[#173a2d] outline-none transition placeholder:text-[#a3b0a7] focus:border-[#1d6b4f] focus:ring-4 focus:ring-[#1d6b4f]/10" id="email" name="email" placeholder="you@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <label className="block text-sm font-bold text-[#30453a]" htmlFor="password">Password</label>
                                <a className="text-xs font-bold text-[#1d6b4f] hover:underline" href="/forgot-password">Forgot password?</a>
                            </div>
                            <input className="w-full rounded-xl border border-[#dce5dd] bg-[#f9fbf8] px-4 py-3.5 text-[#173a2d] outline-none transition placeholder:text-[#a3b0a7] focus:border-[#1d6b4f] focus:ring-4 focus:ring-[#1d6b4f]/10" id="password" name="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="w-full rounded-xl bg-[#1d6b4f] px-4 py-3.5 font-bold text-white shadow-lg shadow-[#1d6b4f]/20 transition hover:bg-[#15543d] focus:outline-none focus:ring-4 focus:ring-[#1d6b4f]/20" type="submit">Log in</button>
                    </form>

                    <p className="mt-7 text-center text-sm text-[#718077]">New to onedrive? <a className="font-bold text-[#1d6b4f] hover:underline" href="/signup">Create an account</a></p>
                </section>
            </div>
        </main>
    );
};

export default Login;
