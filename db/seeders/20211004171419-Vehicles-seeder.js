'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    return queryInterface.bulkInsert('Vehicles', [
      {
        make: "AUDI",
        model: "A4",
        createdAt:date,
        updatedAt:date
       
      },
      {
          make: "AUDI",
          model: "A3",
          createdAt:date,
          updatedAt:date
      },
      {
          make: "TOYOTO",
          model: "T4",
          createdAt:date,
          updatedAt:date
      },
      {
          make: "BENZ",
          model: "B4",
          createdAt:date,
          updatedAt:date
      }

      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
  
     return queryInterface.bulkDelete('Vehicles', null, {});
     
  }
};
