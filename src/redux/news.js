import axios from 'axios';

export function getHomeNews() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=google-news,cnn,axios,the-new-york-times,fox-news,usa-today,cbs-news&q=huntsville or alabama&pageSize=3&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_HOME_NEWS',
                homeNews: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getLocal() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=cnn,axios,the-new-york-times,fox-news,bbc-news,google-news,usa-today,cbs-news&q=huntsville or alabama&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getNews() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=axios&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getTimes() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=the-new-york-times&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getCnn() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=cnn&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getEspn() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=espn&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getFox() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=fox-news&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getFoxSports() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=fox-sports&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getNatGeo() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=national-geographic&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}
export function getWash() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=the-washington-post&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getUsa() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=usa-today&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

export function getWired() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=wired&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}
export function getTech() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?sources=techradar&sortBy=publishedAt&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
        .then(response => {
            dispatch({
                type: 'GET_NEWS',
                news: response.data
            })
        }).catch(err => console.log(err))
    }
}

const initialNews = [];

export default function reducer (news = initialNews, action) {
    switch (action.type) {
        case 'GET_NEWS':
            return action.news;
        case 'GET_HOME_NEWS':
            return action.homeNews;
        default: 
            return news
    }
}