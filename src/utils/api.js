import axios from 'axios';

const newsApi = axios.create({
    baseURL : "https://ursula-nc.herokuapp.com/api"
});

export const getArticles = (topic) => {
    if(topic){
        return newsApi.get(`/articles?topic=${topic}`)
        .then((result) => {
            return result.data;
        })
    } else {
        return newsApi.get('/articles').then((result) => {
            return result.data;
        })
    }
}

export const getArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then((result)  => {
        return result.data;
    })
}

export const increaseVote = (article_id) => {
    return newsApi.patch(`/articles/${article_id}`, 
    { inc_votes : 1 } )
    .then((result)  => {
        return result.data;
    })
}

export const decreaseVote = (article_id) => {
    return newsApi.patch(`/articles/${article_id}`, 
    { inc_votes : -1 } )
    .then((result)  => {
        return result.data;
    })
}

export const getTopics = () => { 
     return newsApi.get('/topics')
     .then((result) => {
        return result.data;
    })
}


