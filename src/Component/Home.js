import React ,{useState} from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim() === '') {
      alert("An empty text cannot be posted");
    } else {
      let postCount = parseInt(localStorage.getItem('postcount') || '0', 10);
      const currentPostCount = (postCount + 1) % 10;
      localStorage.setItem(`post${postCount}`, postText);
      localStorage.setItem('postcount', currentPostCount.toString());
      setPostText('');

      if (currentPostCount === 0 && postCount === 9) {
        postCount = -1; 
      }
      localStorage.setItem('postcount', (postCount + 1).toString());
    }
  };

  const handleDelete = () => {
    const postCount = parseInt(localStorage.getItem('postcount') || '0', 10);
    if (postCount > 0) {
      const currentPostCount = (postCount - 1) % 10;
      localStorage.removeItem(`post${currentPostCount}`);
      localStorage.setItem('postcount', currentPostCount.toString());
    }
  };

  const handleDeleteAll = () => {
    localStorage.clear();
  };



 
    return (
      <div className="ui main center aligned ">

        <div className="ui btn" >
          <button className=" fluid ui button yellow">POST AND SHOW</button>
          <Link to='/view'>
          <button className=" fluid ui button yellow ">VIEW ALL</button>
          </Link>
          <button onClick={handleDelete} className=" fluid ui button yellow ">DELETE ONE</button>
          <button onClick={handleDeleteAll} className=" fluid ui button yellow " >DELETE ALL</button>
         
        </div>

        <form className="ui form center" >
        <div className="field green">
          <textarea 
          placeholder="type something...."
          value={postText} onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </div> 
        <button onClick={handlePost} className="ui button green">POST</button> 
        </form>      
        </div> 
        

     
    );
  }


export default Home;
