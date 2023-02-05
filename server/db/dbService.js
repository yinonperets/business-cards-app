const connectDB = (ENVIROMENT) => {
  if (ENVIROMENT === "development") require("./mongoDB/connectToLocal");
  if (ENVIROMENT === "production") require("./mongoDB/connectToAtlas");
  // if (ENVIROMENT === "development") require("./mongoDB/connectToAtlas");
};

module.exports = connectDB;
