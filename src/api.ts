import axios from "axios";
import { redirect } from "next/navigation";

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})

api.interceptors.request.use(config => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('access-token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401){
            localStorage.removeItem('access-token')
            redirect('/login')
        }
        return Promise.reject(error)
    }
)

