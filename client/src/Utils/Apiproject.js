import axios from 'axios'

export default {
    getHomework: function(){
        return axios.get("/api/portfolio/Projects/homework");
    },
    getProjects: function(){
        return axios.get("/api/portfolio/Projects/project");
    },
    getAll: function(){
        return axios.get("/api/portfolio/Projects")
    }
};