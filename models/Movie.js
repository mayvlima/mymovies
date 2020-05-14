module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
      "Movie",
      {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
          },
          name:{
            type: DataTypes.STRING,
            allowNull: false
          },
          description:{
            type: DataTypes.STRING
          },
          poster:{
            type: DataTypes.STRING
          },
          watched:{
            type: DataTypes.BOOLEAN,
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
      },
      {
        timestamps: false,
      }
    );
    
    return Movie;
  };
  