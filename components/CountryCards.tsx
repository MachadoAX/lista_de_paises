import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CountryCards = ({
    name, ptName, flag, flagAlt}
    : {
        name: string,
        ptName: string,
        flag: string,
        flagAlt: string
    
    }) => {
  return (
    <Link href={`/pais/${name}`}>
        <article 
          className="h-64 min-w-full p-2 bg-slate-100 border-2 hover:border-slate-400 hover:shadow-xl transition-all rounded-xl shadow-md cursor-pointer" 
          key={name}>
          <div className="relative w-full h-40 p-2 overflow-hidden rounded-xl flex bg-orange-300">
            <Image src={flag} alt={flagAlt} fill className="object-cover"/>
          </div>
          <h1 className="font-bold text-xl text-center mt-1">{ptName}</h1>
        </article>
        </Link>
  )
}

export default CountryCards