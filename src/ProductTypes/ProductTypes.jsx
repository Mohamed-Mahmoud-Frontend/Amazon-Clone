import React from "react";
// , { useContext } 
import { Col, Container , Row  } from "react-bootstrap";
import {Link} from 'react-router-dom'
import './ProjectProductPage.css'
import "bootstrap/dist/css/bootstrap.min.css";
// import CartContext from '../CartContext';

function ProductTypes() {
    // const {addToCart} = useContext(CartContext);
return (
    <>
    {/* name , price */}
{/* onClick={()=>addToCart (name , price) } */}
        <Container >
        <Link to='/'><img className='logoo' src='/Images/logo2.png' alt='' /></Link>
        <Row  className='ProductType'>
        <Col lg={3} md={6} sm={12}>
            <Link      >
            <img src="/Images/ProductTypePhones/Honor.jpg" alt='' />
            <p>Honor</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link >
            <img src="/Images/ProductTypePhones/huawei.jpg" alt='' />
            <p>huawei</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link>
            <img src="/Images/ProductTypePhones/iphone.jpg" alt='' />
            <p>iphone</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link>
            <img src="/Images/ProductTypePhones/Nokia.jpg" alt='' />
            <p>Nokia</p>
            </Link>
        </Col>
        </Row>

        <Row  className='ProductType'>
        <Col lg={3} md={6} sm={12}>
            <Link>
            <img src="/Images/ProductTypePhones/Oppo.jpg" alt='' />
            <p>Oppo</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link>
            <img src="/Images/ProductTypePhones/Realme.jpg" alt='' />
            <p>Realme</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link>
            <img src="/Images/ProductTypePhones/samsung.jpg" alt='' />
            <p>samsung</p>
            </Link>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <Link>
            <img src="/Images/ProductTypePhones/Xiaomi.jpg" alt='' />
            <p>Xiaomi</p>
            </Link>
        </Col>
        </Row>

        </Container >


    </>
);
}
export default ProductTypes;



// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Cart from "../CartContext";
// function Products() {
//   const products = [
//     { name: "vest", price: 50 },
//     { name: "jacket", price: 70 },
//     { name: "sweater", price: 20 },
//     { name: "tshirt", price: 40 },
//     { name: "junper", price: 70 },
//   ];
//   console.log(products);
//   return (
//     <section className="products">
//       <Container>
//         <Row>
//           {products.map((product,index) => (
//             <Col md="3" sm="12" key={index}>
//               <Cart name={product.name} price={product.price} />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Products;
