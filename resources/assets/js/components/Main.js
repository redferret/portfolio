import AppDispatcher from '../dispatcher.js';
import Bio from './Bio.js';
import BoxContainer from './BoxContainer.js';
import BoxContent from './BoxContent.js';
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
                            subject={bullet.subject} content={bullet.content} />
                        )
                    )}} />
                </Col>
                <Col sm={5}>
                  <img class='' src={Router.route(IMAGE_ASSET, {fileName: 'hiking_image.jpg'})} width='90%' height='90%' />
                </Col>
              </Row>
            }/>
            <BoxContainer boxContent={
              <BoxContent title='Quick Bio' imageFile='iconmonstr-user-male-thin-240.png' contentCallback={() => <Bio />} />
            }/>
            <BoxContainer boxContent={
              <BoxContent title='Projects' imageFile='iconmonstr-pencil-thin-64.png' contentCallback={() => {
                  return (
                    <div className='project-box box-padding-bottom'>
                      <Row>
                        <Col sm={5}>
                          <a href='http://richard-desilvey.info/ProductionCalculator' className='box-padding-left-md '>
                            <h4 className='box-text'>
                              Factorio Production Calculator
                            </h4>
                            <img src={Router.route(IMAGE_ASSET, {fileName: 'fact_thumb.png'})}/>
                          </a>
                        </Col>
                        <Col sm={7}>
                          <div className='box-text box-padding-top box-padding-right-sm'>
                            <p>
                              {"There's an amazing game called Factorio, if you haven't played it yet and you're an engineer then order it on steam and sink dozens of hours into it. "+
                               "This web app is aimed to help players, like me, setup organized factories and production lines. The game can get really complex if you're building mega "+
                               "factories and understanding your production needs can become a nightmare with this game."}
                            </p>
                            <p>
                              {"The web app allows a user to setup and define their factories which contain many production lines. " +
                              "Each production line produces a product and may be consumed by "+
                              "some other production line. This helps a player setup modular factories with a good understanding of their production needs"}
                            </p>
                            <p>
                              {"This web app is developed using the LAMP stack and utilizes ReactJS with the Flux design pattern to give the user a single paged web app experience."}
                            </p>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} className='box-padding-top'>

                          <div className='box-text'>
                            Login as: TestUserEmail@gmail.com
                          </div>
                          <div className='box-text box-padding-bottom'>
                            Password: secret
                          </div>

                          <a className='box-text' href='https://github.com/redferret/FactorioCalculator'>
                            <img src={Router.route(IMAGE_ASSET, {fileName: 'GitHub-Mark-Light-32px.png'})} />
                            Project Repository
                          </a>

                        </Col>
                      </Row>
                    </div>
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
