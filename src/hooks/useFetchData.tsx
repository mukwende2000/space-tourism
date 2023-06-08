import { useState, useEffect } from 'react'

interface Destination {
  name: string
  description: string
  distance: string
  travel: string
  images: { png: string; webp: string }
}

interface CrewMember {
  name: string
  images: { png: string; webp: string }
  role: string
  bio: string
}

interface Tech {
  name: string
  images: { potrait: string; landscape: string }
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
