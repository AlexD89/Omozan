# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

usernames = [["Robert", "Desnos"], ["Peter", "Hoeg"], ["Pete", "Dexter"], ["Nelson", "DeMille"], ["Anita", "Desai"], ["Robin", "Hobb"], 
        ["Barbara", "Cartland"], ["Nick", "Bantock"], ["Harlan", "Ellison"], ["Michael", "Frayn"], ["Angela", "Carter"], ["Lorna", "Goodison"], 
        ["Carlos", "Castaneda"], ["John", "Fowles"], ["John", "Banville"], ["Bhabananda", "Deka"], ["Anne", "Frank"], ["Chester", "Himes"], 
        ["Russell", "Hoban"], ["William", "Golding"], ["Iain", "Banks"], ["James", "Hilton"], ["Christopher", "Hitchens"], ["Paul", "Goodman"], 
        ["Jonathan", "Franzen"], ["Melissa", "Bank"], ["Sigmund", "Freud"], ["Raymond", "Carver"], ["John", "Henry"]] 
words = ["stop", "studied", "thing", "apple", "cool", "simplest", "lead", "fair", "these", "religious", "outside", "elephant", "blew", "blue", "somehow", 
        "trunk", "respect", "sick", "speak", "complex", "leader", "greater", "dirt", "quickly", "balloon", "meal", "college", "vast", "lost", "signal", 
        "express", "agree", "scared", "circus", "along", "evidence", "package", "stiff", "struck", "describe", "apart", "leaving", "never", "carried", 
        "wet", "twenty", "brick", "massage", "fair", "wire", "love", "donkey", "beside", "way", "written", "hand", "fifth", "cream", "image", "today", 
        "heading", "joy", "off", "sense", "football", "at", "grabbed", "native", "came", "rocket", "letter", "forest", "bad", "mistake", "wet", "toward", 
        "become", "generally", "safety", "drawn", "development", "jack", "function", "organized", "deer", "key", "feet", "today", "first", "due", "include", 
        "strike", "loud", "orbit", "depth", "cannot", "none", "heard", "seeing", "must", "build", "announced", "quick", "stomach", "brief", "visitor", 
        "immediately", "proper", "when", "throw", "late", "within", "of", "eventually", "gravity", "thread", "effect", "doubt", "leaving", "magnet", "field", 
        "rain", "strange", "sea", "forgotten", "kids", "able", "brother", "valley", "easy", "bread", "capital", "usually", "similar", "castle", "carbon"]

def generateTitle(arr)
    arr = arr.shuffle
    title = arr[rand(1..133)].capitalize
    (rand(3..7)).times {title += (" " + arr[rand(1..133)])}
    title
end

def generateBody(arr)
    arr = arr.flatten.shuffle
    body = arr[rand(1..133)].capitalize
    (rand(50..200)).times {body += (" " + arr[rand(1..133)])}
    body
end

def create_users(arr) 
    users = []
    arr.each do |author|
        users << { username: "#{author[0]} #{author[1]}",
        email: "#{author[1]}@gmail.com",
        password: "hunter12" }
    end
    users.each {|new_user| User.create!(new_user)}
end

def create_reviews(num, words)
    Product.all.each do |product|
        authors_ids = User.all.map{|author| author.id}.shuffle
        num.times do |i|
            Review.create!({title: generateTitle(words), 
                            body: generateBody(words), 
                            score: rand(2..5), 
                            author_id: authors_ids.shift,
                            product_id: product.id})
            
        end
    end
end

User.destroy_all
Product.destroy_all
Review.destroy_all
Department.destroy_all
DepartmentItem.destroy_all

User.create!({
    username: "Demo User",
    email: "demo_user@gmail.com",
    password: "demo_user_3000"
})

create_users(usernames)


# NEW Items

