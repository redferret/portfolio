import AppDispatcher from '../dispatcher.js';
import Bio from './Bio.js';
import Box from './Box.js';
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
            <Box title='About Me' imageFile='iconmonstr-id-card-thin-64.png' contentCallback={() => {
              return (
                bulletPoints.map((bullet, index) =>
                  <BulletPoint key={bullet.subject+index} className='box-text box-padding-left-md'
                    subject={bullet.subject} content={bullet.content} />
                )
              )}} />
            <Box title='Quick Bio' imageFile='iconmonstr-user-male-thin-240.png' contentCallback={() => <Bio />} />
            <Box title='Work History' imageFile='iconmonstr-gear-thin-64.png' contentCallback={() => {}} />
            <Box title='Projects' imageFile='iconmonstr-pencil-thin-64.png' contentCallback={() => {}} />
            <Box title='As a Goldsmith' imageSrc='https://14k9.com/images/categories/DJ/dj541a.jpg'
              imageWidth={128} imageHeight={128}
              contentCallback={() => <GoldsmithingBio />} />
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
