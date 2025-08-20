import express from "express";
import { 
  adminLogin,
  approveCommentById,
  deleteCommentById,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard
} from "../controllers/adminController.js";
import auth from "../middleware/auth.js";

const adminRouter = express.Router();

// Admin login
adminRouter.post("/login", adminLogin);

// Admin protected routes
adminRouter.get("/comments", auth, getAllComments);
adminRouter.get("/blogs", auth, getAllBlogsAdmin);
adminRouter.delete("/comment/:id", auth, deleteCommentById);
adminRouter.put("/comment/:id/approve", auth, approveCommentById);
adminRouter.get("/dashboard", auth, getDashboard);

export default adminRouter;