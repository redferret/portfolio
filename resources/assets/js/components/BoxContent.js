import React from 'react';
import Router from '../router.js';
import { IMAGE_ASSET } from '../constants.js';
import { Media } from 'react-bootstrap';

class BoxContent extends React.Component {
  render() {
    let file = this.props.imageFile == ''? this.props.imageSrc : Router.route(IMAGE_ASSET, {fileName: this.props.imageFile});
    let imageLink = (this.props.imageLink?
      <a href={this.props.imageLink}>
        <img width={this.props.imageWidth} height={this.props.imageHeight} alt="thumbnail" src={file}/>
      </a>
      :
      <img width={this.props.imageWidth} height={this.props.imageHeight} alt="thumbnail" src={file}/>
    );
    return (
      <Media>
        <Media.Left align='top' className='box-padding-left-sm'>
          {imageLink}
        </Media.Left>
        <Media.Body>
          <h2 className='box-text box-padding-left-md'>{this.props.title}</h2>
          {this.props.contentCallback()}
        </Media.Body>
      </Media>
    )
  }
}

BoxContent.defaultProps = {
  contentCallback: () => 'No Content',
  imageFile: '',
  imageSrc: '',
  imageWidth: 64,
  imageHeight: 64
}

export default BoxContent;
