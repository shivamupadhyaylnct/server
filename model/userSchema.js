import { DataTypes } from "sequelize";

export const createUserModel=async(sequelize)=>{
    const User = sequelize.define("User",{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            islowercase:true,
            unique:true
        },
        Mobile:{
            type: DataTypes.STRING(10), 
            allowNull: false,            
            unique: true,
            validate: {
                len: [10, 10],      
                isNumeric: true         
            }
        },
        address:{
            type:DataTypes.STRING,
            allowNull:false
            
        },
        visitorId:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
    });
    return User;
      
}