import React from 'react';
import Router from '../router.js';
import { IMAGE_ASSET } from '../constants.js';
import { Media } from 'react-bootstrap';

class Box extends React.Component {
  render() {
    let file = this.props.imageFile == ''? this.props.imageSrc : Router.route(IMAGE_ASSET, {fileName: this.props.imageFile});
    return (
      <div className='box-container'>
        <div className='box box-padding-top box-padding-bottom'>
          <Media>
            <Media.Left align='top' className='box-padding-left-sm'>
              <img width={this.props.imageWidth} height={this.props.imageHeight} alt="thumbnail" src={file}/>
            </Media.Left>
            <Media.Body>
              <h2 className='box-text box-padding-left-md'>{this.props.title}</h2>
              {this.props.contentCallback()}
            </Media.Body>
          </Media>
        </div>
      </div>
    )
  }
}

Box.defaultProps = {
  contentCallback: () => 'No Content',
  imageFile: '',
  imageSrc: '',
  imageWidth: 64,
  imageHeight: 64
}

export default Box;
