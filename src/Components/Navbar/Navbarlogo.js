const Navbarlogo = ({title, icon}) => {
  return (
    <div className="header-card">
     <h2 className="nav-icon">{icon}</h2>  <h2 className="icon-text">{title}</h2>
    </div>
  );
};

export default Navbarlogo;
