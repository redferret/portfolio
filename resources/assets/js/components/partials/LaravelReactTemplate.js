
import React from 'react';

class LaravelReactTemplate {
  partial() {
    return {
      projectLink: 'https://richard-desilvey.info/Laravel-React-Example',
      projectRepositoryLink: 'https://github.com/redferret/Laravel-React-Template',
      projectTitle: 'Laravel-React Template',
      projectImageFile: 'L_R_temp_thumb.png',
      projectDescription: () => {
        return (
          <div>
            <p>
              {"Even though Blade is a great template engine, it is difficult to use in " +
               "single paged web applications and can break that UX. This " +
               "template uses the bare minimum of Blade to serve what is needed to the front end. " +
               "ReactJS takes care of everything else and even allows for multiple modules written in ReactJS."}
            </p>
            <p>
              {"This is my take on what a single paged web application should look like with Laravel. There are probably more " +
               "things that can be added to it to make it more powerful but it's a good start."}
            </p>
          </div>
        );
      },
      projectFooter: () => null
    };
  }
}

export default new LaravelReactTemplate();
