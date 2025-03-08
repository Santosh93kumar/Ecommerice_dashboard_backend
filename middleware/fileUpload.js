import multer from "multer";

const storage = (pathName) => multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, pathName);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const uploads = (pathName) => multer({ storage: storage(pathName) });

export { uploads };
