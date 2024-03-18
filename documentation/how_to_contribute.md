# How to contribute

## Making issues

Both frontend (this) and backend are connected with a common kanban board. Any new features, issues, or changes should be submitted as a new issue either on the kanban board or directly on either repository. The issue should be a small task, if the issue is large it is preferable to split it into several smaller ones. If the issue is done it must be moved from the "Backlog" category on the kanban board project to the "Ready" category.

## Working on issues

To work on an issue the issue must be assigned to the person, then moved from the "Ready" status to the "In progress" status. The assinged person, which should usually be self-assigned, is the person responsible for completing the issue. If multiple people wish to collaborate that is accepted but a single person must be chosen as reponsible for the completion.

## Creating branches

The preferred method of creating branches is using the github automatic creation from the issue worked on. Detailed information and process on this is found in [issue_branches.md](./issue_branches.md).

## Commiting changes

A commit should (preferably) be a small and complete change, including any other files changed to implement the change. Small and frequent commits significantly easy both readability, reviewability, and troubleshooting (if someting breaks). The commits should preferable be in the format of 
```bash
[Category] - [Description]
```

Where `Category` is a single work to decribe the type of change, i.e. a component name if implemented or changed something related to a specific component, or a broader tag like `Config` is project configuration files are changed. The `Description` should be as short and succinct as possible while containing enough information for other to understand what a commit relates to at a glance.

If the commit convention needs to be ignored, the commit should be as short and informative as possible. In that scenario it's a good idea to discuss the commit message with another contributor before commiting.

## Pull/Merge request

As each issue should be its own branch, it is necessary to merge these branches back into main as soon as possible. Utilize the github interface to create a new pull request and write a short description of the changes contained within your branch. Either request a review from another contributor or request feedback in person.

It is recommended to generate a draft pull request as soon as possible, i.e. after a few commits have been pushed. When the issue is done (or nearing) completion convert the pull request from a draft to a proper pull request.

All github actions must pass before merging into the `main` branch!

The pull request should also be linked to the issue, this ensures that the issue is closed when the pull request is merged into `main`. To link a pull request to a issue write the command `"Closes #n"` into the pull request description. Where n is the issue number. The issue should now be visible within the Development tab on the left side of the pull request.

Once all this is done you are allowed to merge into `main`. After merging a button to delete the branch appears, by default this should be done. If you do not intend to make more changes to the issue the branch is associated with you *SHOULD* delete the branch, we do *NOT* want a bunch of stale branches.

### Merge conflicts

The small issues and rapid merging into `main` should keep everyone up-to-date and prevent most merge conflicts. If a merge conflict occurs the divergent code needs to be thoroughly inspected, get in touch with the original author if you are unsure about anything, then resolve using your preferred tool. **It is the merging authors responsibility to handle merge conflicts.**
