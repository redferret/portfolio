import React from 'react';

export default class BoxContainer extends React.Component {
  render() {
    return (
      <div className='box-container'>
        <div className='box box-padding-top box-padding-bottom box-padding-right-sm'>
          {this.props.boxContent}
        </div>
      </div>
    )
  }
}
