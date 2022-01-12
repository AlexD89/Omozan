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

ipsum_desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ante congue, cursus nisl nec, dapibus justo. Duis est tortor, bibendum sit amet aliquam eu, sodales eu neque. Sed a tortor sit amet diam gravida mattis. Vestibulum efficitur non tellus a vestibulum. Nam pellentesque tincidunt eros, sit amet pretium augue aliquam in. Ut vel mi urna. Morbi fermentum odio urna, hendrerit efficitur ante dignissim et. In dapibus augue quis tempus faucibus. Vestibulum vel leo nisl. Donec neque quam, placerat in enim eget, sodales accumsan nisl.

Cras non risus vitae enim ornare egestas non eget purus. Curabitur sed suscipit magna. In luctus sed lorem vel malesuada. Praesent ornare turpis urna, non sollicitudin enim auctor eget. Nam laoreet semper erat eget cursus. Vestibulum ligula dolor, tincidunt sit amet facilisis ut, efficitur sed enim. Vestibulum elementum quis urna non ornare. Suspendisse a auctor lectus. Suspendisse malesuada vitae turpis eget consectetur. Maecenas ac leo non mauris placerat varius id eget nunc. Sed maximus purus vitae orci venenatis molestie. Nulla sed libero at massa placerat sodales a aliquam libero.

Fusce varius magna id sapien faucibus, nec pharetra neque venenatis. Phasellus bibendum at enim in pulvinar. Proin sagittis ultricies nisl, in aliquet nulla ornare vel. Pellentesque vel sem nec est elementum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce in lobortis mi. Nulla vitae risus arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam laoreet porttitor molestie. Praesent mattis non ante sed aliquet. Suspendisse non sapien sapien. Aliquam erat volutpat. Quisque vitae quam luctus, tristique felis eu, rutrum felis. Mauris efficitur libero finibus consectetur dictum.

Phasellus eleifend non justo ut mattis. Phasellus sagittis nisi sed velit malesuada, et porta purus lacinia. Praesent cursus orci in massa dignissim scelerisque. Curabitur hendrerit lorem maximus libero mattis aliquet. Vivamus elementum ante nisi, eu bibendum leo suscipit eget. Mauris sed faucibus ex. Suspendisse id euismod nibh, non volutpat eros."


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
        authors_ids = User.all
        authors_ids = authors_ids[1..-1].map{|author| author.id}.shuffle
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


all = Department.create!(department: "all") 
computers = Department.create!(department: "computers") 
electronics = Department.create!(department: "electronics") 
furniture = Department.create!(department: "furniture") 
bed_bath = Department.create!(department: "bed_bath") 
cellphones = Department.create!(department: "cellphones") 
pets_supplies = Department.create!(department: "pet_supplies") 
kitchen = Department.create!(department: "kitchen") 


# NEW Items

macbook_air = Product.create!({
    title: "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID.",
    description: ipsum_desc,
    price: 949.00
})
DepartmentItem.create!(product_id: macbook_air.id ,department_id: computers.id)

hp_laptop = Product.create!({
    title: 'HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home',
    description: ipsum_desc,
    price: 517.47
})
DepartmentItem.create!(product_id: hp_laptop.id ,department_id: computers.id)

acer_laptop = Product.create!({
    title: 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode',
    description: ipsum_desc,
    price: 369.99
})
DepartmentItem.create!(product_id: acer_laptop.id ,department_id: computers.id)

acer_nitro= Product.create!({
    title: 'Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6" FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard',
    description: ipsum_desc,
    price: 799.99
})
DepartmentItem.create!(product_id: acer_nitro.id ,department_id: computers.id)

cyberpowerpc = Product.create!({
    title: 'CYBERPOWERPC Gamer Xtreme VR Gaming PC, Intel Core i5-11400F 2.6GHz, 8GB DDR4, GeForce RTX 2060 6GB, 500GB NVMe SSD, WiFi Ready & Win 11 Home',
    description: ipsum_desc,
    price: 1014.99
})
DepartmentItem.create!(product_id: cyberpowerpc.id ,department_id: computers.id)

