const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const dbConnection = async function () {
  try {
    await mongoose
      .connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@sonuproject.hdiyklc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then((pass) =>
        console.log(
          `MongoDb is connected. Database Name : "${pass.connections[0].name}"`
        )
      )
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports.dbConnection = dbConnection;

// dbURI = `mongodb+srv://<username>:<password>@sonuproject.hdiyklc.mongodb.net/?retryWrites=true&w=majority`
// username = 'sonu'
// password = 'mdshahbazwarish1996'
