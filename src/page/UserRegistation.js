import React, { useState } from "react";
import "../css/UserRegistation.css";
import { toast } from "react-toastify";

const UserRegistation = ({ setScreen }) => {
  const [fName, setFName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [gender, setgender] = useState("");
  const [checked, setchecked] = useState(false);

  const handleSubmit = () => {
    if (fName === "" || username === "" || email === "" || password === "" || gender === "") {
      toast.error("please full fill form");
    } else if (fName === "") {
      toast.error("Name Is Required");
    }else if(username === ""){
    } else if (email === "") {
      toast.error("Email Is Required");
    } else if (password === "") {
      toast.error("Password is Required");
    } else if (gender === "") {
      toast.error("gender is Required");
    } else {
      // var users = JSON.parse(localStorage.getItem("users") || "[]");
      var user = {
        firstName: fName,
        email: email,
        username: username,
        password: password,
        gender: gender,
      };
      // users.push(user);
      // localStorage.setItem("users", JSON.stringify(users));

      fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then((res) => console.log(res.json()));
      
      // .then((users)=>{
      //   localStorage.setItem("users", JSON.stringify(users));
      // });
      // setUsername("")''
      // setFName("");
      // setemail("");
      // setpassword("");
      // setgender("");
      // setScreen("LoginPage");
      // setchecked(false);
      // toast.success("User Saved!");
    }
  };
  return (
    <>
      <div className="back1">
        <div className="container content mt-4" autoComplete="off">
          <h5> 📝 Apply for Registration...</h5>
          <div className="row border p-4">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  required="true"
                />
              </div>
                <label htmlFor="exampleInputUserName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  required="true"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required="true"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  required="true"
                />
              </div>
              {/* radios button inpput ================== */}
              <div className="d-flex flex-row">
                Gender :
                <div className="form-check ms-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Gender"
                    value="Male"
                    defaultChecked={gender === "Male"}
                    onClick={(e) => setgender(e.target.value)}
                    id="flexRadioDefault1"
                    required="true"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check ms-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Gender"
                    value="Female"
                    defaultChecked={gender === "Female"}
                    onClick={(e) => setgender(e.target.value)}
                    id="flexRadioDefault2"
                    required="true"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
              </div>
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  checked={checked}
                  onChange={(e) => setchecked(e.target.value)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I Accept Terms And Conditions
                </label>
              </div>
              <button
                className="form__submit-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default UserRegistation;
