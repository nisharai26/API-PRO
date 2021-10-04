
module.exports = (sequelize, DataTypes) => {
    var Vehicles = sequelize.define('Vehicles',{
               make:DataTypes.STRING,
                model:DataTypes.STRING,
                
          }, {});
  

    return Vehicles;;
  };
  
  