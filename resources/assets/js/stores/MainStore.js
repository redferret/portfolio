var EventEmitter = require('events').EventEmitter;

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
    }]
  }
  getAboutMeBulletPoints() {
    return this._aboutMePoints;
  }

}

export default new MainStore();
