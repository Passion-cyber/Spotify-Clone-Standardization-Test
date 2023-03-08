const Navbarlogo = ({title, icon, text}) => {
  return (
    <div className="header-card">
     <h2 className="nav-icon">{icon}</h2> 
      <h2 className="icon-text">{title}<span className="colored-icon-text">{text}</span></h2>
    </div>
  );
};

export default Navbarlogo;
