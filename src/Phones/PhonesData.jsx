import React from "react";
import Phones from "./Phones";
const PhonesData = () => {
  const data = [
    {
      title: "Apple iPhone 13 Pro Max 256GB Blue",
      images: "./Images/Phones/1.jpg",
      link: "Add card",
      span: "34,976",
    },
    {
      title: "New Apple iPhone 14 Pro Max (256 GB) - Gold",
      images: "/Images/Phones/2.jpg",
      link: "Add card",
      span: "44,976",
    },
    {
      title: "New Apple iPhone 13 with FaceTime (128GB) - Midnight",
      images: "/Images/Phones/3.jpg",
      link: "Add card",
      span: "36,976",
    },
    {
      title:
        "Apple iPhone 11 with FaceTime - 128GB, 4GB RAM, 4G LTE, Black, Single SIM & E-SIM*",
      images: "/Images/Phones/4.jpg",
      link: "Add card",
      span: "17,076",
    },
    {
      title: "New Apple iPhone 14 Pro Max (256 GB) - Space Black",
      images: "/Images/Phones/5.jpg",
      link: "Add card",
      span: "36,286",
    },
    {
      title: "New Apple iPhone 14 (128 GB) - Purple",
      images: "/Images/Phones/6.jpg",
      link: "Add card",
      span: "34,976",
    },
    {
      title: "New Apple iPhone 13 (128 GB) - Green",
      images: "/Images/Phones/7.jpg",
      link: "Add card",
      span: "29,000",
    },
    {
      title: "Apple iPhone 12 128GB 4 GB RAM, Blue",
      images: "/Images/Phones/8.jpg",
      link: "Add card",
      span: "24,000",
    },
    {
      title:
        "Apple iPhone 11 with FaceTime - 128GB, 4GB RAM, 4G LTE, White, Single SIM & E-SIM",
      images:"/Images/Phones/9.jpg" ,
      link: "Add card",
      span: "18,126",
    },
    {
      title:
        "Samsung Galaxy S20 FE (5g )128gb 8gb ram cloud navy S20 FE (5g )128gb",
      images: "/Images/Phones/10.jpg",
      link: "Add card",
      span: "13,700",
    },
    {
      title: "Apple iPhone 12 Pro 256GB 6 GB RAM, Pacific Blue",
      images:"/Images/Phones/11.jpg" ,
      link: "Add card",
      span: "32,897",
    },
    {
      title: "New Apple iPhone 14 Plus (256 GB) - Midnight",
      images:"/Images/Phones/12.jpg" ,
      link: "Add card",
      span: "23,800",
    },
    {
      title: "New Apple iPhone 13 Pro (256 GB) - Alpine Green",
      images: "/Images/Phones/13.jpg",
      link: "Add card",
      span: "27,400",
    },
    {
      title: "New Apple iPhone 13 Pro with Facetime (128GB) - Sierra Blue",
      images: "/Images/Phones/14.jpg",
      link: "Add card",
      span: "32,000",
    },
    {
      title: "Apple iPhone 13 with FaceTime - 128GB, 4GB RAM, 4G LTE",
      images: "/Images/Phones/15.jpg",
      link: "Add card",
      span: "29,976",
    },
    {
      title: "Apple Iphone XS With Facetime - 256 GB",
      images:"/Images/Phones/16.jpg" ,
      link: "Add card",
      span: "10,000",
    },
    {
      title: "Apple iPhone 11 Pro Max with FaceTime - 256GB, 4GB RAM",
      images: "/Images/Phones/17.jpg",
      link: "Add card",
      span: "23,000",
    },
    {
      title: "Apple iPhone 13 Pro Max with FaceTime - 128GB, 6GB RAM,",
      images: "/Images/Phones/18.jpg",
      link: "Add card",
      span: "38,846",
    },
    {
      title: "Apple iPhone 13 with FaceTime - 128GB, 4GB RAM,",
      images: "/Images/Phones/19.jpg",
      link: "Add card",
      span: "30,950",
    },
    {
      title: "Apple iPhone 12 Pro 256GB 6 GB RAM, Pacific Blue",
      images:"/Images/Phones/20.jpg" ,
      link: "Add card",
      span: "20,406",
    },{
    title:
    "One Plus 120hs Never settle (5g )256gb 8gb_ram ",
  images: "/Images/Phones/21.jpg",
  link: "Add card",
  span: "20,500",
}

  ];
  return (
    <>
        <div style={{ display: "flex", flexWrap: "wrap" }}> 

        {data.map((item, index) => {
          return (
            <Phones
              key={index}
              title={item.title}
              images={item.images}
              link={item.link}
              span={item.span}
            />
          );
        })}
      </div>
    </>
  );
};

export default PhonesData;



