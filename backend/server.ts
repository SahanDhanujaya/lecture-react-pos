import express from "express";
import cors from "cors";
import dbConnection from './src/db/dbConnection.ts';
import customerRoutes from './src/routes/customerRoutes.ts';

export const app = express();
app.use(cors());
app.use(express.json());

dbConnection();

app.use("/api", customerRoutes)

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
