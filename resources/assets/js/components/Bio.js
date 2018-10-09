import React from 'react';
import Router from '../router.js';

export default class Bio extends React.Component {
  render() {
    return (
      <div>
        <p className='box-text box-padding-left-md'>
        {"Hello, my name is Richard, I'm "+
          "an easy going Colorado Native born in Englewood and raised in Castle Rock. " +
          "I attended Douglas Country High School where I started programming as a freshman learning " +
          " Visual Basic. From that point on I was hooked on programming. "}
        </p>
        <p className='box-text box-padding-left-md'>
          {"I took a career in Goldsmithing after high school, due to my interest in metal working," +
          " before returning to College to obtain my degree in Computer Science. " +
          " I took a keen interest in Simulations to watch things evolve, being Biological or Geological. I also " +
          " love single paged Web Applications. I feel they are the future software for countless " +
          " businesses. "}
        </p>
        <p className='box-text box-padding-left-md'>
          {"My main interest is on building sleek simple single paged web applications that are " +
          " powerful but also user friendly with a strong desire to solve real customer problems." +
          " I've mainly worked with PHP on the backend and ReactJS along with native JavaScript. HTML and SASS."}
        </p>
        <p className='box-text box-padding-left-md'>
          {"This portfolio is rather new and I intend to start a blog for anyone visiting here to read. " +
           "My blog will focus on various aspects of my experiences with developing software and other side stuff " +
           "involving my interests."}
        </p>
      </div>
    )
  }
}
