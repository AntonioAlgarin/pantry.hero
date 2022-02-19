# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

* Created app: $rails new apartment_app -d postgresql -T
* Connect database to rails: $db:create
* bunde add react-rails
* rails webpacker:install:react
* rails generate react:install
* rails generate react:component App
* bundle add bootstrap
* mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
* yarn add reactstrap
* yarn add react-router-dom@5.3.0
* bundle add rspec-rails
* rails generate rspec:install
* bundle add devise
* rails generate devise:install
* rails generate devise User
* rails generate controller Home
* rails db:migrate
* rails generate devise:views
* yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
* bundle (after switching drivers)
  ** Added to config/routes.rb **
* get '\*path', to: 'home#index', constraints: ->(request){ request.format.html? }
* bin/webpack-dev-server (in a new tab on terminal when rails server is running)
* git add -p (reviews each file before committing, it does not add new files)
*
