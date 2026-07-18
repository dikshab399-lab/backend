// 1. Sabse pehle dotenv ko top par import kiya taaki saare env variables jaldi load ho sakein
import dotenv from "dotenv";
import connectDB from "./db/index.js"; // Note: Local files ke sath .js lagana mandatory hai (Sir's Debugging Tip)

// 2. Dotenv ko config kiya aur uska exact local path bataya
dotenv.config({
    path: './.env'
});

// 3. Database connection function ko call kiya
connectDB();




/* 
=============================================================================
METHOD 1 (Rough/Polluted Approach) - Sir ne ise likh kar ganda hone ki wajah se comment kiya tha:
=============================================================================
import express from "express";
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERRR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})()
*/
