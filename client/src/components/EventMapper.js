import React from 'react'
import _ from 'lodash'
import Event from './Events'
import './EventMapper.scss'

export default function EventMapper(props) {

  //dicti, jossa mäpätään kuukaudet ja kuun nimet
  const month_dict = {
    1: 'Tammikuu',
    2: 'Helmikuu',
    3: 'Maaliskuu',
    4: 'Huhtikuu',
    5: 'Toukokuu',
    6: 'Kesäkuu',
    7: 'Heinäkuu',
    8: 'Elokuu',
    9: 'Syyskuu',
    10: 'Lokakuu',
    11: 'Marraskuu',
    12: 'Joulukuu',
  }
  
  //group events by month
  const groupEvents = () => {
    const events = props.events.items.map((event) => {
      //ISO-stringi -> Date-objektiksi
      let date = new Date(event.start.dateTime)
      //palautetaan objekti, jolla kuukausi, vuosi ja lista tapahtumia
      return {
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        events: [event],
      }
    })
    //groupataan tapahtumat kuukausittain
    return _.groupBy(events, 'month')
  }

  const event_data = groupEvents()

  //tulostetaan tapahtumat kuukausittain
  const getEventsMonthly = (data, month) => {
    return (
      <div key={month} className="card-container">
        <h2>{month_dict[month]}</h2>
          {data.map((element) => {
            let event = element.events[0]
            return (
              <Event
                key={event.id}
                title={event.summary}
                date={event.start.dateTime}
                endingDate={event.end.dateTime}
                location={event.location}
              />
            )
          })}
      </div>
    )
  }

  return (
    <>
      <h1 className='h1'>Tulevia tapahtumia</h1>
        {_.map(event_data, (data, month) => {
          return getEventsMonthly(data, month)
        })}
    </>
  )
}