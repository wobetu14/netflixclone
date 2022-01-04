import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="App"> 
    {/* <Hello/> */}
     <Nav />
     <Banner />
      <Row 
      title="Netflix Popular Movies" 
      fetchURL={requests.fetchPopular}
      isLargeRow={true}
      />
      <Row title="Now Playing" fetchURL={requests.fetchNowPlaying}/>
      {/* <Row title="Popular Movies" fetchURL={requests.fetchPopular}/> */}
      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
