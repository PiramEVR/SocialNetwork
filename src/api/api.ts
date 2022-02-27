import axios from 'axios';
import {ProfileType} from "../redux/profileReducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "4e6e4d4f-bd28-4d92-9c35-ed06a9d5bf38"
    },
})

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
    }
}
type setUserDataType = (userId: number, email: string, login: string) => void

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
            }
    }

