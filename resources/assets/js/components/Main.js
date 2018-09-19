import AppDispatcher from '../dispatcher.js';
import MainStore from '../stores/MainStore.js';
import Navbar from './Navbar.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from '../router.js';

import {
  Label,
  Grid,
  Row,
  Col,
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
            <h1 className='box-text box-padding-left-lg box-padding-top'>About Me</h1>
            <div className='box-container'>
              <div className='box'>
                <h3 className='box-text box-padding-top box-padding-left-sm'>
                  <span className='box-text-bold'>Name: </span>
                  Richard Evans DeSilvey
                </h3>
                <h3 className='box-text box-padding-top box-padding-left-sm'>
                  <span className='box-text-bold'>Education: </span>
                  Metropolitain State University of Denver (2017)
                </h3>
                <h3 className='box-text box-padding-left-sm'>
                  <span className='box-text-bold'>Degrees: </span>
                  Bachlor of Science in Computer Science, Minor in Mathematics
                </h3>
                <h3 className='box-text box-padding-left-sm'>
                  <span className='box-text-bold'>Focus: </span>
                  Software Development
                </h3>
                <h3 className='box-text box-padding-top box-padding-left-sm'>
                  <span className='box-text-bold'>Hobbies: </span>
                  Studying Geology, Hiking/Climbing, Biology, Goldsmithing
                </h3>
              </div>
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
