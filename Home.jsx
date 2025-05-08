// import { useContext } from "react";
// import "./Home.css";
// import { ProductContext } from "../Context/ProductContext";
// import { useNavigate } from "react-router";
// import Backdrop from "@mui/material/Backdrop";
// import { CartContext } from "../Context/CartContext";
// import { TailSpin } from "react-loader-spinner";
// export const Home = () => {
//   const { categories } = useContext(ProductContext);
//   const { addFilterCategory, clearCategory } = useContext(CartContext);
//   const navigate = useNavigate();
//   const categoryHandler = (category) => {
//     clearCategory();
//     addFilterCategory(category);
//     navigate("/products");
//   };
//   return categories.length === 0 ? (
//     <Backdrop
//       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       open={true}
//       // onClick={handleClose}
//     >
//       <TailSpin
//         height="80"
//         width="100%"
//         color="#4fa94d"
//         ariaLabel="tail-spin-loading"
//         radius="1"
//         wrapperStyle={{ margin: "8rem auto" }}
//         wrapperClass=""
//         visible={true}
//       />
//     </Backdrop>
//   ) : (
//     <>
//       <section className="category">
//         <h1>Artisans E-commerce</h1>
//         <h2>CATEGORIES TO BAG</h2>
        
//         <ul className="landing-ul">
//           {categories.map(
//             ({ _id, categoryName, description, categoryImage }) => (
//               <li
//                 onClick={() => categoryHandler(categoryName)}
//                 key={_id}
//                 style={{ backgroundImage: `url(${categoryImage})` }}
//               >
//                 <h2 className="category-text">{categoryName}</h2>
//                 <p className="category-text">Check out our {description}</p>
//               </li>
//             )
//           )}
//         </ul>
//       </section>
//       <div className="landing-image-container">
//         <img
//           className="landing-image"
//           alt="landing"
//           // src={require("../Images/3588601.jpg")}
//           src={require("../Images/Pottery.jpeg")}
//         />
//       </div>
//     </>
//   );
// };



import { useContext } from "react";
import "./Home.css";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router";
import Backdrop from "@mui/material/Backdrop";
import { CartContext } from "../Context/CartContext";
import { TailSpin } from "react-loader-spinner";

export const Home = () => {
  const { categories } = useContext(ProductContext);
  const { addFilterCategory, clearCategory } = useContext(CartContext);
  const navigate = useNavigate();

  const categoryHandler = (category) => {
    clearCategory();
    addFilterCategory(category);
    navigate("/products");
  };

  return categories.length === 0 ? (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <TailSpin
        height="80"
        width="100%"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{ margin: "8rem auto" }}
        visible={true}
      />
    </Backdrop>
  ) : (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Artisan E-Commerce</h1>
          <p className="hero-quote">"Every product has a soul — handcrafted by passion, perfected by tradition."</p>
          <button className="hero-btn" onClick={() => navigate("/products")}>
            Explore Collections
          </button>
        </div>
        <img src={require("../Images/Pottery.jpeg")} alt="Hero Banner" className="hero-image" />
      </section>

      {/* Quote Banner */}
      <section className="quote-banner">
        <p>“When you buy handmade, you support a story, a family, and a tradition.”</p>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <h2 className="section-heading">Explore Artisan Categories</h2>
        <div className="category-grid">
          {categories.map(({ _id, categoryName, description, categoryImage }) => (
            <div
              className="category-card"
              key={_id}
              onClick={() => categoryHandler(categoryName)}
              style={{ backgroundImage: `url(${categoryImage})` }}
            >
              <div className="category-content">
                <h3>{categoryName}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
