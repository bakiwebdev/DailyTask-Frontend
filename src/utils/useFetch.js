import React,{useState, useEffect, useContext} from 'react'
import { UserContext } from  '../provider/User'
import axios from 'axios'

const useFetch = ({method, url, body}) => {
    const {user, setUserData} = useContext(UserContext)
    const BaseUrl = process.env.REACT_APP_BASE_URL
    console.log(
        `${BaseUrl}${url}`
    )
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios({
                method: method,
                url: `${BaseUrl}${url}`,
                headers: {
                    'Content-Type': 'application/json',
                    'jwt_token': user.token
                },
                data: body
            })
            setData(response.data)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {data, error, loading}
}

export default useFetch