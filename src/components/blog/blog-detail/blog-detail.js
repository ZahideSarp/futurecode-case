import React, { useState } from "react";
import { Card, Col, Row, Form, Button, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./blog-detail.scss";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";

const BlogDetail = () => {
  const { state } = useLocation();
  const blog = state?.blog;

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
      setCurrentPage(Math.ceil((comments.length + 1) / commentsPerPage));
    }
  };

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Card className="blog-detail-card">
      <Card.Body className="blog-detail-body">
        <Card.Title className="blog-detail-title">{blog?.title}</Card.Title>
        <Card.Subtitle className="blog-detail-name-subtitle">
         <Image className="blog-detail-image" src="../../profile.jpg"/> {blog.author}
        </Card.Subtitle>
        <Row className="blog-detail-subtitle-row">
          <Col className="blog-detail-subtitle-col">
            <Card.Subtitle className="blog-detail-subtitle">
              {blog.date}
            </Card.Subtitle>
          </Col>
          <Col className="blog-detail-subtitle-col">
            <Card.Subtitle className="blog-detail-icon-subtitle">
              <FaWhatsapp /> <RiLinkedinBoxLine /> <FaGithub />
            </Card.Subtitle>
          </Col>
        </Row>
        <Card.Text className="blog-detail-text">{blog.desc}</Card.Text>

        <Form onSubmit={handleCommentSubmit} className="comment-form">
        <div className="comments-section">
            <h5>Comments</h5>
            {currentComments.map((comment, index) => (
              <Card key={index} className="comment-card">
                <Card.Body>{comment}</Card.Body>
              </Card>
            ))}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={ `pagination-btn page-item ${
                    index + 1 === currentPage ? "active" : ""
                  }`}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
          <Form.Group controlId="commentInput">
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={handleCommentChange}
              placeholder="Enter your comment"
            />
          </Form.Group>
          <Button type="submit" className="comment-send-btn">
            Send
          </Button>
          
        </Form>
      </Card.Body>
    </Card>
  );
};

export default BlogDetail;
