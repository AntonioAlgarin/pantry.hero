# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  {
    username: 'kevin1',
    email: 'kevin1@gmail.com',
    password: 'kevin123',
    password_confirmation: 'kevin123'
  },
  {
    username: 'justin2',
    email: 'justin2@gmail.com',
    password: 'justin123',
    password_confirmation: 'justin123'
  }
]

ingredients = [
  {
    food_id: 9040,
    name: "banana",
    image: "bananas.jpg",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 11420420,
    name: "spaghetti pasta",
    image: "spaghetti.jpg",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 5062,
    name: "chicken breast",
    image: "chicken-breasts.png",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 10011282,
    name: "red onion",
    image: "red-onion.png",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 10611282,
    name: "white onion",
    image: "white-onion.png",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 11215,
    name: "garlic",
    image: "garlic.png",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 1123,
    name: "egg",
    image: "egg.png",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 20444,
    name: "rice",
    image: "uncooked-white-rice.png",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 93761,
    name: "rice milk",
    image: "rice-milk.png",
    quantity: 1,
    user_id: 1
  },
  {
    food_id: 93761,
    name: "rice milk",
    image: "rice-milk.png",
    quantity: 1,
    user_id: 2
  }
];

users.each do | user |
  User.create user
end

ingredients.each do | ingredient |
  user = User.find(ingredient[:user_id])
  user.ingredients.create(
    food_id: ingredient[:food_id],
    name: ingredient[:name],
    image: ingredient[:image],
    quantity: ingredient[:quantity],
  )
end
