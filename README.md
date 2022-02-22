# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

* Created app: $rails new apartment_app -d postgresql -T
* Connect database to rails: $db:create
* bundle add react-rails
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
* rails generate resource Ingredient food_id:integer name:string image:string quantity:integer user_id:integer
* rails db:migrate
* rails db:seed
* config.sign_out_via = :delete changed to
  config.sign_out_via = :get
* config.action_mailer.default_url_options = {
  host: 'localhost', port: 3000 added to config/environment/development.rb
* rails generate migration add_username_to_user
* socket 5423 not active...run this:
  brew uninstall postgresql
  brew install postgresql@13
  brew services start postgresql@13
  brew link postgresql@13 --force
*
*
*
*
*
*
*
*
