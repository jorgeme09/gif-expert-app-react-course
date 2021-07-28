import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GIF_API_KEY, GIF_URL } from '../config'

export const useFetchGifs = (categoty) => {
    const searchURL = `${GIF_URL}search?api_key=${GIF_API_KEY}&limit=10&q=`

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(searchURL, categoty).then(imgs => {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 2000)
        })
    }, [categoty])

    return state
}