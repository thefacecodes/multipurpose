import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import loader from "./loading.png";

export default function Dashboard() {
  const [post, showPost] = useState(false);
  const [shouldPost, yeahPost] = useState(false);
  const newPost = useRef("");
  const [user, setUser] = useState({});

  let location = useParams();
  const { id } = location;
  console.log(location);

  const { image, firstName, lastName, maidenName, username } = user;
  // const { posts } = userposts;

  const addNewPost = (e) => {
    e.preventDefault();
    const newContent = newPost.current.value;
    console.log(newPost.current.value);
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "I am in love with someone.",
        userId: id,
        body: newContent,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    showPost(!post);
    yeahPost(!shouldPost);

    // console.log(match);

    // return (
    //   <div className="posts">
    //     <div className="post-head">
    //       <img src={image} alt="" />
    //       <div className="user-details">
    //         <h3>
    //           {firstName} {maidenName} {lastName}
    //         </h3>
    //         <h4>@{username}</h4>
    //       </div>
    //     </div>
    //     <p>{newPost.current.value}</p>
    //   </div>
    // );
    // // console.log(e.target.value);
    // addNewPost(e.target.value);
    // console.log(newPost);
  };

  const url = `https://dummyjson.com/users/${id}`;

  // useEffect(() => {

  // });

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
    document.title = "Dashboard";

    console.log(user);
  }, []);

  const NewPost = () => {
    return (
      <div className="new-post">
        <h3>Add new post</h3>
        <form onSubmit={addNewPost}>
          <textarea
            name="post"
            id="post"
            rows="10"
            cols="30"
            ref={newPost}
            placeholder="What's on your mind?"
          ></textarea>
          <br />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  };

  const Posts = () => {
    const [userposts, setUserPosts] = useState({});
    const { posts } = userposts;
    useEffect(() => {
      fetch(url + "/posts")
        .then((response) => response.json())
        .then((data) => setUserPosts(data))
        .catch((error) => console.log(error));

      // console.log(posts);
    }, []);

    if (posts) {
      return (
        <>
          {posts.map((item) => (
            <div className="posts" key={item.id}>
              <div className="post-head">
                <img src={image} alt="" />
                <div className="user-details">
                  <h3>
                    {firstName} {maidenName} {lastName}
                  </h3>
                  <h4>@{username}</h4>
                </div>
              </div>
              <p>{item.body}</p>
            </div>
            // <h3>{item.title}</h3>
          ))}
        </>
      );
    } else {
      // return (
      //   <div className="pre-loader">
      //     <img src={loader} alt="" />
      //   </div>
      // );
    }
  };

  const NavBar = () => {
    return (
      <div className="navBar">
        <form>
          <input type="search" placeholder="Search" name="q" id="search" />
        </form>
        <div className="user-details">
          <div>
            <img src={image} alt="" />
            Profile
          </div>
          <div>
            <i className="fa-solid fa-wrench"></i> Settings
          </div>
          <div>
            <i className="fa-solid fa-right-from-bracket"></i> Log out
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <NavBar />
      <div className="dashboard-section">
        <div className="greeting">
          <section>
            <h2>
              &#128075; Hi, {firstName} {lastName}
            </h2>
            <p>You're welcome</p>
            <button onClick={() => showPost(!post)}>
              {post ? "Close" : "Make a Post"}
            </button>
          </section>

          <img src={user.image} alt="" />
        </div>
        {post && <NewPost />}
        <Posts />
      </div>

      {/* {posts.map((item) => (
        <h2>{item.title}</h2>
      ))} */}
    </div>
  );
}
