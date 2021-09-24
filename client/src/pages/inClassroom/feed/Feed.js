import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../../components/Navbar'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Card, Row, Col } from 'react-bootstrap'

function Feed() {
  let { id } = useParams();
  const [classroom, setClassroom ] = useState('');
  const [isLoading, setIsLoading] = useState(false);		

  useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			const res = await axios
				.get("http://localhost:9000/classroom/id/" + id)
				.catch((error) => console.log(error));				

			setClassroom(res.data);			
			console.log(res.data);
			setIsLoading(false);
		}
		fetchData();
	}, []);

  return (
    <div>
      <Navbar />
      <Scontainer fluid>
        {/* //!Header */}
        <div>
          <Hcard>
            {isLoading ? (
            <HcardTitle>Loading ...</HcardTitle>
            ) : (
            <HcardTitle>{classroom.nameOfClass}</HcardTitle>
            )}   

          </Hcard>
        </div> 
        {/* //!Body */}
        <Container>
          <Row>
            <Col>
              1
            </Col>
            <Col>
              2
            </Col>
          </Row>
        </Container>
      </Scontainer>
    </div>
  )
}

export default Feed

export const Scontainer = styled(Container)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  width: calc(100% - 2*1.5rem);
  max-width: 62.5rem;
  padding: 0;
`
export const Hcard = styled(Card)`
  background-color: #0066DD;
  margin-top: 1.5rem;
  border: none;
  border-radius: 1rem;
  width: 100%;
  min-width: 22.53rem;
  height: 15rem;
  padding: 1.5rem;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;	  
`
export const HcardTitle = styled(Card.Title)`
  color: #FFFFFF;
  font-size: 1.75rem;
`