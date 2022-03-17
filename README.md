This repository contains the code for the lab's website. This repository can be linked to AWS Amplify, any changes made will reflects on the website. 

## Helpful links
- React js. Check out the tutorial on the official React [website](https://reactjs.org/tutorial/tutorial.html) and another [here](https://www.taniarascia.com/getting-started-with-react/). We use React minimally here (just for making the website a Single Page Application)
- React Router. There is a quick tutorial [here](https://reactrouter.com/docs/en/v6/getting-started/tutorial). React Router handles the routes (links/navigation between pages)
- Nodejs. Comes with React 
- Bootstrap. Learn [bootstrap](https://getbootstrap.com/). Boostrap is used for fast styling to avoid styling things like buttons from scratch. This reduced the amount of custom styles written.  

## Deployment Information
This website is hosted on Github pages
Here is a short [guide](https://create-react-app.dev/docs/deployment#github-pages) on how to deploy a React app on GitHub pages. Here is another [guide](https://github.com/gitname/react-gh-pages)

## Making Changes to the Website - To be updated
1. Fork this repository 
2. Clone the forked repo to get a local copy on your system
3. Cd in the repo
4. Run `npm install`
5. To run the React project run: `npm start`
6. You should see the website open in your web browser
7. Check the branch you are on: `git branch`
8. Create a new branch to work on your changes: `git branch <First-current-time>`. Or name the branch according to the change you are making
9. Make your changes, any change will reflect on the page 
10. Test your changes locally 
11. Check files that have changed: `git status`
12. Add changed files: `git add <file>` or `git add -A`
13. Commit changes: `git commit -m "your message"`
14. Push changes to your forked repo:  `git push`
15. Go back to your repository where you created your fork and follow the instructions on [github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to create a pull request (PR). Note, the 'head branch' should be the branch you made your changes in (the branch you created above). The 'base branch' should be 'main' for now. Don't forget to add a little description of your changes. Code maintainers will review the changes and merge it. 
16. Once merged, the changes should reflect on the website (if we use AWS Amplify service). 

Note: On subsequent changes, you have this repo already in your local machine and a fork on your github repository. To keep the forked repository up to date with the original repository, follow these [instructions](https://stackoverflow.com/questions/39819441/keeping-a-fork-up-to-date). Repeat from step 7 above. 

