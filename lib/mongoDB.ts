import mongoose from "mongoose";

let isConnected: boolean = false; // Praćenje da li je veza sa MongoDB već uspostavljena

// Asinhrona funkcija za povezivanje sa MongoDB
export const connectToDB = async (): Promise<void> => {
    mongoose.set("strictQuery", true) // Postavljanje opcije za strogo pretraživanje

    if (isConnected) { // Ako je već uspostavljena veza, ne uspostavljaj ponovo
        console.log("MongoDB is already connected");
        return;
    }
    try {  // Povezivanje sa MongoDB koristeći URL iz okruženja
        await mongoose.connect(process.env.MONGODB_URL || "", {
            dbName: "Jewerly_Store"
        })
        isConnected = true;
        console.log("MongoDB is connected")
    } catch (error) {
        console.log(error)
    }
}