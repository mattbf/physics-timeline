import React from 'react';
import { Timeline as TimelineComp }  from 'vertical-timeline-component-for-react';
import TimeItem from './TimeItem.js'

const appStyle = {
  backgroundColor: '#333FFF',
  minHeight: '110vh'
}
function Timeline() {
  const events = [
    {
      title: "Test event",
      subtitle: 'this is a subtitle',
      p1: "This is some text or a paragraph",
      people: [
        {
          name: "Richard Feynman",
        },
        {
          name: "Albert Einstein",
        }
      ]
    },
    {
      title: 'Event 2',
      subtitle: 'this is a subtitle',
      people: [
        {
          name: "Richard Feynman",
        },
        {
          name: "Albert Einstein",
        }
      ]
    }
  ]
  return (
    <div style={appStyle}>
      <TimelineComp lineColor={'#ddd'}>
        {events.map((evt, i) => (
          <TimeItem key={i} evt={evt} />
        ))}
      </TimelineComp  >
      <p style={{marginBottom: '10px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center'}}> Built by <a href='https://github.com/mattbf' style={{marginLeft: '3px'}}> mattbf </a></p>
    </div>
  );
}

export default Timeline;
