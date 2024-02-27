import React from 'react';
import Footer from './Footer';

const Blogs = () => {
  return (
    <>
    
      {/*-- Pricing section Start--------*/}

      <br />
      <section className="pricing position-relative overflow-hidden" style={{ paddingTop: "50px" }}>
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <small className="fs-7 d-block">Pricing Plan</small>
              <h1 className="fs-3  text-black mb-0 position-relative">
                What’s About Our Pricing <br /> Subscription</h1>
            </div>
          </div>
          <div className="row plans">
            <div className="col-12 text-center" style={{ position: "absolute", top: "-66px", left: "10px" }} >
              <img src="./image/dot-shape.png" alt="" className="img-fluid" style={{ height: "300px", width: "300px", objectFit: "scale-down" }} />
            </div>
            <div className="save d-inline-block position-relative text-warning fw-500 fs-9 text-center">Save Up To 58%</div>
          </div>
          <div className="row justify-content-center price-plan">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card position-relative shadow border-0 h-100">
                <div className="card-body pb-4">
                  <small className="fs-7 d-block text-warning text-center">Personal</small>
                  <h2 className="mb-4 text-center position-relative"><sub className="fs-2 text-black">800 /-</sub><sup className="fs-6 position-absolute">Rs</sup></h2>
                  <small className="fs-7 d-block text-center">Per Month</small>
                  <p className="fs-7 text-center fw-500">For individuals looking for a simple CRM solution</p>
                  <ul className="list-unstyled mb-0 pl-0">
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Basic CRM features</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Unlimited Personal Pipelines</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Email Power Tools</span>
                    </li>
                  </ul>
                </div>
                <div className="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                  <a href="/" className="btn btn-warning btn-hover-secondery text-capitalize">Set Started</a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card position-relative shadow border-0 h-100">
                <div className="position-absolute badge bg-warning d-inline-block mx-auto">
                  Most Popular
                </div>
                <div className="card-body pb-4">
                  <small className="fs-7 d-block text-warning text-center">Professional</small>
                  <h2 className="mb-4 text-center position-relative"><sub className="fs-2 text-black">6000 /-</sub><sup className="fs-6 position-absolute">Rs</sup></h2>
                  <small className="fs-7 d-block text-center">12 Month</small>
                  <p className="fs-7 text-center fw-500">For individuals looking for a simple CRM solution</p>
                  <ul className="list-unstyled mb-0 pl-0">
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Basic CRM features</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Unlimited Personal Pipelines</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Email Power Tools</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Unlimited Shared Pipelines</span>
                    </li>
                  </ul>
                </div>
                <div className="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                  <a href="/" className="btn btn-warning btn-hover-secondery text-capitalize">Set Started</a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="card position-relative shadow border-0 h-100">
                <div className="card-body pb-4">
                  <small className="fs-7 d-block text-warning text-center">Enterprise</small>
                  <h2 className="mb-4 text-center position-relative"><sub className="fs-2 text-black">4000 /-</sub><sup className="fs-6 position-absolute">Rs</sup></h2>
                  <small className="fs-7 d-block text-center">6 Month</small>
                  <p className="fs-7 text-center fw-500">For individuals looking for a simple CRM solution</p>
                  <ul className="list-unstyled mb-0 pl-0">
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Basic CRM features</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Unlimited Personal Pipelines</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Email Power Tools</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black">Unlimited Shared Pipelines</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="ti ti-circle-check fs-4 pe-2"></i>
                      <span className="fs-7 text-black"> Full API Access</span>
                    </li>
                  </ul>
                </div>
                <div className="card-action text-center pb-xxl-5 pb-xl-5 pb-lg-5 pb-md-4 pb-sm-4 pb-4">
                  <a href="/" className="btn btn-warning btn-hover-secondery text-capitalize">Set Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*------Pricing section End--------*/}
      <Footer />
    </>
  )
}

export default Blogs