rog_strix= Product.create!({
    title: 'ROG Strix GA15DK Gaming Desktop PC, AMD Ryzen 7 5800X, GeForce RTX 3070, 16GB DDR4 RAM, 512GB SSD + 1TB HDD, Wi-Fi 5, Windows 10 Home',
    description: ipsum_desc,
    price: 1854.49
})
DepartmentItem.create!(product_id: rog_strix.id ,department_id: computers.id)

imac= Product.create!({
    title: '2021 Apple iMac (24-inch, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Blue',
    description: ipsum_desc,
    price: 1258.99
})
DepartmentItem.create!(product_id: imac.id ,department_id: computers.id)

vibe = Product.create!({
    title: 'Vibe All-in-one Computer Real-time Interactive Whiteboard, Video Conference Collaboration, Robust App Ecosystem, Smart Board for Classroom and Business W/ 55" 4K UHD Touch Screen',
    description: ipsum_desc,
    price: 2997.00
})
DepartmentItem.create!(product_id: vibe.id ,department_id: computers.id)


#------------------

lifestyle_sofa = Product.create!({
    title: 'LifeStyle Solutions Watford Sofas, 78.8" W x 31.5" D x 33.9" H, Dark Grey',
    description: ipsum_desc,
    price: 236.75
})
DepartmentItem.create!(product_id: lifestyle_sofa.id ,department_id: furniture.id)

setore_sofa = Product.create!({
    title: 'SETORE 70'' Modern Loveseat Sofa with Two Storage Bags, Velvet Medium Love Seats Couch for Small Living Room, Bedroom, Apartment, Easy-Assembly, Navy Blue',
    description: ipsum_desc,
    price: 428.99
})
DepartmentItem.create!(product_id: setore_sofa.id ,department_id: furniture.id)

tyboatle_sofa= Product.create!({
    title: 'TYBOATLE 57" Modern Striped PU Leather Loveseat Sofa w/ 2 USB Charging Ports and 3 Pillows, Mid Century Couch for Small Space Configuration, Living Room, Office, Apartment, Dorm, Black',
    description: ipsum_desc,
    price: 199.99
})
DepartmentItem.create!(product_id: tyboatle_sofa.id ,department_id: furniture.id)

dolonm_chair = Product.create!({
    title: 'Dolonm Accent Chair with Arms Mid Century Modern Decorative Side Chair Upholstered Reading Chair with Wood Legs Nailhead Studded Wingback Linen Fabric Chair for Living Room Bedroom, Orange',
    description: ipsum_desc,
    price: 289.99
})
DepartmentItem.create!(product_id: dolonm_chair.id ,department_id: furniture.id)

yaheetech = Product.create!({
    title: 'Yaheetech Accent Chair for Living Room Chair Upholstered Side Chair with Metal Legs Linen Fabric Chair Blue',
    description: ipsum_desc,
    price: 93.69
})
DepartmentItem.create!(product_id: yaheetech.id ,department_id: furniture.id)

prepac = Product.create!({
    title: 'Prepac Fremont 5 Drawer Chest, Espresso Brown',
    description: ipsum_desc,
    price: 219.99
})
DepartmentItem.create!(product_id: prepac.id ,department_id: furniture.id)

wlive = Product.create!({
    title: 'WLIVE 2 Drawer Dresser, Chest of Drawers with Open Shelf, Wood Storage Organizer Unit with Sturdy Metal Frame for Bedroom and Living Room, Brown Oak',
    description: ipsum_desc,
    price: 99.99
})
DepartmentItem.create!(product_id: wlive.id ,department_id: furniture.id)

choochoo = Product.create!({
    title: 'ChooChoo Kitchen Cart on Wheels with Wood Top, Utility Wood Kitchen Islands with Storage and Drawers, Easy Assembly - White',
    description: ipsum_desc,
    price: 239.99
})
DepartmentItem.create!(product_id: choochoo.id ,department_id: furniture.id)


#------------------

earth_rated = Product.create!({
    title: 'Earth Rated Dog Poop Bags, Extra Thick and Strong Poop Bags for Dogs, Guaranteed Leak-proof, 15 Doggy Bags Per Roll, Each Dog Poop Bag Measures 9 x 13 Inches',
    description: ipsum_desc,
    price: 11.99
})
DepartmentItem.create!(product_id: earth_rated.id ,department_id: pets_supplies.id)

