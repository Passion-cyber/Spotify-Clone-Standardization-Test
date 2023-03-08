const PlaylistTitleCard = ({number, title, artist, time, album}) => {
    return (
      <>    
      <ul className='titlecard-container'>
          <li className="serial-number">{number}</li>
          <li className="title">{title}</li>
          <li className="artist">{artist}</li>
          <li className="time">{time}</li>
          <li className="album">{album}</li>
      </ul>
      </>
    )
  }
  
  export default PlaylistTitleCard