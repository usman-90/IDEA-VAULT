import { Router } from "express";
const unprotectedRouter = Router();
import { getreview } from "../handlers/unprotectedHandlers/review";

unprotectedRouter.get("/getreviews", getreview);

export default unprotectedRouter;
