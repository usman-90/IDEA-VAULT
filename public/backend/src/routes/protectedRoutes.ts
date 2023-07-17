import { Router } from "express";
import {
  deleteComment,
  dislikeComment,
  likeComment,
  postComments,
  postReply,
} from "../handlers/protected/comments";
import { downVote, upVote } from "../handlers/protected/votes";
import { postFeedbacks } from "../handlers/protected/feedback";
import {
  deleteIdea,
  postIdea,
  postIdeaUpdates,
} from "../handlers/protected/idea";
import { postUserInfo, upDateUserInfo } from "../handlers/protected/user";
import {
  deleteReview,
  deleteUser,
  getAllUsers,
} from "../handlers/protected/admin";
import {
  createChatRoom,
  getChats,
  getMessages,
  saveMessages,
} from "../handlers/protected/messages";
import { setPreferences } from "../handlers/protected/preferences";
import { checkVisiblity, setVisiblity } from "../handlers/protected/visiblity";

const protectedRouter = Router();

protectedRouter.post("/postcomment/:ideaid", postComments);
protectedRouter.post("/likecomment/:commentid", likeComment);
protectedRouter.post("/dislikecomment/:commentid", dislikeComment);
protectedRouter.post("/postreply/:commentid", postReply);
protectedRouter.delete("/deletecomment/:commentid", deleteComment);
protectedRouter.post("/downvote/:ideaid", downVote);
protectedRouter.post("/upvote/:ideaid", upVote);
protectedRouter.post("/postfeedback", postFeedbacks);
protectedRouter.post("/postidea", postIdea);
protectedRouter.post("/postuserinfo", postUserInfo);
protectedRouter.put("/updateuserinfo", upDateUserInfo);
protectedRouter.get("/getallusers/:level", getAllUsers);
protectedRouter.delete("/deleteuser/:userId", deleteUser);
protectedRouter.delete("/deletereview/:feedbackId", deleteReview);
protectedRouter.post("/postideaupdates/:ideaid", postIdeaUpdates);
protectedRouter.delete("/deleteidea/:ideaId", deleteIdea);
protectedRouter.post("/createchatroom:/userId", createChatRoom);
protectedRouter.get("/getmessages/:userId/:level", getMessages);
protectedRouter.post("/setpreferences", setPreferences);
protectedRouter.post("/setvisiblity", setVisiblity);
protectedRouter.get("/getvisiblity/:ideaId", checkVisiblity);
protectedRouter.get("/chatbox", getChats);
protectedRouter.get("/savemessages",saveMessages);

export default protectedRouter;
