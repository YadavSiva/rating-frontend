import paramount from './../../src/assets/resss.jpg'
import tajdubai from './../../src/assets/edu.jpg'
import tower from './../../src/assets/tower.jpg'
import plumber from './../../src/assets/plumber.jpg'
import car from './../../src/assets/car_rental.jpg'

import "./services.css";
import { GeoAlt, GeoAltFill } from 'react-bootstrap-icons'

export function ServiceImage() {
    return (
        <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="menu-section-heading">Popular Services</h3>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="menu-item-card mb-4">
                            <img src={paramount} className="card-img" alt="Hotel" />
                            <div className="card-content">
                                <h4 className="menu-card-title">The Modern Restaurant</h4>
                                <h5 style={{fontSize:'15px',color:' #b8b1b1'}}><GeoAltFill></GeoAltFill> Near MG Road,Hyderbad</h5>
                                <h5 style={{fontSize:'15px',color:' red'}}>Always Open</h5>
                                <a href="/services?servicename=The Modern Restaurant" className="menu-item-link">View Reviews</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="menu-item-card mb-4">
                            <img src={tower} className="card-img" alt="Hotel" />
                            <div className="card-content">
                                <h4 className="menu-card-title">Comfort Inn Hotel</h4>
                                <h5 style={{fontSize:'15px',color:' #b8b1b1'}}><GeoAltFill></GeoAltFill> Near KPHP Road,Hyderbad</h5>
                                <h5 style={{fontSize:'15px',color:' red'}}>Availble 24 Hours </h5>
                                <a href="/services?servicename=Comfort Inn Hotel" className="menu-item-link">View Reviews</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="menu-item-card mb-4">
                            <img src={tower} className="card-img" alt="Hotel" />
                            <div className="card-content">
                                <h4 className="menu-card-title">Destination Travel Agency</h4>
                                <h5 style={{fontSize:'15px',color:' #b8b1b1'}}><GeoAltFill></GeoAltFill> Near Ameerpet,Hyderbad</h5>
                                <h5 style={{fontSize:'15px',color:' red'}}>Always Open</h5>
                                <a href="/services?servicename=Destination Travel Agency" className="menu-item-link">View Reviews</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="menu-item-card mb-4">
                            <img src={tajdubai} className="card-img" alt="Hotel" />
                            <div className="card-content">
                                <h4 className="menu-card-title">Vidya Education</h4>
                                <h5 style={{fontSize:'15px',color:' #b8b1b1'}}><GeoAltFill></GeoAltFill> Near MG Road,Hyderbad</h5>
                                <h5 style={{fontSize:'15px',color:' red'}}>Always Open</h5>
                                <a href="/services?servicename=Vidya Education" className="menu-item-link">View Reviews</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="menu-item-card mb-4">
                            <img src={plumber} className="card-img" alt="Hotel" />
                            <div className="card-content">
                                <h4 className="menu-card-title">plumber</h4>
                                <h5 style={{fontSize:'15px',color:' #b8b1b1'}}><GeoAltFill></GeoAltFill> Near MG Road,Hyderbad</h5>
                                <h5 style={{fontSize:'15px',color:' red'}}>Always Open</h5>
                                <a href="/services?servicename=plumber" className="menu-item-link">View Reviews</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="menu-item-card mb-4">
                            <img src={car} className="card-img" alt="Hotel" />
                            <div className="card-content">
                                <h4 className="menu-card-title">car rental</h4>
                                <h5 style={{fontSize:'15px',color:' #b8b1b1'}}><GeoAltFill></GeoAltFill> Near MG Road,Hyderbad</h5>
                                <h5 style={{fontSize:'15px',color:' red'}}>Always Open</h5>
                                <a href="/services?servicename=car rental" className="menu-item-link">View Reviews</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