dream_bone = Product.create!({
    title: 'DreamBone DreamBone Twist Sticks',
    description: ipsum_desc,
    price: 4.68
})
DepartmentItem.create!(product_id: dream_bone.id ,department_id: pets_supplies.id)

glad_pads = Product.create!({
    title: 'Glad for Pets Black Charcoal Puppy Pads-New & Improved Puppy Potty Training Pads That ABSORB & NEUTRALIZE Urine Instantly-Training Pads for Dogs, Dog Pee Pads, Pee Pads for Dogs, Dog Crate Pads',
    description: ipsum_desc,
    price:24.63
})
DepartmentItem.create!(product_id: glad_pads.id ,department_id: pets_supplies.id)

wobble_wag = Product.create!({
    title: 'Wobble Wag Giggle Ball, Interactive Dog Toy, Fun Giggle Sounds When Rolled or Shaken, Pets Know Best, As Seen On TV',
    description: ipsum_desc,
    price: 6.89
})
DepartmentItem.create!(product_id: wobble_wag.id ,department_id: pets_supplies.id)

gonicc = Product.create!({
    title: 'gonicc Dog & Cat Pets Nail Clippers and Trimmers - with Safety Guard to Avoid Over Cutting, Free Nail File, Razor Sharp Blade - Professional Grooming Tool for Pets',
    description: ipsum_desc,
    price: 13.95
})
DepartmentItem.create!(product_id: gonicc.id ,department_id: pets_supplies.id)

meow = Product.create!({
    title: 'Meow Mix Original Choice Dry Cat Food',
    description: ipsum_desc,
    price: 17.98
})
DepartmentItem.create!(product_id: meow.id ,department_id: pets_supplies.id)

fresh_step = Product.create!({
    title: 'Fresh Step Scented Litter with The Power of Febreze, Clumping Cat Litter',
    description: ipsum_desc,
    price: 9.54
})
DepartmentItem.create!(product_id: fresh_step.id ,department_id: pets_supplies.id)

angry_orange = Product.create!({
    title: 'ANGRY ORANGE Pet Odor Eliminator for Strong Odor - Citrus Deodorizer for Dog or Cat Urine Smells on Carpet, Furniture & Floors - Puppy Supplies﻿',
    description: ipsum_desc,
    price: 19.97
})
DepartmentItem.create!(product_id: angry_orange.id ,department_id: pets_supplies.id)


#------------------

pixel = Product.create!({
    title: 'Google Pixel 6 – 5G Android Phone - Unlocked Smartphone with Wide and Ultrawide Lens - 128GB - Stormy Black',
    description: ipsum_desc,
    price: 599.00
})
DepartmentItem.create!(product_id: pixel.id ,department_id: cellphones.id)

galaxys20 = Product.create!({
    title: 'SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell Phone 128GB US Version Smartphone Pro-Grade Camera 30X Space Zoom Night Mode, Cloud Navy',
    description: ipsum_desc,
    price:599.00
})
DepartmentItem.create!(product_id: galaxys20.id ,department_id: cellphones.id)

tcl_20 = Product.create!({
    title: 'TCL 20 SE 6.82" Unlocked Cellphone, 4GB RAM + 128GB ROM, US Version Android 11 Smartphone with 48MP Rear AI Quad-Camera, 5000mAh Big Battery, Dual Speaker, OTG Reverse Charging, Octa-Core, Nuit Black',
    description: ipsum_desc,
    price: 189.99
})
DepartmentItem.create!(product_id: tcl_20.id ,department_id: cellphones.id)

ulefone = Product.create!({
    title: 'Unlocked Smartphones Ulefone Note 11P, 48MP+8MP+2MP+2MP, Dual Sim Phones Unlocked, Andorid 11 8GB+128GB ROM, 6.55" FHD, Fingerprint Face Detection, 4500mAh high Capacity Battery, AT&T, T-Mobile - Red',
    description: ipsum_desc,
    price: 169.99
})
DepartmentItem.create!(product_id: ulefone.id ,department_id: cellphones.id)

motog = Product.create!({
    title: 'Moto G Power | 2021 | 3-Day battery | Unlocked | Made for US by Motorola | 4/64GB | 48MP Camera | Gray',
    description: ipsum_desc,
    price:219.99
})
DepartmentItem.create!(product_id: motog.id ,department_id: cellphones.id)

