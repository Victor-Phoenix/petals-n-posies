function Header(flowerCategories, handleFilter) {
  return (
    <header className="header">
      <a href="#">Home</a>
      <NavBar flowerCategories={flowerCategories} onFilter={handleFilter} />
      <a href="#">Weddings & Events</a>
      <a href="#">About</a>
    </header>
  );
}

export default Header;