macbook_air = Product.create!({
    title: "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID.",
    description: ipsum_desc,
    price: 949.00
})
hp_laptop = Product.create!({
    title: 'HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home',
    description: ipsum_desc,
    price: 517.47
})
acer_laptop = Product.create!({
    title: 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode',
    description: ipsum_desc,
    price: 369.99
})
acer_nitro= Product.create!({
    title: 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard',
    description: ipsum_desc,
    price: 799.99
})
cyberpowerpc = Product.create!({
    title: 'CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home',
    description: ipsum_desc,
    price: 1014.99
})
rog_strix= Product.create!({
    title: 'ROG Strix GA15DK Gaming Desktop PC, AMD Ryzen 7 5800X, GeForce RTX 3070, 16GB DDR4 RAM, 512GB SSD + 1TB HDD, Wi-Fi 5, Windows 10 Home',
    description: ipsum_desc,
    price: 1854.49
})
imac= Product.create!({
    title: '2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Blue',
    description: ipsum_desc,
    price: 1258.99
})
vibe = Product.create!({
    title: 'Vibe All-in-one Computer Real-time Interactive Whiteboard, Video Conference Collaboration, Robust App Ecosystem, Smart Board for Classroom and Business W/ 55" 4K UHD Touch Screen',
    description: ipsum_desc,
    price: 2997.00
})

#------------------

lifestyle_sofa = Product.create!({
    title: 'LifeStyle Solutions Watford Sofas, 78.8" W x 31.5" D x 33.9" H, Dark Grey',
    description: ipsum_desc,
    price: 236.75
})
setore_sofa = Product.create!({
    title: 'SETORE 70'' Modern Loveseat Sofa with Two Storage Bags, Velvet Medium Love Seats Couch for Small Living Room, Bedroom, Apartment, Easy-Assembly, Navy Blue',
    description: ipsum_desc,
    price: 428.99
})
tyboatle_sofa= Product.create!({
    title: 'TYBOATLE 57" Modern Striped PU Leather Loveseat Sofa w/ 2 USB Charging Ports and 3 Pillows, Mid Century Couch for Small Space Configuration, Living Room, Office, Apartment, Dorm, Black',
    description: ipsum_desc,
    price: 199.99
})
dolonm_chair = Product.create!({
    title: 'Dolonm Accent Chair with Arms Mid Century Modern Decorative Side Chair Upholstered Reading Chair with Wood Legs Nailhead Studded Wingback Linen Fabric Chair for Living Room Bedroom, Orange',
    description: ipsum_desc,
    price: 289.99
})
yaheetech = Product.create!({
    title: 'Yaheetech Accent Chair for Living Room Chair Upholstered Side Chair with Metal Legs Linen Fabric Chair Blue',
    description: ipsum_desc,
    price: 93.69
})
prepac = Product.create!({
    title: 'Prepac Fremont 5 Drawer Chest, Espresso Brown',
    description: ipsum_desc,
    price: 219.99
})
wlive = Product.create!({
    title: 'WLIVE 2 Drawer Dresser, Chest of Drawers with Open Shelf, Wood Storage Organizer Unit with Sturdy Metal Frame for Bedroom and Living Room, Brown Oak',
    description: ipsum_desc,
    price: 99.99
})
choochoo = Product.create!({
    title: 'ChooChoo Kitchen Cart on Wheels with Wood Top, Utility Wood Kitchen Islands with Storage and Drawers, Easy Assembly - White',
    description: ipsum_desc,
    price: 239.99
})

# --------
#------------------

