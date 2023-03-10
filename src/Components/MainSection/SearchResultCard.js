
import "../../Stylsheets/SearchResultCard.css";

const SearchResultCard = ({ el }) => {
  console.log(el);
  return (
    <div className="result-cards">
      <div className="result-card-image">
        <img src={el?.album?.images[0]?.url} alt="resuit-search-image" />
      </div>
      <div className="result">
        <p className="song-name">{el?.name}</p>
        <div className="song-title">
          <span>Song.</span>{" "}
          <p>
            {el?.artists?.map((_, i, arr) => (
              <>
                <span key={i}>{_?.name}</span>{" "}
                {arr[arr.length - 1].name !== _?.name && <span>ft</span>}
              </>
            ))}
          </p>
        </div>
      </div>
      <div className="song-duration">
        <p className="duration">{converterToSeconds(el?.duration_ms)}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;

const converterToSeconds = (msValue) => {
  var minutes = Math.floor(msValue / 60000);
  var seconds = ((msValue % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
