const PlaylistTitleCard = ({number, title, artist, time, album}) => {
    return (
      <>    
      <div className='titlecard-container'>
          <div className="serial-number">{number}</div>
          <div className="title">{title}</div>
          <div className="artist">{artist}</div>
          <div className="time">{time}</div>
          <div className="album">{album}</div>
      </div>
      </>
    )
  }
  
  export default PlaylistTitleCard