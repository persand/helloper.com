This is the source of [helloper.com](https://www.helloper.com). It's based on the [Kollegorna Middleman Boilerplate](https://github.com/kollegorna/middleman-boilerplate).

## Local setup

1. Make sure you have [the same Ruby version installed as the repo](https://github.com/persand/helloper/blob/master/.ruby-version).
2. Install [Bundler](https://rubygems.org/gems/bundler) and [Node.js](http://nodejs.org).
3. Clone repository
4. ``$ npm install && gulp install``

## Deployment

The master branch is automatically deployed to my [512 mb Vultr VPS](http://www.vultr.com/?ref=7125759) using [Codeship](https://www.codeship.com).

## Gulp commands

    $ gulp install

Runs bundle install, bower install and bower update.

    $ gulp middleman

Runs bundle exec middleman.

    $ gulp serve

Builds Middleman and create a BrowserSync server that watches all changes.

    $ gulp build

Builds Middleman.

## Writing posts

    $ bundle exec middleman article NAME

Will generate a file in source/posts.
