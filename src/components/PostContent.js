import React from 'react'

const PostContent = ({ post }) => {
  return (
    <div className='card mt-3 shadow-sm bg-white rounded '>
      <div className="card-body custom-card">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default PostContent;