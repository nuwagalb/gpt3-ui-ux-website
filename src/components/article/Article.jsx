import React from 'react';
import './article.css';

const Article = ({ imageUrl, date, text }) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article'>
        <img src={imageUrl} alt="blog_image" />
      </div>
      <div className='gpt3__blog-container__article-content'>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  )
}

export default Article
