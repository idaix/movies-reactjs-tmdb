import axios from "axios";

export const BASE_URL = 'https://api.themoviedb.org/3'

const options = {
    url: BASE_URL,
    params: {
        'api_key': import.meta.env.VITE_APP_TMDB_KEY,

    }
    // headers: {
    //   'api_key': import.meta.env.VITE_APP_TMDB_KEY,
    // }
};


export const fetchMoviesData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data
}