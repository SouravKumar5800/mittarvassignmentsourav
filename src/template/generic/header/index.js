import "./Header.css";

export const Header = () => {
  return (
    <header className="page-header">
      <div className="navbar">
        <img className="logo" src="/icons/notepad.png" alt="notepad" />
        <img className="title-logo" src="/icons/your-notes.png" alt="title" />
      </div>
    </header>
  );
};
