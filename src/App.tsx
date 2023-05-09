import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import ArrowIcon from '/images/icon-arrow.svg';



function App() {


  const [ipdata, setIpdata] = useState({
    ipAddress: '192.212.174.101',
    location: 'Brooklyn, NY 10001',
    timezone: 'utc -05:00',
    isp: 'Space x Starlink'
  });

  const [term, setTerm] = useState('');


  return (
    <main className="grid min-h-screen ">
      <header className="font-rubik relative bg-hero-mobile md:bg-hero-desktop h-[280px]   bg-cover bg-center w-full">
        <h1 className="py-6 text-2xl font-medium text-center text-white">IP Address Tracker </h1>
        <div className="flex justify-center mx-auto max-w-[300px]">
          <input className="w-full pl-4 rounded-s-lg" type="search" onChange={(e) => setTerm(e.target.value)} placeholder="Search for any IP address or domain" />
          <button aria-label="search" onClick={() => console.log(term)} className="p-4 text-white bg-black rounded-e-lg"> <img src={ArrowIcon} alt="arrow-icon" /></button>
        </div>

        <div className="grid items-center z-50 p-4 bg-white rounded-2xl max-w-[300px] left-0 right-0 mx-auto gap-4 absolute top-1/2 ">
          <div className="text-center">
            <span className="text-xs font-medium uppercase text-dark-gray">ip address</span>
            <p className="text-xl font-semibold capitalize text-very-dark-gray">{ipdata.ipAddress}</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-medium uppercase text-dark-gray">location</span>
            <p className="text-xl font-semibold capitalize text-very-dark-gray">{ipdata.location}</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-medium uppercase text-dark-gray">timezone</span>
            <p className="text-xl font-semibold capitalize text-very-dark-gray">{ipdata.timezone}</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-medium uppercase text-dark-gray">isp</span>
            <p className="text-xl font-semibold capitalize text-very-dark-gray">{ipdata.isp}</p>
          </div>
        </div>
      </header>

      <div className='w-full h-[calc(100vh-280px)] z-10'>

        <MapContainer className='!h-full' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  )
}

export default App
