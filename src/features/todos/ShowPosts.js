import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPosts } from './postSlice';
import './post.css'

const ShowPosts = () => {
    const {post,isLoading,error} =useSelector((state)=>state.posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])
  return (
    <div>
      {
        isLoading && (<h1 className="">Loading....</h1>)
      }
      {
        error && (<h1 className="">{error}</h1>)
      }
      <section className='container'>
        
        {post && post.map((data)=>{
            const {title,body} =data;
            return(
                <div class="cartbody">
                    <h4 className="title">{title}</h4>
                    <p className="desc">{body}</p>
                </div>
            )
        })}
              
      </section>
    </div>
  )
}

export default ShowPosts
