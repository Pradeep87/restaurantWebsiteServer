
const app = require("./app");
const { connectDatabase } = require("./db/coon");

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`serverr is running at port ${process.env.PORT} `);
});
