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
          " Visual Basic and moved on to C++, Java, PHP, and eventually JavaScript "}
        </p>
      </div>
    )
  }
}
