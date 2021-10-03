import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card } from 'react-bootstrap'

const Material = (props) => (
        <Scard>
            <Scard className="card-body">
                <Scard className="card-title">{props.material.title}</Scard>
                <Scard className="card-text">{props.material.desc}</Scard>
            </Scard>
        </Scard>
);
export default class MaterialList extends Component {
    
    constructor (props) {
        super(props);        
        this.state = { materials: [] };
    }

    // This method will get the data from the database.
    componentDidMount() {
        axios
        .get("http://localhost:5000/materials")
        .then((res) => {
            this.setState({ materials: res.data });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    materialList() {
        return this.state.materials.map((items) => {
            return (
                <Material
                    material={items}
                    key={items._id}
                />
            );
        });
    }

    render() {
        return (
            // <Scard>
            //     <Scard className="card-body">
            //         <Scard className="card-title">{title}</Scard>
            //         <Scard className="card-text">{desc}</Scard>
            //     </Scard>
            // </Scard>
            <>
                {this.materialList()}                
            </>
        );
    }
}

// const Material = (props) => {
//     const {title, desc, file} = props;
//     return (
//         <Scard>
//             <Scard className="card-body">
//                 <Scard className="card-title">{title}</Scard>
//                 <Scard className="card-text">{desc}</Scard>
//             </Scard>
//         </Scard>
//     )
// }

// export default Material

export const Scard = styled(Card)`
    background-color: #FFFFFF;
    border-radius: 1rem;
    &.card-body {
        background-color: #FFFFFF;
    }
    &.card-title {
        background-color: #FFFFFF;
        border: none;
    }
    &.card-text {
        background-color: #FFFFFF;
        border: none;
    }
`