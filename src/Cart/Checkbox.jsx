// import React , { useContext }from 'react'
// import CartContext from '../CartContext';

// const Checkbox = () => {
//   const {items} = useContext(CartContext);
//   return (
//     <>
//     <h2>Checkbox</h2>
//     <div>
//     {items.map((item)=>(
//       <div>
//  <h2>{item.name}</h2>
// <h3>{item.price}</h3>
// </div>
//     ))}

//     </div>
    
    
//     </>
//   )
// }

// export default Checkbox


// import React, { useContext } from "react";
// import CartContext from "../CartContext";
// import { IoShirtOutline } from "react-icons/io5";
// import Card from 'react-bootstrap/Card';
// import { Container, Row, Col } from "react-bootstrap";

// function Checkout() {
//   const { items } = useContext(CartContext);
//   return (
//     <section className="products">
//       <Container>
//         <Row>
//           {items.map((item) => (
//             <Col md="3" sm="12">
//               <Card style={{ width: "18rem" }}>
//                 <IoShirtOutline className="shirt"/>
//                 <Card.Body>
//                   <Card.Title>{item.name}</Card.Title>
//                   <Card.Text>${item.price}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Checkout;
