
const app = require("./app");
const { connectDatabase } = require("./db/coon");

connectDatabase();

app.listen(4000, () => {
  console.log(`serverr is running at port ${process.env.PORT} `);
});
