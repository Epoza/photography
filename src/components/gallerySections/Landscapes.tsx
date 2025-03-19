import GalleryTemplate from "./GalleryTemplate";

const imagePaths = [
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_1536.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_3591.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4284.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4502.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4526.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4571.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4580.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_5389.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6655.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6878.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6892.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6928.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6933.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6969.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_7223.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_7712.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8729.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8906.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8912.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_9037.JPG`,
];

const Landscapes = () => {
  return <GalleryTemplate imagePaths={imagePaths} />;
};

export default Landscapes;
