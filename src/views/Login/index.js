import React, { useContext, useEffect } from "react";
import styled from 'styled-components';
import { UserContext } from "../../providers/UserProvider";
import { Link, navigate } from '@reach/router';
import { auth, googleProvider } from '../../firebaseInit';

const StyledButton = styled.button`
  margin: 20px;
  border: 3px solid black;
  background: none;
  position: relative;
  padding: 13px;
  font-weight: bold;
  font-size: 1em;
  transition: color .3s ease-out;

  &::after {
    content: '';
    top: 0;
    left: 0;
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color:darkorchid;
    transform: scaleX(0);
    transition: transform .3s ease-out;
  }

  &:hover {
    color: white;
    cursor: pointer;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export default function Login() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  });

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
          <Link to="/" className="bg-black text-white font-bold text-xl p-4">Logo</Link>
        </div>
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <form className="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
            <div className="flex flex-col pt-4">
              <label for="email" className="text-lg">Email</label>
              <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <div className="flex flex-col pt-4">
              <label for="password" className="text-lg">Password</label>
              <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
            <StyledButton onClick={() => auth.signInWithPopup(googleProvider)}>Login with Google</StyledButton>
            <input type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"/>
          </form>
        </div>
      </div>
      <div className="w-1/2 shadow-2xl">
          <img alt="bookshelf" className="object-cover w-full h-screen hidden md:block" src="https://source.unsplash.com/VRQ7siT4U2U"/>
      </div>
    </div>
  )
}