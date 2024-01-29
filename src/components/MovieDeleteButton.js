import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
  return (
    <button onClick={props.deleteMovie}>Vymazať film</button>
  )
}

export default MovieDeleteButton