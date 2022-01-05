# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Product.destroy_all

User.create!({
            username: "Demo User",
            email: "demo_user@gmail.com",
            password: "demo_user_3000"
        })

mac_book = {
    title: "Macbook Air M1",
    description: "Temp description",
    category: "Computers",
    price: 1299.00
}

atomic_habits= {
    title: "Atomic Habits",
    description: "Temp description",
    category: "Books",
    price: 9.99
}

bose_45 = {
    title: "Bose QuiteComfort 45",
    description: "Temp description",
    category: "Electronics",
    price: 299.00
}

dewalt_kit = {
    title: "Dewalt Toolkit",
    description: "Temp description",
    category: "Home Improvment",
    price: 129.99
}

sm_movie = {
    title: "Spider-Man: No Way Home",
    description: "Temp description",
    category: "Movies",
    price: 19.99
}

bowflex = {
    title: "Bowflex Adjustable Dumbells",
    description: "Temp description",
    category: "Gym equipment",
    price: 199.99
}

echo_glow = {
    title: "Echo Glow",
    description: "Temp description",
    category: "Amazon Home",
    price: 29.90
}

smart_plug = {
    title: "Amzon Smart Plug",
    description: "Temp description",
    category: "Amazon Home",
    price: 12.99
}

product1 = Product.create!(mac_book)
product2 = Product.create!(atomic_habits)
product3 = Product.create!(bose_45)
product4 = Product.create!(dewalt_kit)
product5 = Product.create!(sm_movie)
product6 = Product.create!(bowflex)
product7 = Product.create!(echo_glow)
product8 = Product.create!(smart_plug)

file1 = URI.open('https://omozan-seeds.s3.amazonaws.com/img3.jpg')
product1.image.attach(io: file1, filename: "img3.jpg")
file2 = URI.open('https://omozan-seeds.s3.amazonaws.com/img1.jpg')
product2.image.attach(io: file2, filename: "img1.jpg")
file3 = URI.open('https://omozan-seeds.s3.amazonaws.com/img2.jpg')
product3.image.attach(io: file3, filename: "img2.jpg")
file4 = URI.open('https://omozan-seeds.s3.amazonaws.com/img4.jpg')
product4.image.attach(io: file4, filename: "img4.jpg")
file5 = URI.open('https://omozan-seeds.s3.amazonaws.com/img5.jpg')
product5.image.attach(io: file5, filename: "img6.jpg")
file6 = URI.open('https://omozan-seeds.s3.amazonaws.com/img6.jpg')
product6.image.attach(io: file6, filename: "img6.jpg")
file7 = URI.open('https://omozan-seeds.s3.amazonaws.com/img7.jpg')
product7.image.attach(io: file7, filename: "img7.jpg")
file8 = URI.open('https://omozan-seeds.s3.amazonaws.com/img8.jpg')
product8.image.attach(io: file8, filename: "img8.jpg")