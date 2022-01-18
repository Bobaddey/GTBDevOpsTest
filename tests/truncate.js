const models = require('../src/models');

const truncate = event => {

  const randomNumber = parseInt(Math.random()*100);

  console.log("The random number is... ", randomNumber);
  return randomNumber;
  // await models.Sequelize.drop();
  // return models.Sequelize.sync();
  // return Promise.all(
  //   Object.keys(models).map((key) => {
  //     if (['sequelize', 'Sequelize'].includes(key)) return null;
  //     return models[key].destroy({ where: {}, force: true });
  //   })
  // );
};

module.exports = truncate;
