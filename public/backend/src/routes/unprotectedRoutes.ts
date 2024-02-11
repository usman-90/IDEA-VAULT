import { Router } from "express";
import { getreview } from "../handlers/unprotectedHandlers/review";
import {
  getAllIdeas,
  getIdeaUpdates,
  getIdeafaqs,
  getOneIdea,
  getIdeaByCategory,
  getCommentsAndReplies,
  getIdeaByUserId,
} from "../handlers/unprotectedHandlers/idea";
import { getOneUser } from "../handlers/protected/admin";
import { getUserInfo } from "../handlers/protected/user";
import { checkSpecificVsiblity } from "../handlers/protected/visiblity";
import { getCategories } from "../handlers/unprotectedHandlers/category";

const unprotectedRouter = Router();

unprotectedRouter.get("/getreviews", getreview);
unprotectedRouter.get("/getallideas", getAllIdeas);
unprotectedRouter.get("/getoneidea/:ideaid", getOneIdea);
unprotectedRouter.get("/getideafaqs/:ideaid", getIdeafaqs);
unprotectedRouter.get("/getideaupdates/:ideaid", getIdeaUpdates);
unprotectedRouter.get("/getideabycategory/:id", getIdeaByCategory);
unprotectedRouter.get("/getcommentsandreplies/:id", getCommentsAndReplies);
//unprotectedRouter.get("/getvotes/:ideaid", getVotes);
unprotectedRouter.get("/getcategory", getCategories);
unprotectedRouter.get("/getoneuser/:userid", getOneUser);
unprotectedRouter.get("/getuserinfo/:userid", getUserInfo);
unprotectedRouter.get("/getideasbyuserid/:userid", getIdeaByUserId);
unprotectedRouter.get(
  "/checkspecificvisiblity/:userid/:ideaid",
  checkSpecificVsiblity,
);

export default unprotectedRouter;