easyfone = Product.create!({
    title: 'Easyfone Prime-A6 4G Unlocked Big Button Basic Senior Cell Phone, Easy-to-Use Mobile Phone for Elderly with SOS Button, Hearing Aid Compatible and Charging Dock, FCC Certified (Black)',
    description: ipsum_desc,
    price: 69.99
})
DepartmentItem.create!(product_id: easyfone.id ,department_id: cellphones.id)

imidigi = Product.create!({
    title: 'UMIDIGI Bison X10 PRO Rugged Smartphone, Rugged Cell Phone Unlocked, IP68/IP69K Waterproof, Android 11, NFC, 6.53" FHD Screen, 6150mAh Battery, 4G Dual SIM (Bison X10 PRO 4+128G, Supersonic Yellow)',
    description: ipsum_desc,
    price: 239.99
})
DepartmentItem.create!(product_id: imidigi.id ,department_id: cellphones.id)

nokia = Product.create!({
    title: 'Nokia 225 | Unlocked | 4G Cell Phone | Black',
    description: ipsum_desc,
    price: 44.98
})
DepartmentItem.create!(product_id: nokia.id ,department_id: cellphones.id)


# --------

mason = Product.create!({
    title: 'Mason Jar Bathroom Accessories Set 4 - Mason Jar Soap Dispenser & 2 Apothecary Jars & Toothbrush Holder - Rustic Farmhouse Restroom, Bathroom Home Decor Clearance, Countertop Vanity Organizer, Black',
    description: ipsum_desc,
    price: 24.99
})
DepartmentItem.create!(product_id: mason.id ,department_id: bed_bath.id)

siga = Product.create!({
    title: 'MR.SIGA Toilet Plunger and Bowl Brush Combo for Bathroom Cleaning, Black, 1 Set',
    description: ipsum_desc,
    price: 21.98
})
DepartmentItem.create!(product_id: siga.id ,department_id: bed_bath.id)

renpho = Product.create!({
    title: 'RENPHO Body Fat Scale Smart BMI Scale Digital Bathroom Wireless Weight Scale, Body Composition Analyzer with Smartphone App sync with Bluetooth, 396 lbs - Black',
    description: ipsum_desc,
    price: 26.99
})
DepartmentItem.create!(product_id: renpho.id ,department_id: bed_bath.id)

imucci = Product.create!({
    title: 'iMucci Pink 8pcs Bathroom Accessories Set - with Trash Can Toothbrush Holder Soap Dispenser Soap and Lotion Set Tumbler',
    description: ipsum_desc,
    price: 39.99
})
DepartmentItem.create!(product_id: imucci.id ,department_id: bed_bath.id)

chezmoi = Product.create!({
    title: 'Chezmoi Collection 7-Piece Jacquard Floral Comforter Set (Queen, Maroon)',
    description: ipsum_desc,
    price: 85.87
})
DepartmentItem.create!(product_id: chezmoi.id ,department_id: bed_bath.id)

dhruvi = Product.create!({
    title: 'Dhruvi Bedding Ultra Soft Luxurious Silk Like Satin 7-Piece Comforter Set (Comforter + Flat Sheet + Fitted Sheet + 4 Pillow Cases), Durable Comfort Bedding Set (California King/Black)',
    description: ipsum_desc,
    price: 175.99
})
DepartmentItem.create!(product_id: dhruvi.id ,department_id: bed_bath.id)

vcny = Product.create!({
    title: 'VCNY Home Casa Real Collection Comforter Soft & Cozy Bedding Set, Stylish Chic Design for Home Décor, Machine Washable, Full/Queen, Purple 5 Piece',
    description: ipsum_desc,
    price: 41.16
})
DepartmentItem.create!(product_id: vcny.id ,department_id: bed_bath.id)

boho = Product.create!({
    title: 'Boho Floral Duvet Cover King Size Set Vintage Floral Duvet Cover Bedding Set Comforter Cover Set Smooth Soft Floral Bedding Collection 1 Duvet Cover with 2 Pillowcases (HY King)',
    description: ipsum_desc,
    price: 49.99
})
DepartmentItem.create!(product_id: boho.id ,department_id: bed_bath.id)

