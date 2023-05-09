
function App() {

  return (
    <main className="min-h-screen bg-black ">
      <header className="font-rubik relative bg-hero-mobile md:bg-hero-desktop h-[280px]   bg-cover bg-center w-full">
        <div className="grid items-center p-4 bg-white rounded-2xl max-w-[300px] left-0 right-0 mx-auto gap-4 absolute top-1/2 ">
          <div className="text-center">
            <span className="text-xs font-medium uppercase text-dark-gray">ip address</span>
            <p className="text-xl font-semibold capitalize text-very-dark-gray">192.212.174.101</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-medium uppercase text-dark-gray">location</span>
            <p className="text-xl font-semibold capitalize text-very-dark-gray">Brooklyn, NY 10001</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-medium uppercase text-dark-gray">timezone</span>
            <p className="text-xl font-semibold capitalize text-very-dark-gray">utc -05:00</p>
          </div>
          <div className="text-center">
            <span className="text-xs font-medium uppercase text-dark-gray">isp</span>
            <p className="text-xl font-semibold capitalize text-very-dark-gray">Space x Starlink</p>
          </div>

        </div>
      </header>
    </main>
  )
}

export default App
