import React from 'react';

class StoryBoards {
  partial() {
    return {
      projectLink: 'http://richard-desilvey.info/StoryBoards',
      projectRepositoryLink: 'https://github.com/redferret/StoryBoards',
      projectTitle: 'Story Boards',
      projectImageFile: 'story_boards.png',
      projectDescription: () => {
        return (
          <div>
            <p>
              {"This application allows for a user to create stories and share them with other authors. " +
               "It was built using my Laravel-React-Template."}
            </p>
          </div>
        )
      },
      projectFooter: () => null
    };
  }
}

export default new StoryBoards();
