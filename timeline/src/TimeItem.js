import React from 'react'
import { TimelineItem }  from 'vertical-timeline-component-for-react';

export default function TimeItem(props) {
  var timelineEvent = props.evt
  return(
    <TimelineItem
      key={timelineEvent.i}
      dateText={timelineEvent.date.getFullYear()}
      dateInnerStyle={{ background: '#76bb7f' }}
    >
      <h3>{timelineEvent.title}</h3>
      <h4>{timelineEvent.subtitle}</h4>
      <p>
        {timelineEvent.p1}
      </p>
      <p>
        {timelineEvent.p2}
      </p>
      <div>
        { timelineEvent.people ?
          timelineEvent.people.map(p => (
            <p> {p.name} </p>
          ))
          :
          null
        }
      </div>
    </TimelineItem>
  )
}
