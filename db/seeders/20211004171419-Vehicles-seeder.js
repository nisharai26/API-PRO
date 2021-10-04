'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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

  down: async (queryInterface, Sequelize) => {
  
     return queryInterface.bulkDelete('Vehicles', null, {});
     
  }
};
