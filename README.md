# Starter Project

## Steps to setup

1. `git clone git@github.com:ZaneN8/react_rails_router_starter.git <project-name>`

2. `cd <project-name>`
3. run `bundle install`

4. In `database.yml` change name of database react_rails_router_starter to `<project-name>` using TODOS

- Link to faker: https://github.com/faker-ruby/faker
- Link to Bootstrap: https://react-bootstrap.netlify.app/components/alerts

5. run `rails db:create db:migrate db:seed`
6. `rails s -p 3001` to start rails server
7. `cd client && yarn start` to start yarn server

### handle git

- you can ether remove the remote and add your own, or you can remove the git repo. Remove the remote keeps the commit history from the starter project. `rm -rf .git` will completely remove it.

8. remove origin `git remote rm origin`
   `git remote add origin <ssh-link>`
9. or `rm -rf .git` && `git init`

10. start servers
