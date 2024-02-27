import React from 'react'


const Footer = () => {
    return (
        <>

            <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div class="container py-5">
                    <div class="pb-4 mb-4">
                        <div class="row g-4">
                            <div class="col-lg-3">

                                <h1 class="text mb-0" style={{ color: "orange", textDecoration: "none" }}>Fast Fitness</h1>
                                <p class="text-secondary mb-0">Best Workout</p>

                            </div>
                            <div class="col-lg-6">
                                <div class="position-relative mx-auto">

                                </div>

                            </div>
                            <div class="col-lg-3">
                                <div class="d-flex justify-content-end pt-3">
                                    <a class="btn  btn-outline- me-2 btn-md-square rounded-circle" href="/"><i class="fab fa-twitter"  style={{ color: "orange", textDecoration: "none" }}></i></a>
                                    <a class="btn btn-outline- me-2 btn-md-square rounded-circle" href="/"><i class="fab fa-facebook-f"  style={{ color: "orange", textDecoration: "none" }}></i></a>
                                    <a class="btn btn-outline- me-2 btn-md-square rounded-circle" href="/"><i class="fab fa-youtube"  style={{ color: "orange", textDecoration: "none" }}></i></a>
                                    <a class="btn btn-outline- btn-md-square rounded-circle" href="/"><i class="fab fa-linkedin-in"  style={{ color: "orange", textDecoration: "none" }}></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-item">
                                <h4 class="text-light mb-3">Why People Like us!</h4>
                                <p class="mb-4">typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                                <a href="/"  style={{ color: "orange", textDecoration: "none" }} class="btn border-secondary py-2 px-4 rounded-pill">Read More</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="d-flex flex-column text-start footer-item">
                                <h4 class="text-light mb-3">Info</h4>
                                <a class="btn-link" href="shop.php">About Us</a>
                                <a class="btn-link" href="contact.php">Contact Us</a>
                                <a class="btn-link" href="/">Privacy Policy</a>
                                <a class="btn-link" href="/">Terms & Condition</a>
                                <a class="btn-link" href="/">Return Policy</a>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="d-flex flex-column text-start footer-item">
                                <h4 class="text-light mb-3">Account</h4>
                                <a class="btn-link" href="/">My Account</a>
                                <a class="btn-link" href="/">Shop details</a>
                                <a class="btn-link" href="/">Shopping Cart</a>
                                <a class="btn-link" href="/">Wishlist</a>
                                <a class="btn-link" href="/">Order History</a>

                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-item">
                                <h4 class="text-light mb-3">Contact</h4>
                                <p>Address: 1429 Netus Rd, NY 48247</p>
                                <p>Email: dheeraj@gmail.com</p>
                                <p>Phone: +91 8602912044</p>
                                <p>Payment Accepted</p>
                                <img src="img/payment.png" class="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer
