/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
const Tracker = require('./lib/Tracker')

module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(issueComment)
  })


  app.on('issues.edited', async context => {
    console.log("issues changed")
    console.log(context.issue().number)
    const tracker = await getTracker(context);
    console.log(tracker.hasMobileLabel);
    console.log(tracker.isTitleCorrect);
  })

  async function getTracker(context) {
    return new Tracker(context, "");
  }
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
