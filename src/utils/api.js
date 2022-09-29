import axios from 'axios';

const newsApi = axios.create({
    baseURL : "https://ursula-nc.herokuapp.com/api"
});

export const getArticles = (topic) => {
    if(topic){
        console.log(topic)
        return newsApi.get(`/articles?topic=${topic}`)
        .then((result) => {
            console.log(result.data)
            return result.data;
        })
    } else {
        return newsApi.get('/articles').then((result) => {
            console.log(result.data)
            return result.data;
        })
    }
}

export const getArticle = (article_id) => {
    console.log(article_id)
    return newsApi.get(`/articles/${article_id}`)
    .then((result)  => {
        console.log(result.data, '<- result')
        return result.data;
    })
}

export const getTopics = () => {
    
     return newsApi.get('/topics')
     .then((result) => {
        console.log(result.data)
        return result.data;
    })
}
