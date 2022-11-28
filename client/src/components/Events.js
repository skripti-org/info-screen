import React from 'react'
import Moment from 'react-moment'
import 'moment/locale/fi'
import './Event.scss'
import EventIcon from '@mui/icons-material/Event';

export default function Event(props) {


  const location = () => {
    if (props.location && props.location.split(',').length > 1) {
      return <h5>{props.location.split(',')[0]}</h5>
    } else if (props.location) {
      return <h5>{props.location}</h5>
    } else {
      return null
    }
  }

  const date = () => {
    // dddd[na] -> tiistaina
    if (props.date) {
      return (
        <Moment element="h5" format=" [Klo] HH:mm, DD.MM.YYYY" locale="fi">
          {props.date}
        </Moment>
      )
    }
  }

  const day = () => {
    if (props.date) {
      return (
        <Moment element="h5" format=" dddd[na]" locale="fi">
          {props.date}
        </Moment>
      )
    }
  }

  return (
    <>
      <div className="event_container">
        <div className="event_info">
          <div className="event_title">
            <h4>{props.title}</h4>
          </div>
          <div className="event_location">
            <span className="date">{date()}</span>
            <span className="location">{location()}</span>
          </div>
        </div>
      </div>
    </>
  )
}