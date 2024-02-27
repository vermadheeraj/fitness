import React from 'react';
import Footer from './Footer';

const Gallery = () => {
    return (
        <>


            {/*-- ***** Our Services End ***** --*/}


            <section className="skills">

                <h1 className="heading"><span>Fitness</span> Gallery</h1>

                <div className="box-container">

                    <div className="box">
                        <img src="./image/gym1.jpg" alt="" />
                    </div>

                    <div className="box">
                        <img src="./image/gym2.jpg" alt="" />
                        <h3>Workout</h3>
                    </div>

                    <div className="box">
                        <img src="./image/gym3.jpg" alt="" />
                        <h3>Workout</h3>
                    </div>

                    <div className="box">
                        <img src="./image/gym4.jpg" alt="" />
                        <h3>Workout</h3>
                    </div>

                    <div className="box">
                        <img src="./image/gym5.jpg" alt="" />
                        <h3>Workout</h3>
                    </div>

                    <div className="box">
                        <img src="./image/gym6.webp" alt="" />
                        <h3>Workout</h3>
                    </div>

                    <div className="box">
                        <img src="./image/gym7.jpeg" alt="" />
                        <h3>Workout</h3>
                    </div>

                    <div className="box">
                        <img src="./image/gym8.webp" alt="" />
                        <h3>Workout</h3>
                    </div>


                </div>
            </section>

            <Footer />

        </>
    )
}

export default Gallery
