import React from 'react';
import { Timeline as TimelineComp }  from 'vertical-timeline-component-for-react';
import TimeItem from './TimeItem.js'

function Timeline() {
  const events = [
    {
      eventName: "Test event"
    },
    {
      eventName: 'Event 2'
    }
  ]
  return (
      <TimelineComp lineColor={'#ddd'}>
        {events.map((e, i) => (
          <TimeItem key={i} event={e} />
        ))}
      </TimelineComp  >
  );
}

export default Timeline;
