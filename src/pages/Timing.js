import React from 'react';
import Footer from './Footer';

const Timing = () => {
  return (
    <>
        

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
 

export default Timing
