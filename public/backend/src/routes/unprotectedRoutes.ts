import { Router } from "express";
import { getreview } from "../handlers/unprotectedHandlers/review";
import {
  getAllIdeas,
  getIdeaUpdates,
  getIdeafaqs,
  getOneIdea,
  getIdeaByCategory,
  getCommentsAndReplies,
  getVotes,
  getIdeaByUserId,
} from "../handlers/unprotectedHandlers/idea";
import { getOneUser } from "../handlers/protected/admin";
import { getUserInfo } from "../handlers/protected/user";
import { checkSpecificVsiblity } from "../handlers/protected/visiblity";

const unprotectedRouter = Router();

unprotectedRouter.get("/getreviews", getreview);
unprotectedRouter.get("/getallideas", getAllIdeas);
unprotectedRouter.get("/getoneidea/:ideaid", getOneIdea);
unprotectedRouter.get("/getideafaqs/:ideaid", getIdeafaqs);
unprotectedRouter.get("/getideaupdates/:ideaid", getIdeaUpdates);
unprotectedRouter.get("/getideabycategory/:id", getIdeaByCategory);
unprotectedRouter.get("/getcommentsandreplies/:id", getCommentsAndReplies);
unprotectedRouter.get("/getvotes/:ideaid", getVotes);
<<<<<<< HEAD
unprotectedRouter.get("/getoneuser/:userid",getOneUser)
// unprotectedRouter.get("/getcategory",getIdeaByCategory)

=======
unprotectedRouter.get("/getoneuser/:userid", getOneUser);
unprotectedRouter.get("/getuserinfo/:userid", getUserInfo);
unprotectedRouter.get("/getideasbyuserid/:userid", getIdeaByUserId);
unprotectedRouter.get(
  "/checkspecificvisiblity/:userid/:ideaid",
  checkSpecificVsiblity
);
>>>>>>> 8ab18d7e611aeead6675b1504bedd21895d589b4

export default unprotectedRouter;
