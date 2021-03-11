import React from 'react';
import './App.css';
import Search from './Search';
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  //mock films - need to swap this for api 
  const posts = [
    { id: '1', name: 'The Goonies' },
    { id: '2', name: 'Home Alone' },
    { id: '3', name: 'Forest Gump' },
    { id: '4', name: 'Cinderella' },
];

const dataUrl = "https://api.themoviedb.org/3/movie/550?api_key=1b9fe768a428542a8658b09cb7af5b23";

fetch(dataUrl)
.then((resp) => resp.json())
.then(resp => {
  let movies = [];
// return movies.map(resp) 
})

  const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');

  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

  return <Router> {
      <div className="container">
          <Search 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          />
          <ul className = "movieList">
            <p>Movies to pick from:</p>
              {filteredPosts.map(post => (
                  <li key={post.key}>{post.name}</li>
              ))}
          </ul>
      </div>
}
</Router>
}

export default App;