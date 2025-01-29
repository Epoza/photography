const Header = () => {
  return (
    <div className="w-full flex justify-between items-center bg-amber-600 border-2 border-red-500 h-18 p-4">
      <div className="text-2xl" id="website-name">
        <span>{/* Icon here */}</span>Website Name
      </div>
      <div className="flex gap-3">
        <div>Gallery</div>
        <div>About</div>
        <div>Home</div>
        <div>
          {/*social media/email*/}
          <div>{/* Instagram */}</div>
          <div>{/* Email */}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
