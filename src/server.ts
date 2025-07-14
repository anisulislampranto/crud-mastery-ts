const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})