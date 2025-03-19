import Button from "./Button";

const Pricing = () => {
  return (
    <>
      <div className="bg-soft-cream min-h-screen flex flex-col items-center">
        <h1 className="text-2xl font-bold my-4">Pricing Section</h1>
        <p className="text-lg text-center text-dark-coffee">
          Click an image from the gallery and email me with what option you are
          interested in!
        </p>
        <Button
          buttonText="View Gallery"
          location="/gallery"
          containDiv={true}
        />
        <img
          className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-[1100px]"
          src={`${import.meta.env.BASE_URL}/images/PHOTO PRICES.jpg`}
          alt="Pricing"
        />
      </div>
    </>
  );
};

export default Pricing;
