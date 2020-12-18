import React, { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserProvider";
import { Link, navigate } from '@reach/router';
import { auth, googleProvider } from '../../firebaseInit';
import Button from '../../components/Button';
import bookshelf from '../../assets/images/bookshelf.jpg';

export default function Login() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  });

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-10 md:pl-12 md:-mb-24">
          <Link to="/" className="bg-black shadow-xl text-white font-bold text-xl p-4">Flashcardzz</Link>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start my-auto pt-32 md:pt-0 px-8 lg:px-32 md:px-24">
          <p className="text-center text-3xl pb-6">Welcome.</p>
          <Button onClick={() => auth.signInWithPopup(googleProvider)}>Login with Google</Button>
        </div>
      </div>
      <div className="hidden md:block w-1/2 shadow-2xl">
        <img alt="bookshelf" className="object-cover w-full h-screen" src={bookshelf}/>
      </div>
    </div>
  )
}