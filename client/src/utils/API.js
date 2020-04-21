import axios from "axios"

export  default {
    getHeadache(){
        return axios.get("/api/ailments/headache")
    },

    getHeadachePharm(){
        return axios.get("/api/ailments/headache/pharm")
    },

    getHeadacheNoPharm(){
        return axios.get("/api/ailments/headache/nonpharm")
    },

    getBackpain(){
        return axios.get("/api/ailments/backpain")
    },

    getBackpainPharm(){
        return axios.get("/api/ailments/backpain/pharm")
    },

    getBackpainNoPharm(){
        return axios.get("/api/ailments/backpain/nopharm")
    },
}