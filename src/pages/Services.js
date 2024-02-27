import React from 'react';
import Footer from './Footer';

const Services = () => {
  return (
    <>
    
      {/*-- ***** Our Services End ***** --*/}
      <section className="service position-relative overflow-hidden"  style={{ paddingTop: "50px" }}>
        <div className="container position-relative">

          <div className="row">
            <div className="col-12"><small className="fs-7 d-block">Working Process</small></div>
            <div className="col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block align-items-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-sm-center ">
              <h2 className="fs-2 text-black mb-0">Our Featured Service<br /> that We Provide</h2>
              <a href="/" className="btn btn-warning btn-hover-secondery section-btn">All Services</a>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center step-row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                  <img src="./image/icon2.png" alt="" className="img-fluid" style={{ height: "100px", width: "100px", objectFit: "scale-down" }} />
                  </div>
                  <h5 className="mb-0 fw-500">Service</h5>
                  <h3 className="fs-4">Basic Fitness</h3>
                  <p className="fs-7 mb-0 fw-500">Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                  <img src="./image/icon2.png" alt="" className="img-fluid" style={{ height: "100px", width: "100px", objectFit: "scale-down" }} />
                  </div>
                  <h5 className="mb-0 fw-500">Step 2</h5>
                  <h3 className="fs-4">New Gym Training</h3>
                  <p className="fs-7 mb-0 fw-500">If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.</p>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                  <img src="./image/icon2.png" alt="" className="img-fluid" style={{ height: "100px", width: "100px", objectFit: "scale-down" }} />
                  </div>
                  <h5 className="mb-0 fw-500">Step 2</h5>
                  <h3 className="fs-4">Advanced Muscle Course</h3>
                  <p className="fs-7 mb-0 fw-500">You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website.</p>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                  <img src="./image/icon2.png" alt="" className="img-fluid" style={{ height: "100px", width: "100px", objectFit: "scale-down" }} />
                  </div>
                  <h5 className="mb-0 fw-500">Step 2</h5>
                  <h3 className="fs-4">Body Building Course</h3>
                  <p className="fs-7 mb-0 fw-500">Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.</p>
                </div>
              </div>
            </div>


            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                  <img src="./image/icon2.png" alt="" className="img-fluid" style={{ height: "100px", width: "100px", objectFit: "scale-down" }} />
                  </div>
                  <h5 className="mb-0 fw-500">Step 3</h5>
                  <h3 className="fs-4">Yoga Training</h3>
                  <p className="fs-7 mb-0 fw-500">This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Services
