import React from 'react';
import Router from '../router.js';
import { IMAGE_ASSET } from '../constants.js';
import { Col, Row } from 'react-bootstrap';

export default class Project extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div>
        <div className='project-box-divider'></div>
        <div className='project-box box-padding-bottom'>
          <Row>
            <Col sm={5}>
              <a href={this.props.projectLink} className='box-padding-left-md '>
                <h4 className='box-text'>
                  {this.props.projectTitle}
                </h4>
                <img width='470' height='240' src={Router.route(IMAGE_ASSET, {fileName: this.props.projectImageFile})}/>
              </a>
            </Col>
            <Col sm={7}>
              <div className='box-text project-description-padding'>
                {this.props.projectDescription()}
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className='box-padding-top'>
              {this.props.projectFooter()}
              <a className='box-text' href={this.props.projectRepositoryLink}>
                <img src={Router.route(IMAGE_ASSET, {fileName: 'GitHub-Mark-Light-32px.png'})} />
                <span className='box-padding-left-sm'>
                  Project Repository
                </span>
              </a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
