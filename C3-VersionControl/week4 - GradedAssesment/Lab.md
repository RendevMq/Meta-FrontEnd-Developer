# Exercise: Managing a project in GitHub

## Instructions

__Step 1:__ Open the Terminal and authenticate using `gh (Github CLI)`:
```
gh auth login
```

__Step 2:__ Create an authentication token in your Github account with specified scopes given in the terminal. Copy it from Github and paste it. Verify authorization was successful.

__Step 3:__ Visit the [class repo](https://github.com/Meta-Front-End-Developer-PC/m4l1_managing_a_project) and click the fork button.

__Step 4:__ Clone the repository using the `GitHub CLI command`.
```
gh repo clone <YOUR USERNAME>/<REPOSITORY-NAME>
```

__Step 5:__ Move to the repo directory by using 
```
cd <REPOSITORY-NAME>
```

__Step 6:__ Open the file named `class.txt`

__Step 7:__ Replace the content of the file with the contents below.
```
Crimson
Orange
Blue
Cyan
Yellow
Charcoal
Khaki
Coral
Silver
Fuchsia
Purple
Brown
Red
```

__Step 8:__ Save the file

__Step 9:__ Using the `diff command`, note which lines were deleted and which lines were added.
```
git diff
```
 
__Step 10:__ Add the file and commit it to the repository with a message.
```
git add class.txt
git commit
```

__Step 11:__ Push the commit to the forked repository.
```
git push
```