import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-envelope" />
              support@email.com
            </div>
            <div className="col-sm-6">
              <i className="fa fa-phone-alt" />
              +012-345-6789
            </div>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">
              MENU
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="product-list.html" className="nav-item nav-link">
                  Products
                </a>
                <a href="product-detail.html" className="nav-item nav-link">
                  Product Detail
                </a>
                <a href="cart.html" className="nav-item nav-link">
                  Cart
                </a>
                <a href="checkout.html" className="nav-item nav-link">
                  Checkout
                </a>
                <a href="my-account.html" className="nav-item nav-link">
                  My Account
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    More Pages
                  </a>
                  <div className="dropdown-menu">
                    <a href="wishlist.html" className="dropdown-item">
                      Wishlist
                    </a>
                    <a href="login.html" className="dropdown-item">
                      Login &amp; Register
                    </a>
                    <a href="contact.html" className="dropdown-item">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    User Account
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Login
                    </a>
                    <a href="#" className="dropdown-item">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="search">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="user">
                <a href="wishlist.html" className="btn wishlist">
                  <i className="fa fa-heart" />
                  <span>(0)</span>
                </a>
                <a href="cart.html" className="btn cart">
                  <i className="fa fa-shopping-cart" />
                  <span>(0)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <nav className="navbar bg-light">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-home" />
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-shopping-bag" />
                      Best Selling
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-plus-square" />
                      New Arrivals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-female" />
                      Fashion &amp; Beauty
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-child" />
                      Kids &amp; Babies Clothes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-tshirt" />
                      Men &amp; Women Clothes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-mobile-alt" />
                      Gadgets &amp; Accessories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-microchip" />
                      Electronics &amp; Accessories
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-6">
              <div className="header-slider normal-slider">
                <div className="header-slider-item">
                  <img src="img/slider-1.jpg" alt="Slider Image" />
                  <div className="header-slider-caption">
                    <p>Some text goes here that describes the image</p>
                    <a className="btn" href="true">
                      <i className="fa fa-shopping-cart" />
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="header-slider-item">
                  <img src="img/slider-2.jpg" alt="Slider Image" />
                  <div className="header-slider-caption">
                    <p>Some text goes here that describes the image</p>
                    <a className="btn" href="true">
                      <i className="fa fa-shopping-cart" />
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="header-slider-item">
                  <img src="img/slider-3.jpg" alt="Slider Image" />
                  <div className="header-slider-caption">
                    <p>Some text goes here that describes the image</p>
                    <a className="btn" href="true">
                      <i className="fa fa-shopping-cart" />
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="header-img">
                <div className="img-item">
                  <img src="img/category-1.jpg" />
                  <a className="img-text" href="true">
                    <p>Some text goes here that describes the image</p>
                  </a>
                </div>
                <div className="img-item">
                  <img src="img/category-2.jpg" />
                  <a className="img-text" href="true">
                    <p>Some text goes here that describes the image</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brand">
        <div className="container-fluid">
          <div className="brand-slider">
            <div className="brand-item">
              <img src="img/brand-1.png" alt="true" />
            </div>
            <div className="brand-item">
              <img src="img/brand-2.png" alt="true" />
            </div>
            <div className="brand-item">
              <img src="img/brand-3.png" alt="true" />
            </div>
            <div className="brand-item">
              <img src="img/brand-4.png" alt="true" />
            </div>
            <div className="brand-item">
              <img src="img/brand-5.png" alt="true" />
            </div>
            <div className="brand-item">
              <img src="img/brand-6.png" alt="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fab fa-cc-mastercard" />
                <h2>Secure Payment</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-truck" />
                <h2>Worldwide Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-sync-alt" />
                <h2>90 Days Return</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-comments" />
                <h2>24/7 Support</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src="img/category-3.jpg" />
                <a className="category-name" href="true">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-250">
                <img src="img/category-4.jpg" />
                <a className="category-name" href="true">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="category-item ch-150">
                <img src="img/category-5.jpg" />
                <a className="category-name" href="true">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-150">
                <img src="img/category-6.jpg" />
                <a className="category-name" href="true">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="category-item ch-250">
                <img src="img/category-7.jpg" />
                <a className="category-name" href="true">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src="img/category-8.jpg" />
                <a className="category-name" href="true">
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>call us for any queries</h1>
            </div>
            <div className="col-md-6">
              <a href="tel:0123456789">+012-345-6789</a>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>Featured Product</h1>
          </div>
          <div className="row align-items-center product-slider product-slider-4">
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-1.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-2.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-3.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-4.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-5.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1>Subscribe Our Newsletter</h1>
            </div>
            <div className="col-md-6">
              <div className="form">
                <input type="email" defaultValue="Your email here" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>Recent Product</h1>
          </div>
          <div className="row align-items-center product-slider product-slider-4">
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-6.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-7.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-8.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-9.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href="true">
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="product-item">
                <div className="product-title">
                  <a href="#">Product Name</a>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="product-image">
                  <a href="product-detail.html">
                    <img src="img/product-10.jpg" alt="Product Image" />
                  </a>
                  <div className="product-action">
                    <a href="#">
                      <i className="fa fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fa fa-heart" />
                    </a>
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                  </div>
                </div>
                <div className="product-price">
                  <h3>
                    <span>$</span>99
                  </h3>
                  <a className="btn" href=''>
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review">
        <div className="container-fluid">
          <div className="row align-items-center review-slider normal-slider">
            <div className="col-md-6">
              <div className="review-slider-item">
                <div className="review-img">
                  <img src="img/review-1.jpg" alt="Image" />
                </div>
                <div className="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="review-slider-item">
                <div className="review-img">
                  <img src="img/review-2.jpg" alt="Image" />
                </div>
                <div className="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="review-slider-item">
                <div className="review-img">
                  <img src="img/review-3.jpg" alt="Image" />
                </div>
                <div className="review-text">
                  <h2>Customer Name</h2>
                  <h3>Profession</h3>
                  <div className="ratting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Get in Touch</h2>
                <div className="contact-info">
                  <p>
                    <i className="fa fa-map-marker" />
                    123 E Store, Los Angeles, USA
                  </p>
                  <p>
                    <i className="fa fa-envelope" />
                    email@example.com
                  </p>
                  <p>
                    <i className="fa fa-phone" />
                    +123-456-7890
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Follow Us</h2>
                <div className="contact-info">
                  <div className="social">
                    <a href="true">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="true">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="true">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="true">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="true">
                      <i className="fab fa-youtube" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Company Info</h2>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <h2>Purchase Info</h2>
                <ul>
                  <li>
                    <a href="#">Pyament Policy</a>
                  </li>
                  <li>
                    <a href="#">Shipping Policy</a>
                  </li>
                  <li>
                    <a href="#">Return Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row payment align-items-center">
            <div className="col-md-6">
              <div className="payment-method">
                <h2>We Accept:</h2>
                <img src="img/payment-method.png" alt="Payment Method" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="payment-security">
                <h2>Secured By:</h2>
                <img src="img/godaddy.svg" alt="Payment Security" />
                <img src="img/norton.svg" alt="Payment Security" />
                <img src="img/ssl.svg" alt="Payment Security" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6 copyright">
              <p>
                Copyright © <a href="#">Your Site Name</a>. All Rights Reserved
              </p>
            </div>
            <div className="col-md-6 template-by">
              <p>
                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="back-to-top">
        <i className="fa fa-chevron-up" />
      </a>
    </>
  );
}

export default App;
