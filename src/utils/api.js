import axios from 'axios';

const newsApi = axios.create({
    baseURL : "https://ursula-nc.herokuapp.com/api"
});

export const getArticles = (topic) => {
    return newsApi
        .get('/articles', { params: { topic: topic}})
        .then((result) => {
            return result.data;
        })
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

export const postComment = (article_id, body) => {
    console.log(article_id, body)
    return newsApi.post(`/articles/${article_id}/comments`, body)
    .then((result) => {
        console.log(result.data)
        return result.data;
    })
}

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
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

export const getUsers = () => { 
    return newsApi.get('/users')
    .then((result) => {
       return result.data;
   })
}


