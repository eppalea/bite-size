## Git Branch Walkthrough
### While on project main (master) branch

`git pull`

This pulls the latest 'main' branch to your computer.

`git checkout -b <type/name>`

Create a new branch to work from. Type is either 'Feature', 'Chore', 'Fix', 'Refactor' (or if you have another key word you'd like to integrate) with Name being the task currently at hand.

While on your branch, do all of your git adds and commits. You can stage everything for a pull request by:

`git push origin HEAD`

Once your branch is complete, and you are finished with any pushes you've needed to make, head to the git repo and confirm that your pull request is sitting there with all of your pushes, and commits.
Create the pull request, and another member will have to verify.

`git checkout main`

Once your pull request has been accepted, and you are sure you are on the main branch, perform a:

`git pull`

You are now up to date, and ready to start your next branch!

_NEVER PUSH TO MAIN REMOTELY. ALWAYS MERGE IN REPO!_