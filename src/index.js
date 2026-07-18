// 1. Sabse pehle dotenv ko top par import kiya taaki saare env variables jaldi load ho sakein
import dotenv from "dotenv";
import connectDB from "./db/index.js"; // Note: Local files ke sath .js lagana mandatory hai
import app from "./app.js"; // ✔️ CORRECTION: app.js se express app instance ko import kiya!

// 2. Dotenv ko config kiya aur uska exact local path bataya
dotenv.config({
    path: './.env'
});

// 3. Database connection function ko call kiya
connectDB()
.then(() => {
    // ✔️ DB connect hote hi express app server ko live listen mode par daal diya
    app.listen(process.env.PORT || 8000, () => {
        console.log(`🟢 Server is running at port: ${process.env.PORT || 8000}`);
    });
})
.catch((err) => {
    console.log("❌ MONGO db connection failed !!!", err);
});
