import express from "express";
import { connection } from "./postgres/postgres.js";
import router from "./Router/routes.js";
import cors from 'cors';

const app = express();

// Enable CORS for integrating with ui
app.use(cors());

// Middleware for parsing JSON incomming data
app.use(express.json());

// Register routes
app.use(router);


const PORT = 8000;   // server port
app.listen(PORT, () => {
    console.log("Server is running at PORT", PORT);
});



connection();  
export default app;
