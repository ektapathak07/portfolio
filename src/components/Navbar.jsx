function Navbar({name}) {
  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a className="logo">{name}</a>

        <ul className="nav-links">
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#education">education</a></li>
          <li><a href="#contact">contact</a></li>
        
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

