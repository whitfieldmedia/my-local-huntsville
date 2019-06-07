import React from 'react';
import Client from 'predicthq';
import './css/events.css';
const moment = require('moment');

class Events extends React.Component{
    constructor() {
        super()    
        this.state = {
            done: false,
            data: []
        }
    }

    getEvents = () => {
        let phq = new Client({access_token:"nfFqp6j6LbGNRQw4Zp1NM8wp8U3dVc"})
        let now = new Date();
        let date = moment(now).format('YYYY-MM-DD')
        phq.events.search({within:'50mi@34.729529,-86.586003', category:'concerts,festivals,performing-arts,sports,community,conferences,expos', country:'US', sort:'start', 'start.gte':`${date}`})
            .then((results) => {
                this.setState ({
                    data: results,
                    done: true
                })
            })
    }

    getDate = (data) => {
        return moment(data).format('dddd MMMM DD, YYYY')
    }

 
    render() {
        if(!this.state.done) {
            this.getEvents()
        }
        if(this.state.done) {
            console.log(this.state.data.result.results)
        }

        return (
            <div className="events-page">
                {this.state.done
                ? this.state.data.result.results.map(data => (
                    <div key={data.id}>
                        <h2> {data.title} </h2>
                        <p> {this.getDate(data.start)} </p>
                        <p> {data.description} </p>
                        <p> {data.category} </p>
                        {data.entities.map(place => (
                            <div key={place.entity_id}>
                                <p> {place.name} </p>
                                <p> {place.formatted_address} </p>
                            </div>

                        ))}
                    </div>
                ))
                :null}

            </div>
        )
    }
}

export default Events;
