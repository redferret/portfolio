import React from 'react';

class RowdyProject {
  partial() {
    return {
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
      projectFooter: () => null
    };
  }
}

export default new RowdyProject();
