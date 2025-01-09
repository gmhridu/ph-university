"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post('/create-academic-faculty', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.createAcademicFacultyValidationSchema), academicFaculty_controller_1.AcademicFacultyControllers.createAcademicFaculty);
router.get('/:id', academicFaculty_controller_1.AcademicFacultyControllers.getSingleAcademicFaculty);
router.patch('/:id', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.updateAcademicFacultyValidationSchema), academicFaculty_controller_1.AcademicFacultyControllers.updateAcademicFaculty);
router.get('/', (0, auth_1.default)(), academicFaculty_controller_1.AcademicFacultyControllers.getAllAcademicFaculties);
exports.AcademicFacultyRoutes = router;