# --------

vortex = Product.create!({
    title: 'Instant Vortex Plus 4 Quart Air Fryer, Customizable Smart Cooking Programs, Digital Touchscreen and Non-Stick Air Fryer Basket, Stainless Steel',
    description: ipsum_desc,
    price: 99.95
})
DepartmentItem.create!(product_id: vortex.id ,department_id: kitchen.id)

rechael_ray = Product.create!({
    title: 'Rachael Ray - 87630 Rachael Ray Cucina Hard Anodized Nonstick Cookware Pots and Pans Set, 12 Piece, Gray with Red Handles',
    description: ipsum_desc,
    price: 189.99
})
DepartmentItem.create!(product_id: rechael_ray.id ,department_id: kitchen.id)

ball_regular = Product.create!({
    title: 'Ball Regular Mouth 32-Ounces Mason Jar with Lids and Bands (2-Units), Pack of 2, Clear',
    description: ipsum_desc,
    price: 12.40
})
DepartmentItem.create!(product_id: ball_regular.id ,department_id: kitchen.id)

cotey = Product.create!({
    title: 'COTEY Large 3.5" Nonstick Egg Rings Set of 4, Round Crumpet Ring Mold Shaper for English Muffins Pancake Cooking Griddle - Portable Grill Accessories for Camping Indoor Breakfast Sandwich Burger',
    description: ipsum_desc,
    price: 12.95
})
DepartmentItem.create!(product_id: cotey.id ,department_id: kitchen.id)

gibson = Product.create!({
    title: 'Gibson Home Rockaway 12-Piece Dinnerware Set Service for 4, Grey Matte',
    description: ipsum_desc,
    price: 39.99
})
DepartmentItem.create!(product_id: gibson.id ,department_id: kitchen.id)

henkels = Product.create!({
    title: 'HENCKELS Classic Chefs Knife, 6-Inch, Black, Stainless Steel, Kitchen Knife',
    description: ipsum_desc,
    price: 44.67
})
DepartmentItem.create!(product_id: henkels.id ,department_id: kitchen.id)

home_vss= Product.create!({
    title: 'HomeVss, Stoneware Sonoma 16pc Dinnerware Set, Black + Speckled Spin Wash Purple',
    description: ipsum_desc,
    price: 69.99
})
DepartmentItem.create!(product_id: home_vss.id ,department_id: kitchen.id)

joy_jolt = Product.create!({
    title: 'JoyJolt Savor Double Wall Insulated Glasses Espresso Mugs (Set of 2) - 5.4-Ounces',
    description: ipsum_desc,
    price: 14.40
})
DepartmentItem.create!(product_id: joy_jolt.id ,department_id: kitchen.id)

# --------

bose= Product.create!({
    title: 'New Bose QuietComfort 45 Bluetooth Wireless Noise Canceling Headphones - Triple Black',
    description: ipsum_desc,
    price: 329.00
})
DepartmentItem.create!(product_id: bose.id ,department_id: electronics.id)

soundlink = Product.create!({
    title: 'New Bose SoundLink Flex Bluetooth Portable Speaker, Wireless Waterproof Speaker for Outdoor Travel - White',
    description: ipsum_desc,
    price: 149.00
})
DepartmentItem.create!(product_id: soundlink.id ,department_id: electronics.id)

deskjet = Product.create!({
    title: 'HP DeskJet 4155e All-in-One Wireless Color Printer, with bonus 6 months free Instant Ink with HP+ (26Q90A)',
    description: ipsum_desc,
    price: 109.89
})
DepartmentItem.create!(product_id: deskjet.id ,department_id: electronics.id)

kodak = Product.create!({
    title: 'KODAK Step Wireless Mobile Photo Mini Printer (White) Compatible w/ iOS & Android, NFC & Bluetooth Devices',
    description: ipsum_desc,
    price: 69.99
})
DepartmentItem.create!(product_id: kodak.id ,department_id: electronics.id)

polaroid = Product.create!({
    title: 'Polaroid Originals Now I-Type Instant Camera - Red (9032)',
    description: ipsum_desc,
    price: 89.99
})
DepartmentItem.create!(product_id: polaroid.id ,department_id: electronics.id)

