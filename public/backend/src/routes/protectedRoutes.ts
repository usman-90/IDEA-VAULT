import { Router } from "express";
import {
  deleteComment,
  dislikeComment,
  likeComment,
  postComments,
  postReply,
} from "../handlers/protected/comments";
import { downVote, upVote } from "../handlers/protected/votes";
import {
  postFeedbacks,
  changeFeedbackStatus,
} from "../handlers/protected/feedback";
import {
  deleteIdea,
  postIdea,
  postIdeaUpdates,
} from "../handlers/protected/idea";
import { postUserInfo } from "../handlers/protected/user";
import {
  deleteReview,
  deleteUser,
  getAllUsers,
} from "../handlers/protected/admin";
import {
  createChatRoom,
  getChats,
  getMessages,
  saveMessagesAtOnce,
  saveSingleMessage,
} from "../handlers/protected/messages";
//import { setPreferences } from "../handlers/protected/preferences";
import { checkVisiblity, setVisiblity } from "../handlers/protected/visiblity";

const protectedRouter = Router();

protectedRouter.post("/postcomment/:ideaid", postComments); // return inserted comment
protectedRouter.post("/likecomment/:commentid", likeComment);
protectedRouter.post("/dislikecomment/:commentid", dislikeComment); // fix likes and dislikes
protectedRouter.post("/postreply/:commentid", postReply); // return inserted reply
protectedRouter.delete("/deletecomment/:commentid", deleteComment);
protectedRouter.post("/downvote/:ideaid", downVote); // if already upvoted, remove upvote
protectedRouter.post("/upvote/:ideaid", upVote); // if already downvoted, remove downvote
protectedRouter.post("/postfeedback", postFeedbacks);
protectedRouter.post("/changefeedbackstatus/:feedbackId", changeFeedbackStatus);
protectedRouter.post("/postidea", postIdea);
protectedRouter.put("/updateuserinfo", postUserInfo);
protectedRouter.get("/getallusers/:level", getAllUsers); // implement admin level
protectedRouter.delete("/deleteuser/:userId", deleteUser); // implement admin level
protectedRouter.delete("/deletereview/:feedbackId", deleteReview); // implement admin level
protectedRouter.post("/postideaupdates/:ideaid", postIdeaUpdates);
protectedRouter.delete("/deleteidea/:ideaid", deleteIdea);
protectedRouter.post("/createchatroom/:userId", createChatRoom);
protectedRouter.get("/getmessages/:userId/:level", getMessages);
//protectedRouter.post("/setpreferences", setPreferences);
protectedRouter.post("/setvisiblity", setVisiblity);
protectedRouter.get("/getvisiblity/:ideaId", checkVisiblity);
protectedRouter.get("/chatbox", getChats);
protectedRouter.get("/savemessagesatonce", saveMessagesAtOnce);
protectedRouter.post("/savesinglemessage/:userId", saveSingleMessage);

export default protectedRouter;
