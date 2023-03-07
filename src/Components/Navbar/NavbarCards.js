const NavbarCards = ({title, icon}) => {
  return (
    <div className="individual-cards">
     <h2 className="nav-icon">{icon}</h2>  <h2 className="icon-text">{title}</h2>
    </div>
  );
};

export default NavbarCards;
