import React from 'react'
import Navbar from '../../../components/Navbar'
import ClassroomCard from '../../../components/ClassroomCard'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

function Home() {
		return (
				<div>
						<Navbar />
						<Scontainer fluid>
								<ClassroomCard/>
								<ClassroomCard/>
								<ClassroomCard/>
								<ClassroomCard/>
								<ClassroomCard/>
								<ClassroomCard/>
								<ClassroomCard/>
						</Scontainer>
				</div>
		)
}

export default Home

export const Scontainer = styled(Container)`
	margin-top: 1rem;
	display: flex;
  flex-wrap: wrap;
	gap: 1rem;	
`
// $grid-breakpoints: (
//     xs: 0,
//     sm: 576px,
//     md: 768px,
//     lg: 992px,
//     xl: 1200px,
//     xxl: 1400px
//   );