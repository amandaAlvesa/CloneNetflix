const API_KEY ='c8367eb2eaebe470f67c8c815550f47e';
const API_BASE = 'https://api.themoviedb.org/3';

/*
    -originais netflix
    -recomendados (trending)
    -em alta(top rated)
    -ação
    -comedia
    -terror
    -romance
    -documentario
*/ 

const basicFetch=async(endpoint) =>{
    return await fetch(
        `${API_BASE}${endpoint}$language=pt-BR&api_key=${API_KEY}`
      ).then((response) => response.json());
}

export default{
    getHomeList:async() =>{
        return [
            {
                slug:'Originals',
                title:'Originais da Netflix',
                items:await basicFetch(`/discover/tv?with_networks=213&`)
            },

            {
                slug:'Trendings',
                title:'Recomendados',
                items:await basicFetch(`/trending/all/week?&`)
            },        
            {
                slug:'Top Rated',
                title:'Em Alta',
                items:await basicFetch(`/movie/top_rated?&`)
            },
            {
                slug:'Action',
                title:'Ação',
                items:await basicFetch(`/discover/movie?&`)
            },
            
            {
                slug:'Comedy',
                title:'Comédia',
                items:await basicFetch(`/discover/movie?with_genres=35&`)
            },
            
            {
                slug:'Horror',
                title:'Terror',
                items:await basicFetch(`/discover/movie?with_genres=27&`)
            },
            
            {
                slug:'Romance',
                title:'Romance',
                items:await basicFetch(`/discover/movie?with_genres=10749&`)
            },
            
            {
                slug:'Documentary',
                title:'Documentário',
                items:await basicFetch(`/discover/movie?with_genres=99&`)
            },
        ]
    }
}