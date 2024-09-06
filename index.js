import cors from 'cors';
import express from 'express'
import { connectDatabase } from './configuration/connectDatabase.js';
import { configureRoutes } from './configuration/configureRoutes.js';
const app = express();




app.use(express.json());
app.use(cors());

configureRoutes(app);

// Assuming connectDatabase is async
(async () => {
    connectDatabase();
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on port-- ${PORT}`);
    });
})();

