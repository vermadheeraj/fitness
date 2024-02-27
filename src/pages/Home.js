import React, { useEffect } from 'react'
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" })
  })
  return (
    <>

      {/* slider section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./image/banner8.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./image/banner2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./image/banner7.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./image/banner1.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <h1 className="heading"><span>Best</span> Offers</h1>


      <div className="scroll-container">
        <img src="./image/image6.png" alt="" style={{ height: "300px", width: "200px", objectFit: "cover" }} />
        <img src="./image/image8.png" alt="" style={{ height: "300px", width: "200px", objectFit: "cover" }} />
        <img src="./image/image9.png" alt="" style={{ height: "300px", width: "200px", objectFit: "cover" }} />
        <img src="./image/image10.png" alt="" style={{ height: "300px", width: "200px", objectFit: "cover" }} />
        <img src="./image/image11.png" alt="" style={{ height: "300px", width: "200px", objectFit: "cover" }} />
        <img src="./image/image7.png" alt="" style={{ height: "300px", width: "200px", objectFit: "cover" }} />
        <img src="./image/image8.png" alt="" style={{ height: "300px", width: "200px", objectFit: "cover" }} />
        <img src="./image/image6.png" alt="" style={{ height: "300px", width: "200px", objectFit: "cover" }} />



      </div>

      {/* ------- icons gyming section -------*/}

      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
              <h2 className="line-bottom text-center mb-4">Browse Top Category</h2>
            </div>
          </div>
          <br />
          <div className="row align-items-stretch">
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
              <a href="/" className="category d-flex align-items-start" style={{ textDecoration: "none" }} >
                <div>
                  <img src="./image/color-icon1.png" className="d-block" alt="..." style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                </div>
                <div className='box_color'>
                  <h3>Treadmill</h3>
                  <span>Exercise</span>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <img src="./image/color-icon2.png" className="d-block" alt="..." style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                </div>
                <div className='box_color' >
                  <h3>Cycling</h3>
                  <span>Exercise</span>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <img src="./image/color-icon3.png" className="d-block" alt="..." style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                </div>
                <div className='box_color' >
                  <h3>Cycling</h3>
                  <span>Exercise</span>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <img src="./image/color-icon4.png" className="d-block" alt="..." style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                </div>
                <div className='box_color' >
                  <h3>Seated</h3>
                  <span>Exercise</span>
                </div>
              </a>
            </div>


            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <img src="./image/color-icon5.png" className="d-block" alt="..." style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                </div>
                <div className='box_color' >
                  <h3>Dumbbell</h3>
                  <span>Exercise</span>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <img src="./image/color-icon6.png" className="d-block" alt="..." style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                </div>
                <div className='box_color' >
                  <h3>Pushups</h3>
                  <span>Exercise</span>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <img src="./image/color-icon7.png" className="d-block" alt="..." style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                </div>
                <div className='box_color' >
                  <h3>Benchpress</h3>
                  <span>Exercise</span>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
              <a href="/" className="category d-flex align-items-start h-100">
                <div>
                  <img src="./image/color-icon8.png" className="d-block" alt="..." style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                </div>
                <div className='box_color' >
                  <h3>Berbell</h3>
                  <span>Exercise</span>
                </div>
              </a>
            </div>


          </div>


        </div>
      </div>

      <br />
      <div className="services-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 mb-5 mb-lg-0">

              <div className="section-title mb-3" data-aos="fade-up" data-aos-delay="0">
                <h2 className="line-bottom mb-4">Become an Instructor</h2>
              </div>

              <p data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>

              <ul className="ul-check list-unstyled mb-5 primary" data-aos="fade-up" data-aos-delay="200">
                <li>Behind the word Mountains.</li>
                <li>Far far away Mountains.</li>
                <li>Large language Ocean.</li>
              </ul>

              <p data-aos="fade-up" data-aos-delay="300"><a href="/" className="btn btn-primary">Get Started</a></p>

            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="0">
              <figure className="img-wrap-2">
                <img src="./image/image3.png" alt="" className="img-fluid" style={{ height: "600px", width: "500px", objectFit: "scale-down" }} />
                <div className="dotted"></div>
              </figure>

            </div>
          </div>
        </div>
      </div>


      {/*-- Pricing section Start--------*/}

      <br />
      <section className="pricing position-relative overflow-hidden" style={{ paddingTop: "50px" }}>
        <div className="container position-relative">
          <div className="row justify-content-center" data-aos="fade-in">
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
              <div className="card position-relative shadow border-0 h-100" data-aos="fade-right">
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
              <div className="card position-relative shadow border-0 h-100" data-aos="fade-up">
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
              <div className="card position-relative shadow border-0 h-100" data-aos="fade-left">
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






      {/*-- ***** Our Services End ***** --*/}
      <section className="service position-relative overflow-hidden" style={{ paddingTop: "50px" }}>
        <div className="container position-relative">

          <div className="row">
            <div className="col-12"><small className="fs-7 d-block">Working Process</small></div>
            <div className="col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block align-items-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-sm-center ">
              <h2 className="fs-2 text-black mb-0">Our Featured Service<br /> that We Provide</h2>
              <a href="/" className="btn btn-warning btn-hover-secondery section-btn">All Services</a>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center step-row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center" data-aos="fade-right">
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
              <div className="card border-0 shadow" data-aos="fade-up">
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
              <div className="card border-0 shadow" data-aos="fade-left">
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


      {/*-- *****Experience Section ***** --*/}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid rounded" alt="" src="./image/image2.png" />
            </div>
            <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="display-1 text-primary mb-0" style={{ color: "orange", fontWeight: "700" }} >25</h1>
              <p className="text-primary mb-4" style={{ color: "orange" }}>Year of Experience</p>
              <h1 className="display-5 mb-4" style={{ fontWeight: "700" }}>We Make Your Home Like A Garden</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <a className="btn btn-primary py-3 px-4" style={{ background: "orange", border: "none", padding: "8px" }} href="/">Explore More</a>
            </div>
            <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-12" data-aos="fade-left">
                  <div className="border-start ps-4">
                    <i className="fa fa-award fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Award Winning</h4>
                    <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12" data-aos="fade-right">
                  <div className="border-start ps-4">
                    <i className="fa fa-users fa-3x text-primary mb-3"></i>
                    <h4 className="mb-3">Dedicated Team</h4>
                    <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/*------ Question section --------*/}

      <section className="faq position-relative overflow-hidden">
        <div className="container position-relative">
          <div className="row justify-content-center" style={{ paddingTop: "50px" }}>
            <div className="col-12 text-center">
              <small className="fs-7 d-block">Frequently Asked Questions</small>
              <h2 className="fs-3 text-black mb-0">Want to ask something from us?</h2>
            </div>
          </div>
          <div className="accordion-block" style={{ paddingTop: "100px" }}>
            <div className="accordion row" id="accordionPanelsStayOpenExample">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button text-black fs-7" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Individual training
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      A personal trainer is an individual certified to have a varying degree of knowledge of general fitness involved in exercise prescription and instruction. They motivate clients by setting goals and providing feedback and accountability to clients.

                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed text-black fs-7" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Qualified trainers ?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      We're sure that one time or another, you've been fascinated at how a trainer facilitates class and engages learners. Youâ€™ve also most likely observed some of the best qualities of a good trainer and already somewhat have an idea of what attributes make a trainer great at their work.                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed text-black fs-7" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Lorem Ipsum generators on the Internet tend ?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="panelsStayOpen-headingfour">
                    <button className="accordion-button collapsed text-black fs-7" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false" aria-controls="panelsStayOpen-collapsefour">
                      Free Wi-Fi Zone
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapsefour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfour">
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="panelsStayOpen-headingfive">
                    <button className="accordion-button collapsed text-black fs-7" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsefive" aria-expanded="false" aria-controls="panelsStayOpen-collapsefive">
                      Hightech gym?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapsefive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingfour">
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      Monitoring performance during the one-hour workout, from wearable devices to projection screens, which help in getting solidity from long slogans on cardio devices, make use of modern technology to enhance the experience of today's gym exercise.

                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="panelsStayOpen-headingsix">
                    <button className="accordion-button collapsed text-black fs-7" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapsesix" aria-expanded="false" aria-controls="panelsStayOpen-collapsesix">
                      Many desktop publishing packages ?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapsesix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingsix">
                    <div className="accordion-body fs-7 fw-500 pt-0">
                      Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>








      {/*-- ***** Our classNamees End ***** --*/}

      <section className="section" id="schedule">
        <div className="container">
          <div className="row-box">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading dark-bg">
                <h2>classNamees <em>Schedule</em></h2>
                <img src="assets/images/line-dec.png" alt="" />
                <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
              </div>
            </div>
          </div>
          <div className="row-box">
            <div className="col-lg-12">
              <div className="filters">
                <ul className="schedule-filter">
                  <li className="active" data-tsfilter="monday">Monday</li>
                  <li data-tsfilter="tuesday">Tuesday</li>
                  <li data-tsfilter="wednesday">Wednesday</li>
                  <li data-tsfilter="thursday">Thursday</li>
                  <li data-tsfilter="friday">Friday</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1">
              <div className="schedule-table filtering">
                <table>
                  <tbody>
                    <tr>
                      <td className="day-time">Monday className</td>
                      <td className="monday ts-item show" data-tsmeta="monday">10:00AM - 11:30AM</td>
                      <td className="tuesday ts-item" data-tsmeta="tuesday">2:00PM - 3:30PM</td>
                      <td>William G. Stewart</td>
                    </tr>
                    <tr>
                      <td className="day-time">Tuesday Training</td>
                      <td className="friday ts-item" data-tsmeta="friday">10:00AM - 11:30AM</td>
                      <td className="thursday friday ts-item" data-tsmeta="thursday">2:00PM - 3:30PM</td>
                      <td>Paul D. Newman</td>
                    </tr>
                    <tr>
                      <td classNameName="day-time">Wednesday</td>
                      <td classNameName="tuesday ts-item" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                      <td classNameName="monday ts-item show" data-tsmeta="monday">2:00PM - 3:30PM</td>
                      <td>Boyd C. Harris</td>
                    </tr>
                    <tr>
                      <td classNameName="day-time">Thursday Training classNameName</td>
                      <td classNameName="wednesday ts-item" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                      <td classNameName="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                      <td>Hector T. Daigle</td>
                    </tr>
                    <tr>
                      <td classNameName="day-time">Friday Training</td>
                      <td classNameName="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                      <td classNameName="wednesday ts-item" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                      <td>Bret D. Bowers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )

}

export default Home
