'use client'
import Image from 'next/image'
import Sensors from './components/sensors/page'



export default function Home() {
  return (
    <main>
      
      <div style={{ display: ' grid ', justifyContent: 'space-around ' }}>
        <Sensors/>
        

        </div>
    </main>
  )
}

