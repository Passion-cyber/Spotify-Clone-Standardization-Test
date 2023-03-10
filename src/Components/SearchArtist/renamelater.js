import { useState } from "react"

const SearchArtist = () => {
    const [tracks, setTracks] = useState({})

        return (
            <div key={items.id}>
                {item.preview_url.length ? <p className="playlist-link">{items.preview_url}</p> : <p>Invalid Url Link</p>}
    
            </div>
        )
    }

export default SearchArtist



