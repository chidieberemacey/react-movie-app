import { useEffect } from "react";

// import Counter from './Counter';

// 9c0d6e94
const API_URL = 'http://www.omdbapi.com?apikey=9c0d6e94';

const App = () => {

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data)
  }
  useEffect(() => {searchMovies('superman')}
  ,[]);
  return (
    <div>
      Appa
      {/* <Counter /> */}
    </div>
  )
}

export default App;