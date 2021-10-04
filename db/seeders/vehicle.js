module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Vehicles', [
        {
          make: "AUDI",
          model: "A4",
         
        },
        {
            make: "AUDI",
            model: "A3",
        },
        {
            make: "TOYOTO",
            model: "T4",
        },
        {
            make: "BENZ",
            model: "B4",
        }
  
        ], {});
      
    },
  
    down: (queryInterface, Sequelize) => {
      /*
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.
        Example:
        return queryInterface.bulkDelete('Person', null, {});
      */
    }
  };