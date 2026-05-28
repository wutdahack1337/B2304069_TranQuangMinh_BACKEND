import express from "express";

import contactsRouter from "./app/routes/contact.route.js"

const app = express();
app.use(express.json());


// API
app.get("/", (request, response) => {
    response.status(200).json({message: "Welcome to contact book application"})
})

app.use("/api/contacts", contactsRouter);

export default app;