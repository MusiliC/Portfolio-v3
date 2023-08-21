import Hero from '@/components/home/Hero'
import Me from '@/components/home/Me'
import Service from '@/components/home/Service'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-[70vh] lg:min-h-[85vh] ">
      <Hero/>
      <Me/>
      <Service/>
    </main>
  )
}
