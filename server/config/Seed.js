const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const User = require("../models/UserModel");

const seedUser = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);

    // Kolla om default-användaren redan finns
    const exists = await User.findOne({ name: "user" });
    if (exists) {
      console.log("Default-användare finns redan!");
      process.exit();
    }

    // Hasha lösenordet
    const hashedPassword = await bcrypt.hash("password", 10);

    // Skapa användaren
    await User.create({
      name: "user",
      email: "user@lapasteria.se",
      password: hashedPassword,
    });

    console.log("Default-användare skapad!");
    process.exit();
  } catch (error) {
    console.log("ERROR", error.message);
    process.exit(1);
  }
};

seedUser();
