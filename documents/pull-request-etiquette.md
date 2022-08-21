# Pull Request Etiquette

We do pull requests in Bjerk to spread knowledge, socialize changes amongst the team,
get a second opinion, and keep everyone informed of changes.

The main objective of this document is to guide us in keeping pull requests fun and productive.

* **Share responsibility**: With an extra pair of eyes, we share the responsibility for what goes live.

* **Change management**: It gives us lightweight change management to promote changes in our systems.

* **Spread knowledge**: Everyone involved in the project can easily take an active role in what happens
  and learn and share knowledge continuously.

* **Communicate**: We can spend more time creating value if we can minimize the number of meetings or
  other manual ways of communicating changes or progress. For example, if pull requests tell a story
  – it expresses the changes to everyone. We can even tag the related people!

## Creating pull requests

You are responsible for ensuring you get reviews for your PRs and merge them. You cannot rely on someone else noticing, reviewing, and merging your PR.


Pull requests should have a clear purpose and be the smallest possible. Pull requests with one
line change are sweet! If you can split your changes into smaller unrelated chunks, that's helping
yourself and the reviewers. We should try to limit the number of modifications to less than 500
lines, except when required (excluding automatically generated code).

When opening a pull request, you should make sure:

* your local repository has the most recent changes on the target branch
* the title and description of the PR are clear and accurately represent your changes
* the title and description reference the source of the change, which could be an issue, ticket or project item
* the description contains links to any related PRs
* screenshots have text descriptions for accessibility
* contentious changes or side effects have clear explanations of the pros and cons

## Reviewing pull requests

Taking time to review a pull request properly is as important as making the change, and we
must show compassion when critiquing someone else's work.

April Wensel talks about [Compassionate-Yet-Candid Code Reviews](https://www.youtube.com/watch?v=Ea8EiIPZvh0).

It suggests three key questions to ask ourselves when reviewing or commenting on someone else's work:

* Is it true?
* Is it necessary?
* Is it kind?

### Tasks when reviewing

When you're reviewing code, you should consider whether PRs:

* have a clear purpose
* capture the simplest way to solve a problem
* suggest changes outside a project's scope
* need breaking into smaller PRs

You should also consider if a pull request's suggested changes will contribute to technical debt and
if you can make suggestions to help solve the existing technical debt.

You should explain your reasoning when you suggest changes and refer to programming language style
guides where appropriate. In addition, you may find it helpful to provide short examples to
illustrate your suggestions.

You should:

* only approve pull requests you fully understand
* give appropriate positive feedback
* flag up significant issues quickly and in person/on slack if necessary
* ask for clarification on anything that's not clear

You should not:

* rush a review, even if it's urgent
* repeatedly point out the same error pattern
* leave comments without context

### Programming style

You should consider if the code in a PR has:

* an applicable edge case
* patterns consistent with similar code elsewhere in the codebase
* readable variable names, accurately representing their contents
* missing or additional elements following a merge or rebase
* capacity for reusability
