import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import MapPinIcon from "../../components/ui/MapPinIcon";
import TrashIcon from "../../components/ui/TrashIcon";
import FileEditIcon from "../../components/ui/fileEditIcon";

// Componente para renderizar um item de viagem
function TripItem({ location, imageSrc }) {
  return (
    <Card>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-2">
          <Image
            alt="Image"
            className="rounded-lg overflow-hidden object-cover"
            height={64}
            src={imageSrc}
            layout="fixed"
            width={64}
          />
        </div>
      </CardContent>
      <CardFooter className="divide-y-0 flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium">{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <FileEditIcon className="w-4 h-4" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button size="icon" variant="ghost">
            <TrashIcon className="w-4 h-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

// use Client
export default function MyTrips() {
  const [state, setState] = useState([
    { location: "New York", imageSrc: "/img/new-york.jpg" },
    { location: "San Francisco", imageSrc: "/img/san-francisco.jpg" },
    { location: "Paris", imageSrc: "/img/paris.jpg" },
  ]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-[calc(100vh-_nav)] w-60 border-r">
        {/* Conteúdo da barra lateral */}
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col">
        {/* Cabeçalho */}
        <header className="h-14 border-b flex items-center px-4 sm:px-6">
          {/* Conteúdo do cabeçalho */}
        </header>

        {/* Corpo principal */}
        <main className="flex-1 flex flex-col p-4 md:p-6 gap-4 md:gap-8">
          {/* Barra de ferramentas */}
          <div className="flex items-center gap-4 md:gap-8">
            <h1 className="text-2xl font-semibold">My Trips</h1>
            {/* Outros elementos da barra de ferramentas */}
          </div>

          {/* Lista de viagens */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            {trips.map((trip, index) => (
              <TripItem key={index} location={trip.location} imageSrc={trip.imageSrc} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
