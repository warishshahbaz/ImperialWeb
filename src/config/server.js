const server = async function (app) {
  try {
    app.listen(process.env.PORT, (error) => {
      if (error) console.error(error);
      console.log(`Server is running on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

//module.exports.server = server;