fujifilm = Product.create!({
    title: 'Fujifilm instax Mini 9 Instant Camera (Flamingo Pink) and instax Film Twin Pack (20 Exposures) Bundle Pink',
    description: ipsum_desc,
    price: 77.95
})
DepartmentItem.create!(product_id: fujifilm.id ,department_id: electronics.id)

logitech = Product.create!({
    title: 'Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black',
    description: ipsum_desc,
    price: 59.99
})
DepartmentItem.create!(product_id: logitech.id ,department_id: electronics.id)

binnune = Product.create!({
    title: 'BINNUNE Wireless Gaming Headset with Microphone for PC PS4 PS5 Playstation 4 5, 2.4G Wireless Bluetooth USB Gamer Headphones with Mic for Laptop Computer',
    description: ipsum_desc,
    price: 36.54
})
DepartmentItem.create!(product_id: binnune.id ,department_id: electronics.id)

create_reviews(6, words)

#products = [macbook_air,hp_laptop,acer_laptop,acer_nitro,cyberpowerpc,rog_strix,imac,vibe,
#    lifestyle_sofa,setore_sofa,tyboatle_sofa,dolonm_chair,yaheetech,prepac,wlive,choochoo,
#    earth_rated,dream_bone,glad_pads,wobble_wag,gonicc,meow,fresh_step,angry_orange,
#    pixel,galaxys20,tcl_20,ulefone,motog,easyfone,imidigi,nokia,
#    mason,siga,renpho,imucci,chezmoi,dhruvi,vcny,boho,
#    vortex,rechael_ray,ball_regular,cotey,gibson,henkels,home_vss,joy_jolt,
#    bose,soundlink,deskjet,kodak,polaroid,fujifilm,logitech,binnune]

# pics = ["macbook_air","hp_laptop","acer_laptop","acer_nitro","cyberpowerpc","rog_strix","imac","vibe",
#     "lifestyle_sofa","setore_sofa","tyboatle","dolonm_chair","yaheetech","prepac","wlive",
#     "choochoo","earth_rated","dream_bone","glad_pads","wobble_wag","gonicc","meow","fresh_step",
#     "angry_orange","pixel","galaxys20","tcl_20","ulefone","motog","easyfone","imidigi","nokia",
#     "mason","siga","renpho","imucci","chezmoi","dhruvi","vcny","boho","vortex","rechael_ray",
#     "ball_regular","cotey","gibson","henkels","home_vss","joy_jolt","bose","soundlink","deskjet",
#     "kodak","polaroid","fujifilm","logitech","binnune"]



# def connectImages(products, pics)
#     products.each_with_index do |product, idx|
#        file = URI.open("https://omozan-seeds.s3.amazonaws.com/#{pics[idx]}.jpg")
#        product.image.attach(io: file, filename: "#{pics[idx]}.jpg") 
#     end
# end


file1 = URI.open('https://omozan-seeds.s3.amazonaws.com/macbook_air.jpg')
macbook_air.image.attach(io: file1, filename: "macbook_air.jpg")
file2 = URI.open('https://omozan-seeds.s3.amazonaws.com/hp_laptop.jpg')
hp_laptop.image.attach(io: file2, filename: "hp_laptop.jpg")
file3 = URI.open('https://omozan-seeds.s3.amazonaws.com/acer_laptop.jpg')
acer_laptop.image.attach(io: file3, filename: "acer_laptop.jpg")
file4 = URI.open('https://omozan-seeds.s3.amazonaws.com/acer_nitro.jpg')
acer_nitro.image.attach(io: file4, filename: "acer_nitro.jpg")
file5 = URI.open('https://omozan-seeds.s3.amazonaws.com/cyberpowerpc.jpg')
cyberpowerpc.image.attach(io: file5, filename: "cyberpowerpc.jpg")
file6 = URI.open('https://omozan-seeds.s3.amazonaws.com/rog_strix.jpg')
rog_strix.image.attach(io: file6, filename: "rog_strix.jpg")
file7 = URI.open('https://omozan-seeds.s3.amazonaws.com/imac.jpg')
imac.image.attach(io: file7, filename: "imac.jpg")
file8 = URI.open('https://omozan-seeds.s3.amazonaws.com/vibe.jpg')
vibe.image.attach(io: file8, filename: "vibe.jpg")

