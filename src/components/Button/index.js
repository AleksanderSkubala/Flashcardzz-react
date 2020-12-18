import React from 'react';

export default function Buton({ children, ...props }) {
  return (
    <button className="xl:w-1/2 lg:w-3/5 py-2 px-3 font-bold uppercase bg-lime-300 hover:bg-lime-400 text-black border border-black shadow-brutalism" {...props}>{children}</button>
  );
};