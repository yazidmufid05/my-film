const GetDataPopular = async(number_page) => {
    
    const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${number_page}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzY5MjAyYzZjOTgyODljMmJjMTUzZWZlZDUwOGZkYiIsInN1YiI6IjY0N2VjYTI5MGZiMzk4MDBjMTI5OGYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tq9NNRwPItEUWugQ3uAVG-UvpJrcgeQvQEwWPmsyC6c'
        }
    };

    const response = fetch(url, options)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));

        return response
    
}

export default GetDataPopular