file9 = URI.open('https://omozan-seeds.s3.amazonaws.com/lifestyle_sofa.jpg')
lifestyle_sofa.image.attach(io: file9, filename: "lifestyle_sofa.jpg")
file10 = URI.open('https://omozan-seeds.s3.amazonaws.com/setore_sofa.jpg')
setore_sofa.image.attach(io: file10, filename: "setore_sofa.jpg")
file11 = URI.open('https://omozan-seeds.s3.amazonaws.com/tyboatle_sofa.jpg')
tyboatle_sofa.image.attach(io: file11, filename: "tyboatle_sofa.jpg")
file12 = URI.open('https://omozan-seeds.s3.amazonaws.com/dolonm_chair.jpg')
dolonm_chair.image.attach(io: file12, filename: "dolonm_chair.jpg")
file13 = URI.open('https://omozan-seeds.s3.amazonaws.com/yaheetech.jpg')
yaheetech.image.attach(io: file13, filename: "yaheetech.jpg")
file14 = URI.open('https://omozan-seeds.s3.amazonaws.com/prepac.jpg')
prepac.image.attach(io: file14, filename: "prepac.jpg")
file15 = URI.open('https://omozan-seeds.s3.amazonaws.com/wlive.jpg')
wlive.image.attach(io: file15, filename: "wlive.jpg")
file16 = URI.open('https://omozan-seeds.s3.amazonaws.com/choochoo.jpg')
choochoo.image.attach(io: file16, filename: "choochoo.jpg")

file17 = URI.open('https://omozan-seeds.s3.amazonaws.com/earth_rated.jpg')
earth_rated.image.attach(io: file17, filename: "earth_rated.jpg")
file18 = URI.open('https://omozan-seeds.s3.amazonaws.com/dream_bone.jpg')
dream_bone.image.attach(io: file18, filename: "dream_bone.jpg")
file19 = URI.open('https://omozan-seeds.s3.amazonaws.com/glad_pads.jpg')
glad_pads.image.attach(io: file19, filename: "glad_pads.jpg")
file20 = URI.open('https://omozan-seeds.s3.amazonaws.com/wobble_wag.jpg')
wobble_wag.image.attach(io: file20, filename: "wobble_wag.jpg")
file21 = URI.open('https://omozan-seeds.s3.amazonaws.com/gonicc.jpg')
gonicc.image.attach(io: file21, filename: "gonicc.jpg")
file22 = URI.open('https://omozan-seeds.s3.amazonaws.com/meow.jpg')
meow.image.attach(io: file22, filename: "meow.jpg")
file23 = URI.open('https://omozan-seeds.s3.amazonaws.com/fresh_step.jpg')
fresh_step.image.attach(io: file23, filename: "fresh_step.jpg")
file24 = URI.open('https://omozan-seeds.s3.amazonaws.com/angry_orange.jpg')
angry_orange.image.attach(io: file24, filename: "angry_orange.jpg")

file25 = URI.open('https://omozan-seeds.s3.amazonaws.com/pixel.jpg')
pixel.image.attach(io: file25, filename: "pixel.jpg")
file26 = URI.open('https://omozan-seeds.s3.amazonaws.com/galaxys20.jpg')
galaxys20.image.attach(io: file26, filename: "galaxys20.jpg")
file27 = URI.open('https://omozan-seeds.s3.amazonaws.com/tcl_20.jpg')
tcl_20.image.attach(io: file27, filename: "tcl_20.jpg")
file28 = URI.open('https://omozan-seeds.s3.amazonaws.com/ulefone.jpg')
ulefone.image.attach(io: file28, filename: "ulefone.jpg")
file29 = URI.open('https://omozan-seeds.s3.amazonaws.com/motog.jpg')
motog.image.attach(io: file29, filename: "motog.jpg")
file30 = URI.open('https://omozan-seeds.s3.amazonaws.com/easyfone.jpg')
easyfone.image.attach(io: file30, filename: "easyfone.jpg")
file31 = URI.open('https://omozan-seeds.s3.amazonaws.com/imidigi.jpg')
imidigi.image.attach(io: file31, filename: "imidigi.jpg")
file32 = URI.open('https://omozan-seeds.s3.amazonaws.com/nokia.jpg')
nokia.image.attach(io: file32, filename: "nokia.jpg")

