import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

const Signup = () => {
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const{user, signUp}=UserAuth()
  const navigate=useNavigate()


  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <div w-full h-screen>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://imgs.search.brave.com/udZSc-4mmKUMwhcYb220iBNCqBXBWFUmm5hNF1gHckk/rs:fit:1200:1125:1/g:ce/aHR0cDovL2lzcXVh/ZC50di93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wOC9OZXRm/bGl4LUJhY2tncm91/bmQuanBn" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-10 py-24 z-50'>
          <div className='max-w-[500px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>
                Sign Up
              </h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e)=>setEmail(e.target.value)}
                 className='p-3 my-3 bg-gray-700 rounded'
                  type="email"
                  placeholder='Email'
                  autoComplete='email'
                />
                <input onChange={(e)=>setPassword(e.target.value)}
                 className='p-3 my-3 bg-gray-700 rounded'
                  type="password"
                  placeholder='password'
                  autoComplete='current-password'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign up</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span
                    className='text-gray-600'>
                    Already Subscribed to Netflix?
                  </span>{' '}
                  <Link to="/login">
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
