import axios from 'axios';
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

export function getEvents() {
    return dispatch => {
        axios.get(CORS_PROXY + 'https://api.songkick.com/api/3.0/metro_areas/9479/calendar.json?per_page=10&page=1&apikey=p3UVDXwZEf9LWeUB')
        .then(res => {
            dispatch({
                type: 'GET_EVENTS',
                events: res.data
            })
        })
    }
}
 
let initialState = [];

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_EVENTS':
            return action.events
        default:
            return state
    }
}