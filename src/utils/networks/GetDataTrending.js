const GetDataTrending = async() => {
    try {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY5MjAyYzZjOTgyODljMmJjMTUzZWZlZDUwOGZkYiIsInN1YiI6IjY0N2VjYTI5MGZiMzk4MDBjMTI5OGYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tq9NNRwPItEUWugQ3uAVG-UvpJrcgeQvQEwWPmsyC6c'
            }
          };
          
          const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .catch(err => console.error(err));
          
          return response
        
    } catch (error) {
        console.log(error);
    }
}

export default GetDataTrending;