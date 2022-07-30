import Express from "express";
import MainRoutes from "./routes/MainRoutes";

const app = Express();

new MainRoutes(app);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
