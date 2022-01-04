const API_KEY="4096cd05cb784668e9a6cf3535dff2c0";

const requests={
    fetchPopular:`/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchNowPlaying:`/movie/now_playing?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;