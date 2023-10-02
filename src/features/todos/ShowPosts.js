import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const ShowPosts = () => {
    const {post,isLoading,error} =useSelector((state)=>state);
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Show Post view</h1>
    </div>
  )
}

export default ShowPosts
