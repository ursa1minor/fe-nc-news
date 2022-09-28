import axios from 'axios';

const newsApi = axios.create({
    baseURL : "https://ursula-nc.herokuapp.com/api"
});

export const getArticles = (topic) => {
    if(topic){
        return newsApi.get(`/articles?topic=${topic}`).then((res) => {
            return res.data;
        })
    } else {
        return newsApi.get('/articles').then((res) => {
            return res.data;
        })
    }
}

export const getTopics = () => {
     return newsApi.get('/topics').then((res) => {
        return res.data;
    })
}
