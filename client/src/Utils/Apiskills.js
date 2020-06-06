import axios from 'axios'

export default {
    getSkills: function (){
        return axios.get("/api/portfolio/skills")
    }
};