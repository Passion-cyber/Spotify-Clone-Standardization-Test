const FavArtistCard = ({image, Text, Sub, icon }) => {
  return (
    <div className="fav-artist-container">
    <div className="image">{image}</div>
    <div className="fav-artist-text">
        <h2 className="lead-text">{Text}</h2>
        <h2 className="sub-text">{Sub}</h2>
    </div>
    <h2 className="fav-artist-icon">{icon}</h2>
  </div>
  )
}

export default FavArtistCard