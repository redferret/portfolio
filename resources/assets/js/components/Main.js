import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppDispatcher from '../dispatcher.js';
import MainStore from '../stores/MainStore.js';

import { Label } from 'react-bootstrap';

import {
  MAIN_ID
} from '../constants.js';

export default class Main extends Component {

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

      </div>
    );
  }
}

let RootElement = document.getElementById('root');

if (RootElement) {
  ReactDOM.render(<Main />, RootElement);
}
