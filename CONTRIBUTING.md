# Contributing Guidelines

## How to contribute to commclassroomBackend

We'd love to accept your patches! Since we **♥︎♥︎ LOVE ♥︎♥︎** Contributors and Contributions :-)

You can start contributing to commclassroomBackend by following the below guidelines:-

(We are assuming you know about git like resolving merge conflicts, squash, setting remote etc.)
### Getting Source Code

* Get the source code by doing a fork. 

* And then clone using the below command.
```
git clone https://github.com/your_github_username/commclassroomBackend.git
```

### Starting Development
Now you can start your contribution work.
#### * Finding the issue
There are lots of issues on commclassroomBackend's [issue page](https://github.com/commclassroom/commclassroomBackend/issues). Please go through the issues and find a one which you want to fix/develop. If you want to implement something which is not there in the issues, please create a new issue. Please assign that new issue or already existing issue to yourself otherwise it may happen that someone else will fix the same issue.

#### * Creating a new branch
Please create a new branch to start your development work. You can create the branch by any name but we will suggest you consider the naming convention like iss_issueNumber. Example - iss_989

```
git checkout -b iss_issueNumber
```

#### * Commit your work
After all your work is done, you need to commit the changes.
```
git commit -am "Commit-Message"
```
Please add a very elaborative commit message for the work you have done. It will help the reviewer to understand the things quickly.

#### * Push the changes to your fork
```
git push origin iss_issueNumber
```
#### * Create a Pull Request
Please create a Pull Request from GitHub to commclassroomBackend: master. Do not forget to provide very brief Title and elaborative description of PR. Please link the PR to issue by adding `#issueNumber` at the end of the description.

### PR Review

Your PR will get reviewed soon from the maintainers of the project. If they suggest changes, do all the changes, commit the changes, rebase the branch, squash the commits and push the changes. If all will be fine, your PR will be merged.

That's it! Thank you for your contribution!

### Note
Contribution can be very small, that does not matter. We even love to receive a typo fix PR. Adding feature or fixing a bug is not the only way to contribute. You can send us PR for adding documentation, fixing typos or adding tests.
