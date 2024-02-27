import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 border-b">
      <Link className="flex items-center" to={"/"}>
        <img width={80} src={"/movie-logo.jpg"} />
        <span className="font-bold text-2xl max-sm:hidden">START</span>
      </Link>

      <Link
        to={"/create"}
        className="border rounded-full p-1 px-5 transition hover:bg-black hover:text-white"
      >
        Film Oluştur
      </Link>
    </header>
  );
};

export default Header;
