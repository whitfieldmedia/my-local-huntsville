import Parser from 'rss-parser';
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
var parser = new Parser();

export function getFeed() {
    return dispatch => {
        parser.parseURL(CORS_PROXY + 'https://www.trumba.com/calendars/ourvalleyevents.xml')
        .then(response => {
            dispatch({
                type: 'GET_FEED',
                feed: response
            })
        }).catch(err => console.log(err))
    }
}

let initialFeed = [];

export default function reducer (state = initialFeed, action) {
    switch (action.type) {
        case 'GET_FEED':
            return action.feed
        default:
            return state
    }
}