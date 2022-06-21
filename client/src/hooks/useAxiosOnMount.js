import axios from "axios"
import { useEffect, useState } from "react"

const useAxiosOnMount = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        setError(null)
        try {
            let res = await axios.get(url)
            setData(res.data)
            setLoading(false)
        } catch (error) {
            setError('error occured')
            setLoading(false)
        }
    }

    return {data, loading, error}
}
export default useAxiosOnMount