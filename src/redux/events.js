import axios from 'axios';
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const token = 'nfFqp6j6LbGNRQw4Zp1NM8wp8U3dVc'

export function getEvents() {
    return dispatch => {
        axios.get(CORS_PROXY + 'https://api.predicthq.com/v1/events/?within=50mi@34.729529,-86.586003&category=concerts', {
            headers: { 'Authorization': `Bearer ${token}` }

        })
        .then(response => {
            dispatch({
                type: 'GET_EVENTS',
                events: response
            })
        }).catch(err => console.log(err))
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