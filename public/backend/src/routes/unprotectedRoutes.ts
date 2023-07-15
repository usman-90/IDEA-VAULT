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
} from "../handlers/unprotectedHandlers/idea";
import { getOneUser } from "../handlers/protected/admin";

const unprotectedRouter = Router();

unprotectedRouter.get("/getreviews", getreview);
unprotectedRouter.get("/getallideas", getAllIdeas);
unprotectedRouter.get("/getoneidea/:ideaid", getOneIdea);
unprotectedRouter.get("/getideafaqs/:ideaid", getIdeafaqs);
unprotectedRouter.get("/getideaupdates/:ideaid", getIdeaUpdates);
unprotectedRouter.get("/getideabycategory/:id", getIdeaByCategory);
unprotectedRouter.get("/getcommentsandreplies/:id", getCommentsAndReplies);
unprotectedRouter.get("/getvotes/:ideaid", getVotes);
unprotectedRouter.get("/getoneuser/:userid",getOneUser)

export default unprotectedRouter;
