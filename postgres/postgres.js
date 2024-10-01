import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";
  

  const sequelize = new Sequelize('postgres', 'postgres', '1234', {
    host: 'localhost',
    dialect:  'postgres'
  });
  

  let UserModel=null;
  
  const connection=async()=>{
    try {
        await sequelize.authenticate();
              console.log('Connection has been established successfully.');
        UserModel= await createUserModel(sequelize)
        await sequelize.sync()
              console.log("database is now syncronized")
      } catch (error) {
        console.error('Unable to connect with the database:', error.message);
      }
  }
  

  export{ connection, UserModel } 