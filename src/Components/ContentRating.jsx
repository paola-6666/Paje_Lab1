
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state={
      likes: 0,
      dislikes: 0,
      total: 0,

      handleLike:() =>{
        this.setState((prevState)=>({
          likes: prevState.likes+1,
          total: prevState.likes + prevState.dislikes +1
        }));

      },
      handleDislike:() =>{
        this.setState((prevState)=> ({
          dislikes: prevState.dislikes+1,
          total: prevState.likes + prevState.dislikes +1

        }));
      }
     };

  }
  render() {
    return (
     <>
     <div className='content-rating'>
     <p>Mount Mayon, located in the province of Albay in the Philippines, is one of the most active and iconic volcanoes in the country, famous for its near-perfect cone shape. Rising approximately 2,462 meters above sea level, it is part of the Pacific Ring of Fire and has erupted over 50 times in recorded history, with its eruptions sometimes posing serious threats to nearby communities. Despite its danger, Mount Mayon is also a symbol of natural beauty and cultural pride, attracting tourists, photographers, and scientists from around the world. The surrounding area, known as the Mayon Volcano Natural Park, offers scenic views, rich biodiversity, and a glimpse into the local Bicolano heritage. With its awe-inspiring presence and historical significance, Mount Mayon continues to be a powerful reminder of nature's beauty and unpredictability.
</p>

     <div className='rating-buttons'>

      <button className='like-button' onClick={this.state.handleLike}>
        Like ({this.state.likes})
        </button>

        <button className='dislike-button' onClick={this.state.handleDislike}>
         Dislike ({this.state.dislikes})
        </button>

        <button className='like-button'>Total ({this.state.total})</button>
     
     </div>
     </div>
     
     </>
    );
    

    
  }
}

export default ContentRating;
