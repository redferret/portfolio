var EventEmitter = require('events').EventEmitter;

import FactorioProject from '../components/partials/FactorioProject.js';
import LaravelReactTemplate from '../components/partials/LaravelReactTemplate.js';
import RowdyProject from '../components/partials/RowdyProject.js';
import React from 'react';
import StoryBoards from '../components/partials/StoryBoards.js';

class MainStore extends EventEmitter {
  constructor() {
    super();
    this._aboutMePoints = [{
      subject: 'Name',
      content: 'Richard Evans DeSilvey'
    }, {
      subject: 'Education',
      content: 'Metropolitan State University of Denver'
    }, {
      subject: 'Degree',
      content: 'Bachelor\'s of Science in Computer Science'
    }, {
      subject: 'Focus',
      content: 'Software Development / Web Application Development'
    }, {
      subject: 'Hobbies',
      content: 'Studying Geology, Biology, Hiking/Climbing, Goldsmithing'
    }];

    this._projects = [
      FactorioProject.partial(),
      StoryBoards.partial(),
      LaravelReactTemplate.partial(),
      RowdyProject.partial()
    ];
  }

  getProjects() {
    return this._projects;
  }

  getAboutMeBulletPoints() {
    return this._aboutMePoints;
  }

}

export default new MainStore();
