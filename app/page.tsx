import CountryCards from "@/components/CountryCards"

export type Country = {
  name: {
    common: string
  },
  translations: {
    por: {
      common: string
    }
  },
  flags: {
    svg: string;
    alt: string;
  }
  capital: string
  region: string
  subregion: string
  population: number
  languages?: {
    [key: string]: string
  }
  borders?: string[]
  cca3: string
}

async function getCountrries() : Promise<Country[]> {
  const response = await fetch('https://restcountries.com/v3.1/all')
  return response.json()
}


export default async function Home() {

  const countries = await getCountrries()



  return (
   <section className="container md:grid-cols-3 sm:grid-cols-2  grid grid-cols-1 lg:grid-cols-4 w-full gap-2 mt-16 p-1 ">
      {countries.map((country) => (
     <CountryCards 
        key={country.name.common}
        name={country.name.common} 
        ptName={country.name.common}
        flag={country.flags.svg}
        flagAlt={country.flags.alt}
        />
      ))}
   </section> 
  )
}
