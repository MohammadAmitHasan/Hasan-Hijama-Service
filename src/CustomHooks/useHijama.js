import { useEffect, useState } from "react"

const useHijama = () => {
    const [hijamaDetails, setHijamaDetails] = useState([]);

    useEffect(() => {
        fetch('hijama.json')
            .then(res => res.json())
            .then(data => setHijamaDetails(data))
    }, [])
    return [hijamaDetails, setHijamaDetails]
}

export default useHijama;