import { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import ArrowIcon from '/images/icon-arrow.svg';
import { useFetch } from './hooks/useFetch';
import { LatLng } from 'leaflet';

export interface Location {
  ip: string;
  location: LocationClass;
  domains: string[];
  as: As;
  isp: string;
  proxy: Proxy;
}

export interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

export interface LocationClass {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

export interface Proxy {
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
}


function App() {



  //const [term, setTerm] = useState('192');
  const [term, setTerm] = useState('192.212.174.101');

  const [url, setUrl] = useState(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${term}`);

  const { data, isLoading, error } = useFetch<Location>(url)

  const handleUrl = () => {
    if (term)
      setUrl(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${term}`)
  }


  console.log(data);

  return (
    <main className="grid min-h-screen ">
      <header className="font-rubik relative bg-hero-mobile md:bg-hero-desktop h-[280px]   bg-cover bg-center w-full">
        <h1 className="py-6 text-2xl font-medium text-center text-white lg:mt-8">IP Address Tracker </h1>
        <div className="flex justify-center mx-auto max-w-sm w-[80%] md:max-w-md">
          <input className="w-full pl-4 rounded-s-lg" type="search" onChange={(e) => setTerm(e.target.value)} placeholder="Search for any IP address " />
          <button aria-label="search" onClick={() => handleUrl()} className="p-4 text-white bg-black hover:bg-slate-800 rounded-e-lg"> <img src={ArrowIcon} alt="arrow-icon" /></button>
        </div>

        {(!isLoading && data) &&
          <div className="grid items-center lg:grid-cols-4 z-50 p-4 lg:p-8 bg-white rounded-2xl max-w-sm w-[80%] md:max-w-md lg:max-w-4xl left-0 right-0 mx-auto gap-4 absolute top-1/2 lg:top-[calc(100%-72px)] lg:min-h-[144px] ">
            <div className="text-center lg:pr-8 lg:border-r">
              <span className="text-xs font-medium uppercase text-dark-gray">ip address</span>
              <p className="text-xl font-semibold capitalize text-very-dark-gray">{data.ip}</p>
            </div>
            <div className="text-center lg:pr-8 lg:border-r">
              <span className="text-xs font-medium uppercase text-dark-gray">location</span>
              <p className="text-xl font-semibold capitalize text-very-dark-gray">{data.location.country} - {data.location.city}</p>
            </div>
            <div className="text-center lg:pr-8 lg:border-r">
              <span className="text-xs font-medium uppercase text-dark-gray">timezone</span>
              <p className="text-xl font-semibold capitalize text-very-dark-gray">Utc {data.location.timezone}</p>
            </div>
            <div className="text-center lg:pr-8 ">
              <span className="text-xs font-medium uppercase text-dark-gray">isp</span>
              <p className="text-xl font-semibold capitalize text-very-dark-gray">{data.isp ? data.isp : '-'}</p>
            </div>
          </div>
        }
        {
          error &&
          <div className="grid items-center  z-50 p-4 lg:p-8 bg-white rounded-2xl max-w-sm w-[80%] md:max-w-md lg:max-w-4xl left-0 right-0 mx-auto gap-4 absolute h-[288px] top-[calc(100%-144px)] lg:top-[calc(100%-72px)] lg:h-[144px] ">
            <h3 className='text-xl text-center uppercase text-very-dark-gray'>Ip address not valid</h3>
          </div>
        }


      </header>

      <div className='w-full h-[calc(100vh-280px)] z-10 bg-stone-300'>

        {(!isLoading && data && !error) &&
          <MapContainer className='!h-full' center={[data.location.lat, data.location.lng]} zoom={16} scrollWheelZoom={false}>
            <TileLayer
              attribution=''
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[data.location.lat, data.location.lng]}>

            </Marker>
          </MapContainer>
        }
      </div>
    </main>
  )
}

export default App
