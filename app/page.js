import Hero from '@/components/home/Hero'
import Me from '@/components/home/Me'
import Service from '@/components/home/Service'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-[70vh] pt-28  lg:pt-32 lg:min-h-[10vh]  ">
      <Hero/>
      <Me/>
      <Service/>
    </main>
  )
}
