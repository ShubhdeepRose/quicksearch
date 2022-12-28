import PostContent from "./PostContent";

const Posts = ({ search, error}) => {
  const results = search.map((post) => (
    <PostContent key={post.id} post={post} />
  ));
  const content = results.length ? (
    results
  ) : (
    <div className="card mt-3 shadow-sm bg-white rounded ">
      <div className="card-body custom-card">
        {error.length === 0 ? <h3>No matching posts</h3> : <h3>{error}</h3>}
        
      </div>
    </div>
  );
  return <div className="m-4">{content}</div>;
};

export default Posts;
