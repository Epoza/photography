import GalleryTemplate from "./GalleryTemplate";

const imagePaths = [
  "/images/landscapes/DSC_1536.JPG",
  "/images/landscapes/DSC_3591.JPG",
  "/images/landscapes/DSC_4284.JPG",
  "/images/landscapes/DSC_4502.JPG",
  "/images/landscapes/DSC_4526.JPG",
  "/images/landscapes/DSC_4571.JPG",
  "/images/landscapes/DSC_4580.JPG",
  "/images/landscapes/DSC_5389.JPG",
  "/images/landscapes/DSC_6655.JPG",
  "/images/landscapes/DSC_6878.JPG",
  "/images/landscapes/DSC_6892.JPG",
  "/images/landscapes/DSC_6928.JPG",
  "/images/landscapes/DSC_6933.JPG",
  "/images/landscapes/DSC_6969.JPG",
  "/images/landscapes/DSC_7223.JPG",
  "/images/landscapes/DSC_7712.JPG",
  "/images/landscapes/DSC_8729.JPG",
  "/images/landscapes/DSC_8906.JPG",
  "/images/landscapes/DSC_8912.JPG",
  "/images/landscapes/DSC_9037.JPG",
];

const Landscapes = () => {
  return <GalleryTemplate imagePaths={imagePaths} />;
};

export default Landscapes;
