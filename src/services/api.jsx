import axios from "axios";
import { logout } from "../shared/hooks";

const apiClient = axios.create({

    baseURL: 'http://127.0.0.1:8080/twitch/v1',
    timeout: 1000
    
})

apiClient.interceptors.request.use(

    (config) => {
        
        const userDetails = localStorage.getItem('user')

        if (userDetails) {
            
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`

        }

        return config

    },

    (e) => {

        return Promise.reject(e)

    }

)

export const login = async(data) => {
    
    try {
        
        return await apiClient.post('auth/login', data)

    } catch (e) {
        
        return {
            error: true,
            e
        }

    }

}

export const register = async (data) => {
    
    try {
        
        return await apiClient.post('auth/register', data)

    } catch (e) {
        
        return {
            error: true,
            e
        }

    }

}

export const getChannels = async () => {
    
    try {
        
        return await apiClient.get('/channels')

    } catch (e) {
        return {
            error: true,
            e
        }

    }

}

export const getFollowedChannels = async () => {
    
    try {
        
        return await apiClient.get('/channels/followed')

    } catch (e) {

        checkResponseStatus(e)

        return {
            error: true,
            e: e
        }

    }

}

const checkResponseStatus = (e) => {
    
    const responseStatus = e?.response?.status

    if (responseStatus) {
        (responseStatus === 401 || responseStatus === 403) && logout()
    }

}

export const getChannelsSettings = async () => {
    
    try {
        
        return await apiClient.get('/settings/channel')

    } catch (e) {
        return {
            error: true,
            e
        }

    }

}

export const updateChannelSettings = async (data) => {
    
    try {
        
        return await apiClient.put('/settings/channel', data)

    } catch (e) {
        return {
            error: true,
            e
        }

    }

}

export const getChannelDetails = async (channelId) => {
    
    try {
        
        return await apiClient.get(`/channels/${channelId}`)

    } catch (e) {
        return {
            error: true,
            e
        }

    }

}

export const followChannel = async (channelId) => {
    
    try {
        
        return await apiClient.post('/channels/follow', {channelId})

    } catch (e) {
        return {
            error: true,
            e
        }

    }

}

export const changePassword = async (data) => {
    
    try {
        
        return await apiClient.patch('/settings/password', data)

    } catch (e) {
        return {
            error: true,
            e
        }

    }

}