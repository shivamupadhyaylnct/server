import { Router } from "express";
import { getAllVisitor, addVisitor ,updateVisitor,deleteVisitor} from "../controller/userController.js";

const router = Router(); // Use Router() directly from express

// Define routes
router.get("/getAll", getAllVisitor);
router.post("/addVisitor", addVisitor);
router.put("/updateVisitor/:visitorId", updateVisitor);
router.delete("/deleteVisitor/:visitorId", deleteVisitor);
export default router;
