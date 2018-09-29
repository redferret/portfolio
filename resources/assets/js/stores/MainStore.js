var EventEmitter = require('events').EventEmitter;

import React from 'react';

class MainStore extends EventEmitter {
  constructor() {
    super();
    this._aboutMePoints = [{
      subject: 'Name',
      content: 'Richard Evans DeSilvey'
    }, {
      subject: 'Education',
      content: 'Metropolitain State University of Denver'
    }, {
      subject: 'Degree',
      content: 'Bachlor of Science in Computer Science'
    }, {
      subject: 'Focus',
      content: 'Software Development / Web Application Development'
    }, {
      subject: 'Hobbies',
      content: 'Studying Geology, Biology, Hiking/Climbing, Goldsmithing'
    }];

    this._projects = [{
      projectLink: 'http://richard-desilvey.info/ProductionCalculator/',
      projectRepositoryLink: 'https://github.com/redferret/rowdy',
      projectTitle: 'Factorio Production Calculator',
      projectImageFile: 'fact_thumb.png',
      projectDescription: () => {
        return (
          <div>
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
        );
      },
      projectFooter: () => {
        return (
          <div>
            <div className='box-text'>
              Login as: TestUserEmail@gmail.com
            </div>
            <div className='box-text'>
              Password: secret
            </div>
            <div className='box-text box-padding-bottom'>
              Please be respectful when using this test account.
            </div>
          </div>
        );
      }

    }, {
      projectLink: 'https://github.com/redferret/rowdy',
      projectRepositoryLink: 'https://github.com/redferret/rowdy',
      projectTitle: 'Rowdy',
      projectImageFile: 'rowdy_thumb.png',
      projectDescription: () => {
        return (
          <div>
            <p>
              {"Rowdy is a general purpose scripting language written in Java. " +
               "I wanted to share this because it's a skill worth noting. A developer should be able to demonstrate their " +
               "ability to develop useful tools. Developing Rowdy is something I really enjoyed building and perhaps one day Rowdy will be useful for wrapping low level " +
               "or even high level Java libraries that can be quickly executed using Rowdy code. The syntax is a mixture of JavaScript and PHP."}
            </p>
            <p>
              {"Please take note of the project's testing and Wiki to learn more."}
            </p>
          </div>
        )
      },
      projectFooter: () => {}
    }];
  }

  getProjects() {
    return this._projects;
  }

  getAboutMeBulletPoints() {
    return this._aboutMePoints;
  }

}

export default new MainStore();
