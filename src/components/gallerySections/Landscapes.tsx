import GalleryTemplate from "./GalleryTemplate";

const imagePaths = [
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_2190.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_3389.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_3596.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_3649.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_3688.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4284.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4526.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4531.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4571.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_4580.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_5320.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_5389.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_5415.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_5453.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6651.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6878.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6923.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6928.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6932.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6936.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_6985.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_7702.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_7705.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_7744.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_7759.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8780.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8781.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8783.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8784.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8816.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8869.JPG`,
  `${import.meta.env.BASE_URL}/images/landscapes/DSC_8899.JPG`,
];

const Landscapes = () => {
  return <GalleryTemplate imagePaths={imagePaths} />;
};

export default Landscapes;
