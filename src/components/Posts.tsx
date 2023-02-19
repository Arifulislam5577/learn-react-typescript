import React from "react";

interface PostSchema {
  id: number;
  title: string;
  body: string;
}

interface postArr {
  posts: PostSchema[];
}

const Posts = ({ posts }: postArr) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {posts.map((post) => (
        <div className="bg-gray-100 p-5 rounded" key={post.id}>
          <h5 className="text-xl font-bold ">{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
