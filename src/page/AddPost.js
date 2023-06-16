import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";
import "../css/UserRegistation.css";

const AddPost = ({ setScreen }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [tags, setTags] = useState("");
  const [reaction, setReaction] = useState("");

  const handleSubmit = () => {};

  function handleClick(event) {
    event.preventDefault();
    setScreen("Home");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      HOME
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Add Post
    </Link>,
  ];
  return (
    <div className="back">
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <div className="container content mt-4" autoComplete="off">
        <h5> 📝 Apply for Registration...</h5>
        <div className="row border p-4">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputUserName" className="form-label">
                Body
              </label>
              <input
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                UserId
              </label>
              <input
                type="email"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required="true"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Tags
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
                required="true"
              />
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Reaction
                </label>
                <input
                  type="number"
                  value={reaction}
                  onChange={(e) => setReaction(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  required="true"
                />
              </div>

              <button className="form__submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
