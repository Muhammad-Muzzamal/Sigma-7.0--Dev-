import express from "express";
import sectionRoutes from "./Routers/sectionRoutes.js";
const app = express();


app.use("/section", sectionRoutes);

app.listen(3000, () => {
  console.log("app is listen in te port 3000");
});