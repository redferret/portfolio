import React from 'react';
import Router from '../router.js';

export default class Bio extends React.Component {
  render() {
    return (
      <div>
        <p className='box-text box-padding-left-md'>
        {"Hello, my name is Richard (If you haven't read the above yet), I'm "+
          "an easy going Colorado Native born in Englewood and raised in Castle Rock. " +
          "I attended Douglas Country High School where I started programming as a freshman learning " +
          " Visual Basic. From that point on I was hooked on programming. It was " +
          " mostly for fun but I loved it so much. "}
        </p>
        <p className='box-text box-padding-left-md'>
          {"I took a carrer in Goldsmithing after high school, due to my interest in metal working and art," +
          " before returning to College to obtain my degree in Computer Science. I wasn't sure what I " +
          " wanted to do or how to do it when it came to software development, but I strived to learn more. " +
          " I took a keen interest in Simulations to watch things evolve, being Biological or Geological. I also " +
          " love single paged Web Applications and SaaS. I feel they are the future software for countless " +
          " businesses, so my focus is on just that. Building sleek simple single paged web applications that are " +
          " powerful but also user friendly."}
        </p>
        <p className='box-text box-padding-left-md'>
          {"This portfolio is rather new and I intend to start a blog that anyone visiting here can read. " +
           "My blog will focus on various aspects of my experiences with developing software and other side stuff " +
           "involving my interests. Please take a look at my Git accessible in the top menu bar of this page " +
           "and highlighted projects detailed below."}
        </p>
      </div>
    )
  }
}
