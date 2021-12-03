import { useParams } from "react-router"

function MovieInfo(info){
    const {movieName} = useParams();
    return(
        <>
        {console.log(movieName)}
        </>
    )
}

export default MovieInfo