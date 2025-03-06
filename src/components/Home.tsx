import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="bg-orange-950 h-[calc(100vh-4.5rem)]">
        <div>Home Section</div>
        <Link
          className="p-2 border-1 border-b-amber-100"
          key={"gallery-link"}
          to={"/gallery"}
        >
          Go To Gallery
        </Link>
      </div>
    </>
  );
};

export default Home;
