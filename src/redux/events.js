import axios from 'axios';
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"


export function getEvents() {
    return dispatch => {
        axios.get(CORS_PROXY + 'https://www.trumba.com/calendars/ourvalleyevents.xml')
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