import { useEffect, useState } from 'react'
import './App.css'
import tmdb from './tmdb'
import MovieRow from './components/MovieRow/MovieRow';
import FeatureMovie from './components/Featured/FeatureMovie';
import Header from './components/Headers/Header';


function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
        // Pegando a lista total
      
      let list = await tmdb.getHomeList();
      setMovieList(list);


      // Pegando o Destaque
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');

      setFeatureData(chosenInfo);

      console.log(chosenInfo);
    }
    
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener);

    return() => {
      window.removeEventListener('scroll', scrollListener);
    }
  },[])

  return (
    <div className='page'>

      <Header black = {blackHeader}/>

      {featureData &&
        <FeatureMovie  item={featureData}/>
      }

     <section className='lists'>
      {movieList.map((item, key)=>(
       <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
     </section>

     <footer>
      Feito com <span role='img' aria-label='coração'> ❤️ pela b7web</span><br />
      Direitos de imagem para Netflix <br/>
      Dados pegos pelo site TheMovieDB.org
     </footer>
    </div>  
  )
}

export default App
