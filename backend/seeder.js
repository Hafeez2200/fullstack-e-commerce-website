const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Products = require("./data/products");
const products = require("./data/products");


dotenv.config();

//connect to mongodB
mongoose.connect(process.env.MONGO_URI);

// Function to seed data

const seedData = async () =>{
    try {
        //clear existing data
        await Product.deleteMany();
        await User.deleteMany();

        // create a default admin User
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456",
            role: "admin",
        });

        // Assign the default user id to each product
        const userID = createdUser._id;
        
        const sampleProducts = products.map((product)=>{
            return {...product, user: userID};
        });

        //insert products into the database
        await Product.insertMany(sampleProducts);

        console.log("Product data seeded successfully");
        process.exit();

    } catch (error) {
        console.error("Error seeding the data:", error);
        process.exit();
    }
};

seedData();