import "./ReloadMoviesButton.css"



const ReloadMoviesButton = (props) => {
  return (
    <button className="reload-button" onClick={props.reloadMovies}>
      Načítať všetko
    </button>
  )
}

export default ReloadMoviesButton