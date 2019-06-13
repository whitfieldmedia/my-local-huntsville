import axios from 'axios';

export function getNews() {
    return dispatch => {
        axios.get('https://newsapi.org/v2/everything?q=huntsville and top and affordable&pageSize=3&language=en&apiKey=3e194d45107f4996968b5e89e9fb4cd3')
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
        default: 
            return news
    }
}