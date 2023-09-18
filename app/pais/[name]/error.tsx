'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <section className='flex flex-col container'>
        <h1 className='text-5xl text-center font-bold text-slate-100 my-16' >
            Ops, ocorreu um erro ao exibir esse país!
        </h1>
        <Link href="/" className='flex items-center py-2'>
        <Image src="/arrow_back.svg" alt='voltar' width={24} height={24} />
            Voltar
        </Link>
    </section>
  )
}

export default Error