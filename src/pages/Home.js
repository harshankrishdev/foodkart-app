import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import img1 from "../assets/iPhone-2.jpg";
import img2 from "../assets/foodyapp.jpg";
import Footer from "./Footer";
import About from "./About";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div className="app">
      <img
        src={img1}
        className="home-banner"
        alt=""
        width={"100%"}
        height={"100%"}
      />
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={4}>
                <div className="category-tile">{category.name}</div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
      <div className="sale__banner--container mt-4">
        <img
          src={img2}
          className="banner"
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="featured-products-container container mt-4 latest">
        <h2>Latest Menu</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>

      <About />
      <Footer />
    </div>
  );
}

export default Home;
