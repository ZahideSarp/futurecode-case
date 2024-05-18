import React from 'react'
import { Card} from 'react-bootstrap'
import "./blog-card.scss";
import { useNavigate } from 'react-router-dom';
import blogItem from '../helper/blog.json';

const BlogCard = ({id,image, title,desc,date}) => {
const navigate=useNavigate();
  
  const handleClick=()=>{
    navigate("blog-detail", { state: { blog: blogItem.find((item) => item.id === id) } });
  }
  const truncatedDesc = desc.length > 50 ? desc.slice(0, 150) + "..." : desc;
  return (
    <Card className="blog-card" onClick={handleClick}>
      <Card.Body>
        <div className="image">
          <Card.Img variant="top" src={`/${image}`} alt={title} className="img-fluid" />
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>
            <div> {truncatedDesc}</div>
        </Card.Subtitle>
        <Card.Subtitle className="subtitle-date">{date}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default BlogCard