import './header.css';

function Header() {
  return (
      <header className="header">
        <p className="title">
          GuessWhat
        </p>
        <button
          className="logout"
        >
          Sair
        </button>
      </header>
  );
}

export default Header;
