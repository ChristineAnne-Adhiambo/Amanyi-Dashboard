'use client'
import Image from 'next/image'
import Sensors from './Component/Sensors'
import Graph from './Component/Graphs'
// import Notification from './components/Notification/notification'





export default function Home() {
  return (
    <main>
      
      <div style={{ display: ' grid ', justifyContent: 'space-around ' }}>

      <Sensors/>
        {/* <Graph/> */}
       
        {/* <Notification/> */}

        </div>
    </main>
  )
}

