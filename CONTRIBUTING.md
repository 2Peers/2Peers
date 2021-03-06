# Contributing

## General Workflow

1. Fork the repo
2. Create a new branch from main or master and use one of the following prefixes
  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...
3. Make commits to your feature branch. Be specific in your commit message like so:
  - Added a new feature [name of feature]
  - Fixed inconsistent tests
  - refactored [name of function/feature]
  - Added a test to [describe test]
4. When you've finished with your fix or feature, rebase upstream changes into your branch. Submit a [pull request][] directly to the master branch. Include a description of your changes.
5. Your pull request will be reviewed by another team member. Code reviews are to help keep the codebase stay clean, consistent and of high quality. Code reviews are also to help you grow as a programmer so, if your code reviewer requests you make a change you don't understand, ask them why.
6. Fix any issues raised by your code reviwer, and push your fixes as a single new commit.
7. Once the pull request has been reviewed and approved by the reviewer, it will be merged onto the master or main codebase. Do not merge your own commits.

## Detailed Workflow

### Fork the repo

Use Github’s web interface to make a fork of the repo, then add that repo as an upstream remote:

```
git remote add upstream https://github.com/2Peers/2Peers.git
```

### Create a new branch from main or master and use one of the following prefixes:

  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...

Command to make a new branch:

``` bash

# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your feature branch. 

Be specific in your commit message like so:
  - Added a new feature [name of feature]
  - Fixed inconsistent tests
  - refactored [name of function/feature]
  - Added a test to [describe test]

Make changes and commits on your branch, and make sure that you
only make changes that are relevant to this branch. If you find
yourself making unrelated changes, make a new branch for those
changes.

#### Commit Message Guidelines

- Commit messages should be written in the past tense; e.g. "Fixed continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed!
- If you want to explain the commit in more depth, following the first line should
  be a blank line and then a more detailed description of the commit. This can be
  as detailed as you want, so dig into details here and keep the first line short.

### Rebase upstream changes into your branch

Once you are done making changes, you can begin the process of getting
your code merged into the main repo. Step 1 is to rebase upstream
changes to the master branch into yours by running this command
from your branch:

```bash
git pull --rebase upstream master
```

This will start the rebase process. You must commit all of your changes
before doing this. If there are no conflicts, this should just roll all
of your changes back on top of the changes from upstream, leading to a
nice, clean, linear commit history.

If there are conflicting changes, git will start yelling at you part way
through the rebasing process. Git will pause rebasing to allow you to sort
out the conflicts. You do this the same way you solve merge conflicts,
by checking all of the files git says have been changed in both histories
and picking the versions you want. Be aware that these changes will show
up in your pull request, so try and incorporate upstream changes as much
as possible.

You pick a file by `git add`ing it - you do not make commits during a
rebase.

Once you are done fixing conflicts for a specific commit, run:

```bash
git rebase --continue
```

This will continue the rebasing process. Once you are done fixing all
conflicts you should run the existing tests to make sure you didn’t break
anything, then run your new tests (there are new tests, right?) and
make sure they work also.

If rebasing broke anything, fix it, then repeat the above process until
you get here again and nothing is broken and all the tests pass.

### Make a pull request

Make a clear pull request from your fork and branch to the upstream master
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is the faster you can get
your changes incorporated into this repo.

At least one other person MUST give your changes a code review, and once
they are satisfied they will merge your changes into upstream. Alternatively,
they may have some requested changes. You should make more commits to your
branch to fix these, then follow this process again from rebasing onwards.

Once you get back here, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat again.

Thanks for contributing!

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Apply the [boy scout rule][].
    - Follow the style guide listed in [README.md](README.md)
1. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
1. Your pull request is comprised of a single ([squashed][]) commit.

## Checklist

This is to help you organize your process:

- [ ] Did I cut my work branch off of master? (don't cut new branches from existing feature branches)
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
- [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase the upstream master branch after I finished all my
  work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
- [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have
no problem getting your changes merged in.

<!-- Links -->
[pull request]: https://help.github.com/articles/using-pull-requests/
[DRY]: http://en.wikipedia.org/wiki/Don%27t_repeat_yourself
[boy scout rule]: https://www.oreilly.com/library/view/97-things-every/9780596809515/ch08.html
[squashed]: http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html
