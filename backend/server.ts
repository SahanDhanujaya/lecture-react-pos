import express from "express";
import cors from "cors";
import dbConnection from './src/db/dbConnection.ts';
import customerRoutes from './src/routes/customerRoutes.ts';
import productRouter from "./src/routes/productRoutes.ts";
import orderRoutes from "./src/routes/orderRoutes.ts";

export const app = express();
app.use(cors());
app.use(express.json());

dbConnection();

app.use("/api", customerRoutes)
app.use("/api", productRouter) 
app.use("/api", orderRoutes)

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
