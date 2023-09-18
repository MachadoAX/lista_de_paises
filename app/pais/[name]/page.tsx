import { Country } from '@/app/page'
import CountryCards from '@/components/CountryCards'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/* async function getCountryByName(name: string): Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    return (await response.json())[0]
} */

async function getCountryByName(name: string): Promise<Country> {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const countries:Country[] = await response.json()

    return countries.find((country: Country)=>country.name.common === name)!
}

async function getCountryBordersByName(name:string) {
    const response = await fetch(`https://restcountries.com/v3.1/all`)
    const countries:Country[] = await response.json()

    const country = countries.find((country: Country)=>country.name.common === name)!

    return country.borders?.map((border)=> {
        const borderCountry = countries.find((country)=> country.cca3 === border)
        return {
            name: borderCountry?.name.common,
            ptName: borderCountry?.translations.por.common,
            flag: borderCountry?.flags.svg,
            flagAlt: borderCountry?.flags.alt
        }
})
}

const CountryPage = async ( {params: { name }} : {params: {name: string}}) => {
 
    const country = await getCountryByName(decodeURI(name))
    const borderCountries = await getCountryBordersByName(decodeURI(name))

    const formatter = Intl.NumberFormat("en", {notation: "compact"})

    return (
    <section className="flex flex-col container ">
        <h1 className='text-5xl my-16 font-bold text-center text-slate-100 '>
            {country.translations.por.common}
        </h1>
        <Link href="/" className='text-slate-100 flex items-center p-2'>
            <Image src="/arrow_back.svg" alt='voltar' width={24} height={24} />
            Voltar
        </Link>
        
        <article className='flex md:flex-row flex-col justify-between min-w-full p-10 bg-white rounded-xl'>
            <section>
                { country.capital && (
                    <h2 className='text-xl text-gray-800'>
                        <b>Capital: </b> {country.capital} 
                    </h2>
                )}
                <h2 className='text-xl text-gray-800'>
                    <b>Continente: </b> {country.region} { country.subregion && `- ${country.subregion}`}
                </h2>
                <h2 className='text-xl text-gray-800'>
                    <b>População:</b> {formatter.format(country.population) }
                </h2>
                { country.languages && (<h2 className='text-xl text-gray-800'>
                    <b>Língua Falada:</b> 
                    <br/> 
                        {Object.values(country.languages).map((language)=> (
                        <span key={language} className='inline-block px-2 py-1 bg-indigo-700 mr-2 text-sm text-white rounded-full'>
                            {language}
                        </span>
                    ))}
                </h2>
                )}
            </section>
            <div className='relative h-52 my-2 md:h-auto w-96 shadow-md md:order-last order-first '>
                <Image 
                    src={country.flags.svg} 
                    alt={country.flags.svg} 
                    fill 
                    className='object-cover'/>
            </div>
        </article>
        <section>
            <h3 className='mt-12 text-2xl font-semibold text-slate-100'>
                Países que fazem fronteira
            </h3>
            <div className='container md:grid-cols-3 sm:grid-cols-2  grid grid-cols-1 lg:grid-cols-4 w-full gap-2  p-1'>
                {borderCountries?.map((border)=> 
                    <CountryCards {...border} /> 
                )}
            </div>
        </section>
    </section>
  )
}

export default CountryPage