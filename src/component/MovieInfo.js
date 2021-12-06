import {useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router"
import { useState,useEffect } from "react";
import axios, { Axios } from "axios";
import "./MovieInfo.css"
import { Button } from 'react-bootstrap';

function MovieInfo(info){

    const dispatch = useDispatch();
    const state = useSelector((state)=>{
    return{
        userIsLogedIn: state.usersReducer
    }
    });

    const {AvailableMovies_id} = useParams();
    const [availableMovies, setAvailableMovies] = useState()


    useEffect(() => {
        axios
          .get(`http://localhost:8080/available_movies/${AvailableMovies_id}`)
          .then((response) => setAvailableMovies(response.data))
          .catch((error) => console.log(error));
      },[]);


    const checkIfLogedIn = ()=>{
        if(!state.userIsLogedIn.isLogedIn)
        {
            alert("You have to Login")
        }
        else{
            console.log(availableMovies.id)
            console.log(state.userIsLogedIn.extendUser.id)
            // --------------------------------
                let data = JSON.stringify({
                    movie_room: {id:availableMovies.id},
                    user: {id:state.userIsLogedIn.extendUser.id}
                })
                axios.post('http://localhost:8080/tickets', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
                )
                .then(
                    function(res)
                    {
                        console.log(res)
                    }
                    )
                .catch(function(err){console.log(err)})
            // --------------------------------
            alert("Seccesusfuly Added to Ticket")
        }
    }

    return(
                <>
                { availableMovies == undefined ? "" : <div className="movieDetCard">
                    <iframe width="600" height="315" src={`https://www.youtube.com/embed/${availableMovies.movie.trailer}`} className="part1OfCard"/ >
                    <div >
                        <input type={"image"} src={availableMovies.movie.img} className="imgSize"/>
                        <div className="des">{availableMovies.movie.name}</div>
                        <div>{availableMovies.movie.description}</div>
                        <div>{availableMovies.movie.rating}</div>
                        <div>{availableMovies.movie.type}</div>
                        <div> Minimum Age: {availableMovies.movie.minimum_age}</div>
                    </div>
                    <Button onClick={checkIfLogedIn} variant="success">Add to My Ticket</Button>
                </div>}

                </>

    )
}

export default MovieInfo