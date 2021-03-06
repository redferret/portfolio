import * as Constants from './constants.js';
import Router from './router.js';

/**
 * Root route for the application
 */
Router.registerRoute(Constants.ROOT_URL, args => {
  return $('meta[name="rootURL"]').attr('content');
});
const ROOT = Router.route(Constants.ROOT_URL);


/**
 * Register the rest of your routes below. The following can be deleted or
 * used for future reference.
 */
Router.registerRoute(Constants.IMAGE_ASSET, args => {
  return ROOT + '/images/' + args.fileName;
})
