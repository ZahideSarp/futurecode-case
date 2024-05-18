import React from "react";
import BlogDetail from "../components/blog/blog-detail/blog-detail";
import Spacer from "../components/common/spacer";
const BlogDetailPages = () => {
  return (
    <>
      <Spacer height={110} />
      <BlogDetail />
      <Spacer height={30} />
    </>
  );
};

export default BlogDetailPages;
