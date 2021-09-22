import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import ClassroomCard from "../../../components/ClassroomCard";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import axios from 'axios';

function Home(props) {	

	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	
	//get data from collection "classrooms"
	const [datas, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const result = await axios
				.get("http://localhost:9000/classroom")
				.catch((error) => console.log(error));				
			setData(result.data);
			console.log(result.data);
			setIsLoading(false);
		}
		fetchData();
	}, []);
		
  return (
    <div>
      <Navbar />
			{isLoading ? (
        <div>Loading ...</div>
      ) : (
      <Scontainer fluid>				
				{datas.map((items, index) => (
					<ClassroomCard 
						key={items._id}
						to={items._id}
						nameOfClass={items.nameOfClass}
						subject={items.subject}
					/>
				))}			      
      </Scontainer> )}
    </div>
  );
}

export default Home;

export const Scontainer = styled(Container)`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;