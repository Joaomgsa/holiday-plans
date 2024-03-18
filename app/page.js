import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh_-_nav)] w-60 border-r">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-14 px-4 border-b">
            <MountainIcon className="h-6 w-6" />
            <span className="ml-2 font-semibold">Faro Trips</span>
            <Button className="ml-auto" variant="icon">
              <SettingsIcon className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="flex flex-col gap-2">
              <Link
                className="flex items-center h-8 gap-2 text-sm font-medium px-4 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center h-8 gap-2 text-sm font-medium px-4 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                href="/mytrips"
              >
                <CalendarIcon className="h-4 w-4" />
                My Trips
              </Link>
              <Link
                className="flex items-center h-8 gap-2 text-sm font-medium px-4 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                href="/mytrips"
              >
                <PlusIcon className="h-4 w-4" />
                New Trip
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center px-4 sm:px-6">
          <Button className="h-8 w-8 rounded-full md:hidden" variant="icon">
            <span className="sr-only">Toggle sidebar</span>
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <div className="ml-auto flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Image
                alt="Avatar"
                className="rounded-full"
                height={32}
                src="/placeholder.svg"
                width={32}
              />
              <div className="flex flex-col text-sm leading-none">
                <span className="font-semibold">Alice</span>
              </div>
            </div>
            <Button className="rounded-full h-8" variant="ghost">
              <SearchIcon className="w-4 h-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button className="rounded-full h-8" variant="ghost">
              <BellIcon className="w-4 h-4" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 flex flex-col p-4 md:p-6 gap-4 md:gap-8">
          <div className="flex items-center gap-4 md:gap-8">
            <h1 className="text-2xl font-semibold">My Trips</h1>
            <Button size="sm" variant="outline">
              <RefreshCcwIcon className="w-4 h-4 mr-2 -translate-y-0.5" />
              Refresh
            </Button>
            <div className="ml-auto flex items-center gap-2 md:gap-4">
              <Button size="sm" variant="outline">
                <DownloadIcon className="w-4 h-4 mr-2 -translate-y-0.5" />
                Export
              </Button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <Image
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height={64}
                      src="public\img\placeholder.svg"
                      layout="fixed"
                      width={64}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                  <Image
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height={64}
                      src="public\img\placeholder.svg"
                      layout="fixed"
                      width={64}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                  <Image
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height={64}
                      src="public\img\placeholder.svg"
                      layout="fixed"
                      width={64}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="divide-y-0 flex items-center justify-between p-4 md:p-6">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">New York</span>
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
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2">
                  <Image
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height={64}
                      src="public\img\placeholder.svg"
                      layout="fixed"
                      width={64}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                  <Image
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height={64}
                      src="public\img\placeholder.svg"
                      layout="fixed"
                      width={64}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                  <Image
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height={64}
                      src="public\img\placeholder.svg"
                      layout="fixed"
                      width={64}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="divide-y-0 flex items-center justify-between p-4 md:p-6">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">San Francisco</span>
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
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2">
                    <img
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      alt="Image"
                      className="rounded-lg overflow-hidden object-cover"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="divide-y-0 flex items-center justify-between p-4 md:p-6">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">Paris</span>
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
          </div>
        </main>
      </div>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function RefreshCcwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
