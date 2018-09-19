import React from 'react';
import Router from '../router.js';

import { IMAGE_ASSET } from '../constants.js';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <button className='navbar-toggler nav-item dropdown' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
          <span className='navbar-toggler-icon'></span>
          <div className='dropdown-menu bg-dark' aria-labelledby='navContent'>
            <div className='dropdown-item navbar-text-custom small-padding'>
              <div className='d-flex flex-row'>
                <div className='p-2'>
                  <img src={Router.route(IMAGE_ASSET, {fileName: 'GitHub-Mark-Light-32px.png'})} />
                </div>
                <div className='p-2'>
                  <a className='dropdown-item navbar-text-custom small-padding' href='#'>Projects</a>
                </div>
              </div>
              <div className='d-flex flex-row'>
                <div className='p-2'>
                  <img width={32} height={32}
                    src={Router.route(IMAGE_ASSET, {fileName: 'iconmonstr-speech-bubble-comment-thin-240.png'})} />
                </div>
                <div className='p-2'>
                  <a className='dropdown-item navbar-text-custom small-padding' href='#'>Blog</a>
                </div>
              </div>
            </div>
          </div>
        </button>
      </nav>
    )
  }
}
