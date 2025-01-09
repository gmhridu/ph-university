"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.sendImageToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("../config"));
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary_cloud_name,
    api_key: config_1.default.cloudinary_api_key,
    api_secret: config_1.default.cloudinary_api_secret,
});
const sendImageToCloudinary = (imageName, path) => {
    return new Promise((resolve, reject) => {
        // upload image
        cloudinary_1.v2.uploader.upload(path, {
            public_id: imageName,
            transformation: [
                {
                    crop: 'auto',
                    gravity: 'auto',
                },
                {
                    fetch_format: 'auto',
                    quality: 'auto',
                },
            ],
        }, function (error, result) {
            if (error) {
                console.log(error);
                reject(error);
            }
            resolve(result);
            // delete local file asynchronously after upload
            fs_1.default.unlink(path, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    console.log('File removed successfully');
                }
            });
        });
    });
};
exports.sendImageToCloudinary = sendImageToCloudinary;
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    },
});
exports.upload = (0, multer_1.default)({ storage: storage });
