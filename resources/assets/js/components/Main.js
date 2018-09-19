import AppDispatcher from '../dispatcher.js';
import Bio from './Bio.js';
import BulletPoint from './BulletPoint.js';
import GoldsmithingBio from './GoldsmithingBio.js';
import MainStore from '../stores/MainStore.js';
import Navbar from './Navbar.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../router.js';

import {
  Col,
  Grid,
  Label,
  Media,
  Row,
} from 'react-bootstrap';

import {
  IMAGE_ASSET,
  MAIN_ID,
} from '../constants.js';

export default class Main extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  _onChange() {

  }

  componentDidMount() {
    MainStore.on(MAIN_ID, this._onChange.bind(this));
  }

  componentWillUnmount() {
    MainStore.removeListener(MAIN_ID, this._onChange.bind(this));
  }

  render() {
    let bulletPoints = MainStore.getAboutMeBulletPoints();
    return (
      <div>
        <Navbar />
        <Row id='header'>
          <Col sm={12}>
            <div className='box-container'>
              <div className='box'>
                <h1 className='box-text box-center box-padding-top box-padding-bottom'>Welcome to my Portfolio!</h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row id='page-content'>
          <Col sm={12}>
            <div className='box-container'>
              <div className='box box-padding-top box-padding-bottom'>
                <Media>
                  <Media.Left align='top' className='box-padding-left-sm'>
                    <img alt="thumbnail" src={Router.route(IMAGE_ASSET, {fileName: 'iconmonstr-id-card-thin-64.png'})}/>
                  </Media.Left>
                  <Media.Body>
                    <h2 className='box-text box-padding-left-md box-padding-bottom'>About Me</h2>
                    {bulletPoints.map((bullet, index) =>
                      <BulletPoint key={bullet.subject+index} className='box-text box-padding-left-md'
                        subject={bullet.subject} content={bullet.content} />
                    )}
                  </Media.Body>
                </Media>
              </div>
            </div>

            <div className='box-container'>
              <Bio />
            </div>

            <div className='box-container'>
              <div className='box box-padding-top box-padding-bottom box-padding-left-sm'>
                <Media>
                  <Media.Left align='top'>
                    <img alt="thumbnail" src={Router.route(IMAGE_ASSET, {fileName: 'iconmonstr-gear-thin-64.png'})}/>
                  </Media.Left>
                  <Media.Body>
                    <h2 className='box-text box-padding-bottom box-padding-left-md'>Work History</h2>
                  </Media.Body>
                </Media>
              </div>
            </div>

            <div className='box-container'>
              <div className='box box-padding-top box-padding-bottom box-padding-left-sm'>
                <Media>
                  <Media.Left align='top'>
                    <img alt="thumbnail" src={Router.route(IMAGE_ASSET, {fileName: 'iconmonstr-pencil-thin-64.png'})}/>
                  </Media.Left>
                  <Media.Body>
                    <h3 className='box-text box-padding-bottom box-padding-left-md'>Projects</h3>
                  </Media.Body>
                </Media>

              </div>
            </div>

            <div className='box-container'>
              <GoldsmithingBio />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

let RootElement = document.getElementById('root');

if (RootElement) {
  ReactDOM.render(<Main />, RootElement);
}
