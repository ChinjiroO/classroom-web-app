import axios from "axios";
import React, { useEffect, useState } from "react";
import ClassroomCard, { Scard } from "../../../components/ClassroomCard";
import Navbar from "../../../components/Navbar";
import { Scontainer } from "./Styled";
import { Placeholder, Card } from "react-bootstrap";

function Home() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [classrooms, setClassrooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //*get data from collection "classrooms"
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios
        .get("http://goroom.herokuapp.com/classroom/" + user.result.googleId)
        .catch((error) => console.log(error));
      setClassrooms(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  //*Check user if haven't in mongodb let will add them to mongodb
  useEffect(() => {
    const postUser = async () => {
      const res = await axios
        .post("http://goroom.herokuapp.com/user/add", user.result)
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    };
    const getOneUser = async () => {
      const resU = await axios
        .get("http://goroom.herokuapp.com/user/" + user.result.googleId)
        .catch((err) => console.log(err));
      // console.log(resU);
      if (resU.data == null) {
        console.log("Fist time to come in this here.");
        postUser();
        console.log("Add new user successful");
      }
    };
    getOneUser();
  }, []);
  //! Delete classrooms

  return (
    <div>
      <Navbar/>
      {isLoading ? (
        <Scontainer fluid>
          <Scard>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={11} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
							<br/>
							<br/>
            </Card.Body>
          </Scard>
        </Scontainer>
      ) : (
        <Scontainer fluid>
          {classrooms.map((items, index) => (
            <ClassroomCard
              key={index}
              nameOfClass={items.nameOfClass}
              subject={items.subject}
              _id={items._id}
            />
          ))}
        </Scontainer>
      )}
    </div>
  );
}

export default Home;
