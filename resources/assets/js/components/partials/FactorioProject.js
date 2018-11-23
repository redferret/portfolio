
import React from 'react';

class FactorioProject {
  partial() {
    return {
      projectLink: 'https://richard-desilvey.info/ProductionCalculator/',
      projectRepositoryLink: 'https://github.com/redferret/FactorioCalculator',
      projectTitle: 'Factorio Production Calculator',
      projectImageFile: 'fact_thumb.png',
      projectDescription: () => {
        return (
          <div>
            <p>
              {"This app is still under construction, there are a few more buttons that need to be wired but it is working, check it out!"}
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

    };
  }
}

export default new FactorioProject();
