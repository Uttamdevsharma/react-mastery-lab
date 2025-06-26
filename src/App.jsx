import React, { useState,useEffect } from 'react';

const App = () => {

  const [posts,setPosts] = useState([]);
  const [count , setCount] = useState(0);
  const [ count2,setCount2] = useState(0);


  useEffect( () => {
    console.log("Hey Effect");

  },[])
  // fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });

  console.log("Hi render");

  return (
    
    <div>


      <p>count is : {count} </p>
      <div className="counter">
        <button onClick={() => setCount(count+1)}> Count by 1</button>
      </div>

      <p>count2 is : {count2} </p>
      <div className="counter">
        <button onClick={() => setCount2(count2+5)}> Count by 1</button>
      </div>

      <h2>Post List</h2>

      <div className="post-list">

        <ul>

        {posts.map( (post) => (
        <li key={post.id}>{post.title}</li>
      ))}

      </ul>



      </div>
      
      
      
    </div>
  );
};

export default App;