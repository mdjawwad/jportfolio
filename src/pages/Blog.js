import React from "react";
import AllBlog from "../component/AllBlog";
import Tittle from "../component/Tittle";

function Blog() {
  return (
    <div>
      <div className="blog-main-title">
        <Tittle title={"Recent Blog"} span={"Recent Blog"} />
        </div>

        <div className="BlogSection">
          {AllBlog.map((blog) => {
            return (
              <div className="blog" key={blog.id}>
                <div className="blog-content">
                  <img src={blog.image} alt="" />
                  <a href={blog.link} className="blog-link">
                    {blog.title}
                  </a>
                  <div className="blog-date">
                    <p> {blog.date} </p>
                    <p> {blog.month} </p>
                    <p> {blog.year} </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Blog;
