import { API_URL } from "@/config/api.config";
import axios from "axios";

export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-type':  'application/json'
    }
})

export const axiosClassic = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-type': 'application/json'
    }
})