import { useState, useEffect } from 'react'

<<<<<<< HEAD
export interface Destination {
=======
interface Destination {
>>>>>>> refs/remotes/origin/main
  name: string
  description: string
  distance: string
  travel: string
  images: { png: string; webp: string }
}

<<<<<<< HEAD
export interface CrewMember {
=======
interface CrewMember {
>>>>>>> refs/remotes/origin/main
  name: string
  images: { png: string; webp: string }
  role: string
  bio: string
}

<<<<<<< HEAD
export interface Tech {
  name: string
  images: { portrait: string; landscape: string }
=======
interface Tech {
  name: string
  images: { potrait: string; landscape: string }
>>>>>>> refs/remotes/origin/main
  description: string
}

interface Data {
  destinations: Destination[]
  crew: CrewMember[]
  technology: Tech[]
}

function useFetchData(): Data | undefined {
  const [data, setData] = useState<Data>()
  useEffect(() => {
    async function getData(): Promise<void> {
      const data = await fetch('/data.json')
      const res = await data.json()
      setData(res)
    }

    getData()
    return () => {}
  }, [])

  return data
}
export default useFetchData
