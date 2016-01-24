This is the source of [helloper.com](https://www.helloper.com).

## Local setup

1. Make sure you have [the same Ruby version installed as the repo](https://github.com/persand/helloper/blob/master/.ruby-version).
2. Install [Bundler](https://rubygems.org/gems/bundler) and [Node.js](http://nodejs.org).
3. Clone repository
4. ``$ npm install && gulp install``

### Gulp commands

The following gulp commands are at your service…

``$ gulp middleman``

Runs bundle exec middleman

``$ gulp install``

Runs bundle install and bower install

``$ gulp serve``

Builds Middleman and create a BrowserSync server that watches all changes

``$ gulp build``

Builds Middleman

``$ gulp deploy``

Builds Middleman and deploys with rsync
