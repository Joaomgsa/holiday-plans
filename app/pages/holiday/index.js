import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import TripCard from './TripCard';

export default function Holiday() {
  const [trips, setTrips] = useState([
    { id: 1, location: 'New York' },
    { id: 2, location: 'San Francisco' },
    { id: 3, location: 'Paris' },
  ]);

  const refreshTrips = async() => {
    // Lógica para atualizar a lista de viagens
    try {
      const response = await fetch('https://sua-api.com/viagens');
      const data = await response.json();
  
      setTrips(data);
    } catch (error) {
      console.error('Erro ao atualizar a lista de viagens:', error);
    }


  };

  const exportTrips = () => {
    // Lógica para exportar as viagens
  };

  const deleteTrip = (id) => {
    setTrips(trips.filter((trip) => trip.id !== id));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col p-4 md:p-6 gap-4 md:gap-8">
          <div className="flex items-center gap-4 md:gap-8">
            <h1 className="text-2xl font-semibold">My Trips</h1>
            <button onClick={refreshTrips} className="btn btn-sm">
              Refresh
            </button>
            <div className="ml-auto flex items-center gap-2 md:gap-4">
              <button onClick={exportTrips} className="btn btn-sm">
                Export
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            {trips.map((trip) => (
              <TripCard key={trip.id} trip={trip} onDelete={deleteTrip} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
