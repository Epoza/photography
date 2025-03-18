import Button from "./Button";

const Home = () => {
  return (
    <>
      <div className="bg-soft-cream h-[calc(100vh-4.5rem)] flex justify-center items-center flex-col">
        <div>Home Section</div>
        <Button
          buttonText="View Gallery"
          location="/gallery"
          containDiv={true}
        />
      </div>
    </>
  );
};

export default Home;
