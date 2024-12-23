import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { OfferedCourseValidations } from "./offeredCourser.validation";
import { OfferedCourseControllers } from "./offeredCourse.controller";

const router = Router();

router.post('/create-offered-course', validateRequest(OfferedCourseValidations.createOfferedCourseValidationSchema), OfferedCourseControllers.createOfferedCourse);

export const OfferedCourseRoutes = router;