import AppDispatcher from '../dispatcher.js';
import Bio from './Bio.js';
import BoxContainer from './BoxContainer.js';
import BoxContent from './BoxContent.js';
import BulletPoint from './BulletPoint.js';
import GoldsmithingBio from './GoldsmithingBio.js';
import MainStore from '../stores/MainStore.js';
import Navbar from './Navbar.js';
import Project from './Project.js';
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
    let projects = MainStore.getProjects();
    return (
      <div>
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

            <BoxContainer boxContent={
              <Row>
                <Col sm={7}>
                  <BoxContent title='About Me' imageFile='iconmonstr-id-card-thin-64.png'
                    contentCallback={() => {
                      return (
                        bulletPoints.map((bullet, index) =>
                          <BulletPoint key={bullet.subject+index} className='box-text box-padding-left-md'
                            subject={bullet.subject} content={bullet.content} />)
                      )
                    }
                  }/>
                </Col>
                <Col sm={5}>
                  <img src={Router.route(IMAGE_ASSET, {fileName: 'hiking_image.jpg'})} width='90%' height='90%' />
                </Col>
              </Row>
            }/>
            <BoxContainer boxContent={
              <BoxContent title='Quick Bio' imageFile='iconmonstr-user-male-thin-240.png' contentCallback={() => <Bio />} />
            }/>
            <BoxContainer boxContent={
              <BoxContent title='Projects' imageFile='iconmonstr-pencil-thin-64.png' contentCallback={() => {
                return (
                  projects.map((project, index) => <Project key={'project_'+index} {...project}/>)
                )
              }} />
            }/>
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
