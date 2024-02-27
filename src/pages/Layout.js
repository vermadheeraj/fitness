import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <div style={{  background: "linear-gradient(to right, #f7c045, #cb8c03)"}}>
        <nav className="navbar navbar-expand-lg navbar-light " style={{ padding: "12px 20px" }} >
          <div className="container-fluid" style={{ gap: "80px" }} >
            <a className="navbar-brand" href="/" style={{ fontSize: "25px", fontWeight:"700" }} >Fast-Fitness</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/blogs">Price</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/timing">Timeing</Link></li>
                    <li><a className="dropdown-item" href="/">Offers</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/contact" tabindex="-1" aria-disabled="true">Contact</Link>
                </li>
              </ul>
              {/*
              <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
  </form> */}
              <div class="header__top__right__social">
                <a href="/"><i class="fa fa-facebook"></i></a>
                <a href="/"><i class="fa fa-twitter"></i></a>
                <a href="/"><i class="fa fa-linkedin"></i></a>
                <a href="/"><i class="fa fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    
    </>
  )
};

export default Layout;