import { api } from './api'

export async function getPersonagem(name) {
    try {
        const resultado = await api.get(`/character?name=${name}`)
        return resultado
    } catch (error){
        console.log(error)
        return {}
    }
}