earth_rated = Product.create!({
    title: 'Earth Rated Dog Poop Bags, Extra Thick and Strong Poop Bags for Dogs, Guaranteed Leak-proof, 15 Doggy Bags Per Roll, Each Dog Poop Bag Measures 9 x 13 Inches',
    description: ipsum_desc,
    price: 11.99
})
dream_bone = Product.create!({
    title: 'DreamBone DreamBone Twist Sticks',
    description: ipsum_desc,
    price: 4.68
})
glad_pads = Product.create!({
    title: 'Glad for Pets Black Charcoal Puppy Pads-New & Improved Puppy Potty Training Pads That ABSORB & NEUTRALIZE Urine Instantly-Training Pads for Dogs, Dog Pee Pads, Pee Pads for Dogs, Dog Crate Pads',
    description: ipsum_desc,
    price:24.63
})
wobble_wag = Product.create!({
    title: 'Wobble Wag Giggle Ball, Interactive Dog Toy, Fun Giggle Sounds When Rolled or Shaken, Pets Know Best, As Seen On TV',
    description: ipsum_desc,
    price: 6.89
})
gonicc = Product.create!({
    title: 'gonicc Dog & Cat Pets Nail Clippers and Trimmers - with Safety Guard to Avoid Over Cutting, Free Nail File, Razor Sharp Blade - Professional Grooming Tool for Pets',
    description: ipsum_desc,
    price: 13.95
})
meow = Product.create!({
    title: 'Meow Mix Original Choice Dry Cat Food',
    description: ipsum_desc,
    price: 17.98
})
fresh_step = Product.create!({
    title: 'Fresh Step Scented Litter with The Power of Febreze, Clumping Cat Litter',
    description: ipsum_desc,
    price: 9.54
})
angry_orange = Product.create!({
    title: 'ANGRY ORANGE Pet Odor Eliminator for Strong Odor - Citrus Deodorizer for Dog or Cat Urine Smells on Carpet, Furniture & Floors - Puppy Supplies﻿',
    description: ipsum_desc,
    price: 19.97
})

# --------
#------------------

pixel = Product.create!({
    title: 'Google Pixel 6 – 5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Stormy Black',
    description: ipsum_desc,
    price: 599.00
})
galaxys20 = Product.create!({
    title: 'SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Navy',
    description: ipsum_desc,
    price:599.00
})
tcl_20 = Product.create!({
    title: 'TCL 20 SE 6.82" Unlocked Cellphone, 4GB RAM + 128GB ROM, US Version Android 11 Smartphone with 48MP Rear AI Quad-Camera, 5000mAh Big Battery, Dual Speaker, OTG Reverse Charging, Octa-Core, Nuit Black',
    description: ipsum_desc,
    price: 189.99
})
ulefone = Product.create!({
    title: 'Unlocked Smartphones Ulefone Note 11P, 48MP+8MP+2MP+2MP, Dual Sim Phones Unlocked, Andorid 11 8GB+128GB ROM, 6.55" FHD, Fingerprint Face Detection, 4500mAh high Capacity Battery, AT&T, T-Mobile - Red',
    description: ipsum_desc,
    price: 169.99
})
motog = Product.create!({
    title: 'Moto G Power | 2021 | 3-Day battery | Unlocked | Made for US by Motorola | 4/64GB | 48MP Camera | Gray',
    description: ipsum_desc,
    price:219.99
})
easyfone = Product.create!({
    title: 'Easyfone Prime-A6 4G Unlocked Big Button Basic Senior Cell Phone, Easy-to-Use Mobile Phone for Elderly with SOS Button, Hearing Aid Compatible and Charging Dock, FCC Certified (Black)',
    description: ipsum_desc,
    price: 69.99
})
imidigi = Product.create!({
    title: 'UMIDIGI Bison X10 PRO Rugged Smartphone, Rugged Cell Phone Unlocked, IP68/IP69K Waterproof, Android 11, NFC, 6.53" FHD Screen, 6150mAh Battery, 4G Dual SIM (Bison X10 PRO 4+128G, Supersonic Yellow)',
    description: ipsum_desc,
    price: 239.99
})
nokia = Product.create!({
    title: 'Nokia 225 | Unlocked | 4G Cell Phone | Black',
    description: ipsum_desc,
    price: 44.98
})

# --------

= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
# --------

= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
# --------

= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})
= Product.create!({
    title:,
    description: ipsum_desc,
    price:
})







ipsum_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ante congue, cursus nisl nec, dapibus justo. Duis est tortor, bibendum sit amet aliquam eu, sodales eu neque. Sed a tortor sit amet diam gravida mattis. Vestibulum efficitur non tellus a vestibulum. Nam pellentesque tincidunt eros, sit amet pretium augue aliquam in. Ut vel mi urna. Morbi fermentum odio urna, hendrerit efficitur ante dignissim et. In dapibus augue quis tempus faucibus. Vestibulum vel leo nisl. Donec neque quam, placerat in enim eget, sodales accumsan nisl.

