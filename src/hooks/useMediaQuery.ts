import { useEffect, useState } from 'react'

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        const currentMedia = matchMedia(query)
        console.log(currentMedia.media)
        console.log(currentMedia.matches)
        if (currentMedia.matches !== matches) setMatches(currentMedia.matches)

        function updateMatches() {
            setMatches(currentMedia.matches)
        }
        window.addEventListener('resize', updateMatches)
        return () => window.removeEventListener('resize', updateMatches)
    }, [matches, query])
    return matches
}
export default useMediaQuery
