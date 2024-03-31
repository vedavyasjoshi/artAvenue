import artAvenueIcon from "../assets/artAvenueIcon.png";
import searchIcon from "../assets/searchIcon.png";

const Header = () => {
  return (
    <div className="border-1 border-black bg-slate-950 flex items-center justify-around">
      <div className="flex items-center m-2">
        <img src={artAvenueIcon} alt="app-logo" className="h-10" />
        <h1 className="text-xl font-bold text-white">Art Avenue</h1>
      </div>
      <div className="mx-5 w-[50%] flex items-center">
        <input
          className="w-[100%] rounded-l-sm h-9 px-4"
          type="text"
          placeholder="Search Art"
        />
        <span className="h-9 px-2 rounded-r-sm cursor-pointer bg-slate-300">
          <img className="h-7 pt-1" src={searchIcon} alt="search-icon" />
        </span>
      </div>
      <div className="flex text-white justify-evenly">
        <button className="mx-9">
          <h3 className="text-sm">Hello Guest</h3>
          <h1 className="text-lg">Accounts and Lists</h1>
        </button>
        <button className="mx-9">
          <h3 className="text-sm">Returs</h3>
          <h1 className="text-lg">& Orders</h1>
        </button>
        <button className="mx-9">
          <h1>🛒 Cart</h1>
        </button>
      </div>
    </div>
  );
};

export default Header;
