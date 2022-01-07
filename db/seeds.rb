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

User.create!({
    username: "Alex",
    email: "alex@gmail.com",
    password: "hunter12"
})

User.create!({
    username: "Isabel",
    email: "isabel@gmail.com",
    password: "hunter12"
})

ipsum_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ante congue, cursus nisl nec, dapibus justo. Duis est tortor, bibendum sit amet aliquam eu, sodales eu neque. Sed a tortor sit amet diam gravida mattis. Vestibulum efficitur non tellus a vestibulum. Nam pellentesque tincidunt eros, sit amet pretium augue aliquam in. Ut vel mi urna. Morbi fermentum odio urna, hendrerit efficitur ante dignissim et. In dapibus augue quis tempus faucibus. Vestibulum vel leo nisl. Donec neque quam, placerat in enim eget, sodales accumsan nisl.

Cras non risus vitae enim ornare egestas non eget purus. Curabitur sed suscipit magna. In luctus sed lorem vel malesuada. Praesent ornare turpis urna, non sollicitudin enim auctor eget. Nam laoreet semper erat eget cursus. Vestibulum ligula dolor, tincidunt sit amet facilisis ut, efficitur sed enim. Vestibulum elementum quis urna non ornare. Suspendisse a auctor lectus. Suspendisse malesuada vitae turpis eget consectetur. Maecenas ac leo non mauris placerat varius id eget nunc. Sed maximus purus vitae orci venenatis molestie. Nulla sed libero at massa placerat sodales a aliquam libero.

Fusce varius magna id sapien faucibus, nec pharetra neque venenatis. Phasellus bibendum at enim in pulvinar. Proin sagittis ultricies nisl, in aliquet nulla ornare vel. Pellentesque vel sem nec est elementum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce in lobortis mi. Nulla vitae risus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam laoreet porttitor molestie. Praesent mattis non ante sed aliquet. Suspendisse non sapien sapien. Aliquam erat volutpat. Quisque vitae quam luctus, tristique felis eu, rutrum felis. Mauris efficitur libero finibus consectetur dictum.

Phasellus eleifend non justo ut mattis. Phasellus sagittis nisi sed velit malesuada, et porta purus lacinia. Praesent cursus orci in massa dignissim scelerisque. Curabitur hendrerit lorem maximus libero mattis aliquet. Vivamus elementum ante nisi, eu bibendum leo suscipit eget. Mauris sed faucibus ex. Suspendisse id euismod nibh, non volutpat eros."

mac_book = {
    title: "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID.",
    description: ipsum_desc,
    category: "Computers",
    price: 1299.00
}

atomic_habits= {
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    description: ipsum_desc,
    category: "Books",
    price: 9.99
}

bose_45 = {
    title: "New Bose QuietComfort 45 Bluetooth Wireless Noise Canceling Headphones - Triple Black",
    description: ipsum_desc,
    category: "Electronics",
    price: 299.00
}

dewalt_kit = {
    title: "DEWALT 20V Max Cordless Drill Combo Kit, 2-Tool (DCK240C2),Yellow/Black Drill Driver/Impact Combo Kit",
    description: ipsum_desc,
    category: "Home Improvment",
    price: 129.99
}

sm_movie = {
    title: "Spider-Man: No Way Home",
    description: ipsum_desc,
    category: "Movies",
    price: 19.99
}

bowflex = {
    title: "Bowflex (552i) 2-24 Kg SelectTech Dumbbell (x1) by Bowflex",
    description: ipsum_desc,
    category: "Gym equipment",
    price: 199.99
}

echo_glow = {
    title: "Echo Glow - Multicolor smart lamp for kids, a Certified for Humans Device – Requires compatible Alexa device",
    description: ipsum_desc,
    category: "Amazon Home",
    price: 29.90
}

smart_plug = {
    title: "Amazon Smart Plug, Works with Alexa – A Certified for Humans Device",
    description: ipsum_desc,
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
product7.image.attach(io: file2, filename: "img1.jpg")
file3 = URI.open('https://omozan-seeds.s3.amazonaws.com/img2.jpg')
product8.image.attach(io: file3, filename: "img2.jpg")
file4 = URI.open('https://omozan-seeds.s3.amazonaws.com/img4.jpg')
product2.image.attach(io: file4, filename: "img4.jpg")
file5 = URI.open('https://omozan-seeds.s3.amazonaws.com/img5.jpg')
product5.image.attach(io: file5, filename: "img6.jpg")
file6 = URI.open('https://omozan-seeds.s3.amazonaws.com/img6.jpg')
product3.image.attach(io: file6, filename: "img6.jpg")
file7 = URI.open('https://omozan-seeds.s3.amazonaws.com/img7.jpg')
product4.image.attach(io: file7, filename: "img7.jpg")
file8 = URI.open('https://omozan-seeds.s3.amazonaws.com/img8.jpg')
product6.image.attach(io: file8, filename: "img8.jpg")