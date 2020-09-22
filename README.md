# Starter Project

## Steps to setup

1. `git clone <project-url> <project-name>`

2. `cd <project-name>`
3. run `bundle install`

4. database.yml change name of database react_rails_router_starter to **<project-name>**

5. run `rails db:create db:migrate db:seed`
6. `rails s -p 3001`
7. `cd client && yarn`

### handle git

- you can ether remove the remote and add your own, or you can remove the git repo. Remove the remote keeps the commit history from the starter project. `rm -rf .git` will completely remove it.

8. remove origin `git remote rm origin`
   `git add remote origin <ssh-link>`
9. or `rm -rf .git` && `git init`

10. start servers
