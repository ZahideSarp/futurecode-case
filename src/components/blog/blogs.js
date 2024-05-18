import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog from "../helper/blog.json";
import BlogCard from "./blog-card";

const Blogs = () => {
  return (
    <Container>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5">
        {blog.map((blog) => (
          <Col key={blog.id}>
            <BlogCard {...blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
