import api from "./axios.js"

export async function getAllGames() {
    const {data}  = await api.get("/games", {
     params: {
        key: import.meta.env.VITE_key,
        page: 1,
     },

    });
    return (data)
}