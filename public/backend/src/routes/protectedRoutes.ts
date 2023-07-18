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
import { postIdea } from "../handlers/protected/idea";
import { postUserInfo, upDateUserInfo } from "../handlers/protected/user";

const protectedRouter = Router();

protectedRouter.post("/postcomment/:ideaid", postComments);
protectedRouter.post("/likecomment/:commentid", likeComment);
protectedRouter.post("/dislikecomment/:commentid", dislikeComment);
protectedRouter.post("/postreply/:commentid", postReply);
protectedRouter.delete("/deletecomment/:commentid", deleteComment);
protectedRouter.post("/downvote/:ideaid", downVote);
protectedRouter.post("/upVote/:ideaid", upVote);
protectedRouter.post("/postfeedback", postFeedbacks);
protectedRouter.post("/postIdea", postIdea);
protectedRouter.post("/postuserinfo", postUserInfo);
protectedRouter.put("/updateuserinfo", upDateUserInfo);

const router = Router();
