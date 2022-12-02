// import React , { useContext} from 'react'
// import CartContext from '../CartContext'
// import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
// import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// function Cart ({name ,price }){
// const {addToCart} = useContext(CartContext);
// return(
// <div onClick={()=>addToCart(name , price)}>
//     <div>
// <BrightnessHighIcon />
// <div>
//     <h2>{name}</h2>
//     <ShoppingBagIcon/>
//     <h2>{price}</h2>
// </div>



//     </div>
// </div>
// )
// }
// export default Cart;


// import React, { useContext } from "react";
// import { IoShirtOutline } from "react-icons/io5";
// import { AiFillShopping } from "react-icons/ai";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import CartContext from "../CartContext";
// function Cart({ name, price }) {
//   const { addToCart } = useContext(CartContext);
//   return (
//     <div>
//       <Card style={{ width: "18rem" }}>
//         <IoShirtOutline className="shirt"/>
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>${price}</Card.Text>
//           <Button variant="primary" onClick={() => addToCart(name, price)}>
//             <AiFillShopping />
//           </Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default Cart;
