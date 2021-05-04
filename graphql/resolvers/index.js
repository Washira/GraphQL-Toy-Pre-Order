const Toy = require("../../models/toy");

module.exports = {
  toys: () => {
    return Toy.find()
      .then((result) => {
        return result.map((item) => {
          return { ...item._doc, _id: item._doc._id.toString() };
        });
      })
      .catch((err) => {
        throw err;
      });
  },

  createdToy: (args) => {
    const eachtoy = new Toy({
      title: args.toyInput.title,
      description: args.toyInput.description,
      price: +args.toyInput.price,
      date: new Date(args.toyInput.date),
    });
    return eachtoy
      .save()
      .then((result) => {
        return { ...result._doc };
      })
      .catch((err) => {
        throw err;
      });
  },
};
