import { UserModel } from "../postgres/postgres.js"


export const getAllVisitor=async(req,res)=>{
    try {
        const users=await UserModel.findAll();
        if(users.length==0){
            return res.status(200).json({"error":"users not found"})
        }
        return res.status(200).json(users)
    } catch (error) {
        console.log("error is : ",error.message)
        return res.status(500).json({"error":"internal server error"})
    }
}


// add visitor
export const addVisitor=async(req,res)=>{
    console.log("incomming data is -:",(req.body))

    const {name,email,Mobile,address,visitorId }= req.body||{};
      try {
           const visitor = await UserModel.findOne({where:{visitorId:visitorId}})
           //if the incomming data is null then
           if(visitor==null){
            await UserModel.create(req.body);
            return res.status(201).json({message:"visitor added successfully"})
           }
           return res.status(200).json({message:"visitor is already exist"}) 
        
      } catch (error) {
        console.log("internal server error is =>",error.message)
        return res.status(500).json({"error":"internal server error"})
      }
}


//update the existing Visitor
export const updateVisitor=async(req,res)=>{

    let passedVisitorId = req.params.visitorId;
        console.log("INCOMMING ID IS =>",passedVisitorId)

   try {
     const visitor= await UserModel.update(req.body,{where:{visitorId:passedVisitorId}})
        console.log("visitor id =>",visitor)
        if(visitor[0]==0){
            return res.status(404).json({message:"Provided data not found"})
        }
     return res.status(200).json({message:"updated data successfully"})
   } catch (error) {
    console.log("internal server error is =>",error.message)
    return res.status(500).json({"error":"internal server error"})
   }
}


//delete the  Visitor
export const deleteVisitor=async(req,res)=>{
    let passedVisitorId=req.params.visitorId;
        console.log("INCOMMING ID IS =>",passedVisitorId)

    try {
        const visitor = await UserModel.findOne({where:{visitorId:passedVisitorId}})
        console.log("incomming visitor data is =>",visitor)

        //if the incomming data is null then
        if(visitor === null){
            return res.status(404).json({message:"visitor Not found"})
        }
            // found thus deleting the visitor
            await visitor.destroy();
            return res.status(200).json({message:"visitor deleted successfully"}) ;
        
    } catch (error) {
        console.log("internal server error is =>",error.message)
        return res.status(500).json({"error":"internal server error"})
    }
   
}