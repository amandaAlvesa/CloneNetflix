import React from "react";
import './FeatureMovie.css';

export default({item}) => {
    console.log(item);

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    //pontos precisando arredondar (8.987) -> (8.9)
    let fixPoints = item.vote_average;
    let pontos = fixPoints.toFixed(1);

    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{pontos} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons"> {item.number_of_seasons } temporada{item.number_of_seasons !== 1 ? 's':''}</div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="watchbutton">▶ Assistir</a>
                        <a href={`/list/add${item.id}`}className="mylistbutton"> + Minha Lista</a>    
                    </div>
                <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}