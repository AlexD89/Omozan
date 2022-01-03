# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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