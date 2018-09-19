import React from 'react';

export default class BulletPoint extends React.Component {
  render() {
    return (
      <h4 className={this.props.className}>
        <span className='box-text-bold'>{this.props.subject}: </span>
        {this.props.content}
      </h4>
    )
  }
}
