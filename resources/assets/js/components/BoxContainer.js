import React from 'react';

export default class BoxContainer extends React.Component {
  render() {
    return (
      <div className='box-container'>
        <div className='box box-padding-top box-padding-bottom'>
          {this.props.boxContent}
        </div>
      </div>
    )
  }
}