file33 = URI.open('https://omozan-seeds.s3.amazonaws.com/mason.jpg')
mason.image.attach(io: file33, filename: "mason.jpg")
file34 = URI.open('https://omozan-seeds.s3.amazonaws.com/siga.jpg')
siga.image.attach(io: file34, filename: "siga.jpg")
file35 = URI.open('https://omozan-seeds.s3.amazonaws.com/renpho.jpg')
renpho.image.attach(io: file35, filename: "renpho.jpg")
file36 = URI.open('https://omozan-seeds.s3.amazonaws.com/imucci.jpg')
imucci.image.attach(io: file36, filename: "imucci.jpg")
file37 = URI.open('https://omozan-seeds.s3.amazonaws.com/chezmoi.jpg')
chezmoi.image.attach(io: file37, filename: "chezmoi.jpg")
file38 = URI.open('https://omozan-seeds.s3.amazonaws.com/dhruvi.jpg')
dhruvi.image.attach(io: file38, filename: "dhruvi.jpg")
file39 = URI.open('https://omozan-seeds.s3.amazonaws.com/vcny.jpg')
vcny.image.attach(io: file39, filename: "vcny.jpg")
file40 = URI.open('https://omozan-seeds.s3.amazonaws.com/boho.jpg')
boho.image.attach(io: file40, filename: "boho.jpg")

file41 = URI.open('https://omozan-seeds.s3.amazonaws.com/vortex.jpg')
vortex.image.attach(io: file41, filename: "vortex.jpg")
file42 = URI.open('https://omozan-seeds.s3.amazonaws.com/rechael_ray.jpg')
rechael_ray.image.attach(io: file42, filename: "rechael_ray.jpg")
file43 = URI.open('https://omozan-seeds.s3.amazonaws.com/ball_regular.jpg')
ball_regular.image.attach(io: file43, filename: "ball_regular.jpg")
file44 = URI.open('https://omozan-seeds.s3.amazonaws.com/cotey.jpg')
cotey.image.attach(io: file44, filename: "cotey.jpg")
file45 = URI.open('https://omozan-seeds.s3.amazonaws.com/gibson.jpg')
gibson.image.attach(io: file45, filename: "gibson.jpg")
file46 = URI.open('https://omozan-seeds.s3.amazonaws.com/henkels.jpg')
henkels.image.attach(io: file46, filename: "henkels.jpg")
file47 = URI.open('https://omozan-seeds.s3.amazonaws.com/home_vss.jpg')
home_vss.image.attach(io: file47, filename: "home_vss.jpg")
file48 = URI.open('https://omozan-seeds.s3.amazonaws.com/joy_jolt.jpg')
joy_jolt.image.attach(io: file48, filename: "joy_jolt.jpg")

file49 = URI.open('https://omozan-seeds.s3.amazonaws.com/bose.jpg')
bose.image.attach(io: file49, filename: "bose.jpg")
file50 = URI.open('https://omozan-seeds.s3.amazonaws.com/soundlink.jpg')
soundlink.image.attach(io: file50, filename: "soundlink.jpg")
file51 = URI.open('https://omozan-seeds.s3.amazonaws.com/deskjet.jpg')
deskjet.image.attach(io: file51, filename: "deskjet.jpg")
file52 = URI.open('https://omozan-seeds.s3.amazonaws.com/kodak.jpg')
kodak.image.attach(io: file52, filename: "kodak.jpg")
file53 = URI.open('https://omozan-seeds.s3.amazonaws.com/polaroid.jpg')
polaroid.image.attach(io: file53, filename: "polaroid.jpg")
file54 = URI.open('https://omozan-seeds.s3.amazonaws.com/fujifilm.jpg')
fujifilm.image.attach(io: file54, filename: "fujifilm.jpg")
file55 = URI.open('https://omozan-seeds.s3.amazonaws.com/logitech.jpg')
logitech.image.attach(io: file55, filename: "logitech.jpg")
file56 = URI.open('https://omozan-seeds.s3.amazonaws.com/binnune.jpg')
binnune.image.attach(io: file56, filename: "binnune.jpg")