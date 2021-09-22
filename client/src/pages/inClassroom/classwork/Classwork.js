import React from 'react'
import styled from 'styled-components'
import Navbar from '../../../components/Navbar'
import { Container } from 'react-bootstrap'
// import MaterialList from '../../../components/Material'

// export const material = [
//     {
//         title: 'Material 1',
//         desc: 'In et nisi ea culpa tempor enim adipisicing amet culpa consectetur commodo. Enim voluptate non id elit reprehenderit id fugiat qui. Minim quis fugiat consectetur pariatur mollit pariatur.',
//         file: '',
//     },
//     {
//         title: 'Material 2',
//         desc: '',
//         file: '',
//     },
//     {
//         title: 'Material 3',
//         desc: '',
//         file: '',
//     },
//     {
//         title: 'Material 4',
//         desc: '',
//         file: '',
//     },
//     {
//         title: 'Material 5',
//         desc: '',
//         file: '',
//     },
//     {
//         title: 'Material 6',
//         desc: 'In et nisi ea culpa tempor enim adipisicing amet culpa consectetur commodo. Enim voluptate non id elit reprehenderit id fugiat qui. Minim quis fugiat consectetur pariatur mollit pariatur.',
//         file: '',
//     },
//     {
//         title: 'Material 7',
//         desc: 'In et nisi ea culpa tempor enim adipisicing amet culpa consectetur commodo. Enim voluptate non id elit reprehenderit id fugiat qui. Minim quis fugiat consectetur pariatur mollit pariatur.',
//         file: '',
//     },
//     {
//         title: 'Material 8',
//         desc: 'In et nisi ea culpa tempor enim adipisicing amet culpa consectetur commodo. Enim voluptate non id elit reprehenderit id fugiat qui. Minim quis fugiat consectetur pariatur mollit pariatur.',
//         file: '',
//     },
// ]

const Classwork = (props) => {
    return (
        <div>
        <Navbar/>
        <Scontainer fluid>
            {/* {material.map((items, index) => (
                <Material 
                key={index}
                title={items.title}
                    desc={items.desc}
                    file={items.file}
                    />
                ))}             */}
            Classwork
            {/* <MaterialList /> */}
        </Scontainer>
        </div>
    )
}

export default Classwork

export const Scontainer = styled(Container)`
`