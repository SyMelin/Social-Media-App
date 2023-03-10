import './Header.css';

function Header({ user, setUser }) {
  return (
    <div className="header">
        Welcome, { user }!
        <button
          className="header__button--submit"
          type="button"
          onClick={() => setUser("")}>
            Logout
        </button>
    </div>
  );
}

export default Header;
