import express from "express";

import router from "./routers/routes";

const app = express();

const port = 3000;

app.use("/api", router);

// app.get("/", (req, res) => {
//   console.log("packagejson", packagejson.devDependencies.typescript);
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
