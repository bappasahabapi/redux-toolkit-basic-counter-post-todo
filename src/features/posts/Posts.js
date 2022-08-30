import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const Posts = () => {
    // const post =useSelector((state)=>console.log(state))
    const {isLoading,posts,error} =useSelector((state)=>state.post);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts())
    }, [])
    

return (
    <div>
    <h1>Posts...</h1>

    {isLoading && <h4> Loading...</h4>}
    {error && <h4>{error}</h4>} 
     <section>
     {posts  && posts.map((post)=>{
       return<article>
       <h1 style={{fontWeight:"bold"}}>{post.title}</h1>
        <p>{post.body}</p>
     </article>
    })}
     </section>

    </div>
  );
};

export default Posts