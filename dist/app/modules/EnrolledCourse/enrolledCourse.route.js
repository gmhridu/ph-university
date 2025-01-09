"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrolledCourseRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const enrolledCourse_validation_1 = require("./enrolledCourse.validation");
const enrolledCourse_controller_1 = require("./enrolledCourse.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_constant_1 = require("../user/user.constant");
const router = (0, express_1.Router)();
router.post('/create-enrolled-course', (0, auth_1.default)(user_constant_1.USER_ROLE.student), (0, validateRequest_1.default)(enrolledCourse_validation_1.EnrolledCourseValidations.createEnrolledCourseValidationSchema), enrolledCourse_controller_1.EnrolledCourseController.createEnrolledCourse);
router.get('/my-enrolled-courses', (0, auth_1.default)(user_constant_1.USER_ROLE.student), enrolledCourse_controller_1.EnrolledCourseController.getMyEnrolledCourses);
router.patch('/update-enrolled-course-marks', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.faculty), (0, validateRequest_1.default)(enrolledCourse_validation_1.EnrolledCourseValidations.updateEnrolledCourseMarksValidationSchema), enrolledCourse_controller_1.EnrolledCourseController.updateEnrolledCourseMarks);
exports.EnrolledCourseRoutes = router;
