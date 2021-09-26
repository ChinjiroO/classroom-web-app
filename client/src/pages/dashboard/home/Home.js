import axios from 'axios';
import React, { useEffect, useState } from "react";
import ClassroomCard from "../../../components/ClassroomCard";
import Navbar from "../../../components/Navbar";
import { Scontainer } from "./Styled";

function Home(props) {	
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
	const [classrooms, setClassrooms] = useState([]);
	const [isLoading, setIsLoading] = useState(false);		
	//*get data from collection "classrooms"
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const res = await axios
				.get("http://localhost:9000/classroom/" + user.result.googleId)
				.catch((error) => console.log(error));				
			setClassrooms(res.data);			
			console.log(res.data);
			setIsLoading(false);
			console.log(classrooms);
		}
		fetchData();
	}, []);
	//*Check user if haven't in mongodb let will add them to mongodb
	useEffect(() => {
		const postUser = async () => {
			const res = await axios
				.post("http://localhost:9000/user/add", user.result)
				.then((res) => console.log(res.data))
				.catch((err) => console.error(err));
			}
			const getOneUser = async () => {
				const resU = await axios			
				.get('http://localhost:9000/user/'+ user.result.googleId)			
				.catch((err) => console.log(err));
				// console.log(resU);
				if(resU.data == null) {
					console.log("Fist time to come in this here.");
					postUser();
					console.log("Add new user successful");
			};
		}		
		getOneUser();		
	}, []);
	
  return (
    <div>
      <Navbar />
			{isLoading ? (
        <div>Loading ...</div>
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