Cras non risus vitae enim ornare egestas non eget purus. Curabitur sed suscipit magna. In luctus sed lorem vel malesuada. Praesent ornare turpis urna, non sollicitudin enim auctor eget. Nam laoreet semper erat eget cursus. Vestibulum ligula dolor, tincidunt sit amet facilisis ut, efficitur sed enim. Vestibulum elementum quis urna non ornare. Suspendisse a auctor lectus. Suspendisse malesuada vitae turpis eget consectetur. Maecenas ac leo non mauris placerat varius id eget nunc. Sed maximus purus vitae orci venenatis molestie. Nulla sed libero at massa placerat sodales a aliquam libero.

Fusce varius magna id sapien faucibus, nec pharetra neque venenatis. Phasellus bibendum at enim in pulvinar. Proin sagittis ultricies nisl, in aliquet nulla ornare vel. Pellentesque vel sem nec est elementum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce in lobortis mi. Nulla vitae risus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam laoreet porttitor molestie. Praesent mattis non ante sed aliquet. Suspendisse non sapien sapien. Aliquam erat volutpat. Quisque vitae quam luctus, tristique felis eu, rutrum felis. Mauris efficitur libero finibus consectetur dictum.

Phasellus eleifend non justo ut mattis. Phasellus sagittis nisi sed velit malesuada, et porta purus lacinia. Praesent cursus orci in massa dignissim scelerisque. Curabitur hendrerit lorem maximus libero mattis aliquet. Vivamus elementum ante nisi, eu bibendum leo suscipit eget. Mauris sed faucibus ex. Suspendisse id euismod nibh, non volutpat eros."

all = Department.create!(department: "all") 
computers = Department.create!(department: "computers") 
electronics = Department.create!(department: "electronics") 
omozan_home = Department.create!(department: "omozan_home") 
books = Department.create!(department: "books") 
movies = Department.create!(department: "movies") 
pets_supplies = Department.create!(department: "pet_supplies") 
home_improvement = Department.create!(department: "home_improvement") 

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
DepartmentItem.create!(product_id: product1.id ,department_id: computers.id)
product2 = Product.create!(atomic_habits)
DepartmentItem.create!(product_id: product2.id ,department_id: books.id)
product3 = Product.create!(bose_45)
DepartmentItem.create!(product_id: product3.id ,department_id: electronics.id)
product4 = Product.create!(dewalt_kit)
DepartmentItem.create!(product_id: product4.id ,department_id: home_improvement.id)
product5 = Product.create!(sm_movie)
DepartmentItem.create!(product_id: product5.id ,department_id: movies.id)
product6 = Product.create!(bowflex)
DepartmentItem.create!(product_id: product6.id ,department_id: pets_supplies.id)
product7 = Product.create!(echo_glow)
DepartmentItem.create!(product_id: product7.id ,department_id: omozan_home.id)
product8 = Product.create!(smart_plug)
DepartmentItem.create!(product_id: product8.id ,department_id: omozan_home.id)

create_reviews(6, words)

#file1 = URI.open('https://omozan-seeds.s3.amazonaws.com/img3.jpg')
#product1.image.attach(io: file1, filename: "img3.jpg")
#file2 = URI.open('https://omozan-seeds.s3.amazonaws.com/img1.jpg')
#product7.image.attach(io: file2, filename: "img1.jpg")
#file3 = URI.open('https://omozan-seeds.s3.amazonaws.com/img2.jpg')
#product8.image.attach(io: file3, filename: "img2.jpg")
#file4 = URI.open('https://omozan-seeds.s3.amazonaws.com/img4.jpg')
#product2.image.attach(io: file4, filename: "img4.jpg")
#file5 = URI.open('https://omozan-seeds.s3.amazonaws.com/img5.jpg')
#product5.image.attach(io: file5, filename: "img6.jpg")
#file6 = URI.open('https://omozan-seeds.s3.amazonaws.com/img6.jpg')
#product3.image.attach(io: file6, filename: "img6.jpg")
#file7 = URI.open('https://omozan-seeds.s3.amazonaws.com/img7.jpg')
#product4.image.attach(io: file7, filename: "img7.jpg")
#file8 = URI.open('https://omozan-seeds.s3.amazonaws.com/img8.jpg')
#product6.image.attach(io: file8, filename: "img8.jpg")