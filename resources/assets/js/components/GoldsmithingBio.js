import React from 'react';

import { Media } from 'react-bootstrap';

export default class GoldsmithingBio extends React.Component {
  render() {
    return (
      <div className='box box-padding-top box-padding-bottom box-padding-left-sm'>
        <Media>
          <Media.Body>
            <h3 className='box-text box-padding-left-sm'>As a Goldsmith</h3>
            <Media>
              <Media.Left align='top'>
                <a href='https://14k9.com'>
                  <img width={128} height={128} alt="thumbnail" src='https://14k9.com/images/categories/DJ/dj541a.jpg'/>
                </a>
              </Media.Left>
              <Media.Body>
                <p className='box-text box-padding-left-sm'>
                  {"The company I worked for while being a Goldsmith was 14k9.com. A manufacturer specializing in " +
                   "crafting beautiful pieces of work for people who have a passion for their dog and those who show their dog. " +
                   "I felt the need to share this piece of my life because it was very impactful being able to create something " +
                   "artistically and in an engineering perspective. As a manufacturer we had to push out many pieces of work in " +
                   "a short time (about 2 weeks, same span of time of 1 sprint) depending on the piece that was being worked on. " +
                   "I'm a very artistic individual and I admire the work my friends do as professional artists as well. I hope in time " +
                   "that I can save up enough to make Goldsmithing a hobby of mine."}
                </p>
                <p className='box-text box-padding-left-sm'>
                  {"Click the image on the left to visit the website and checkout more of their designs and work."}
                </p>
              </Media.Body>
            </Media>
          </Media.Body>
        </Media>
      </div>
    )
  }
}
