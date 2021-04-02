import React from "react"
import "./Tindog.css";
import Image from "./iphone6.png";
import Dog from "./dog-img.jpg";
import Tech from "./TechCrunch.png";
import Tnw from "./tnw.png";
import Bizi from "./bizinsider.png";
import Mash from "./mashable.png";
import Lady from "./lady-img.jpg";

function Tindog() {
    return (
        <div className="top-container">

            <div className="container-fluid head-box">
                <div className="row">

                    <div className="col-lg-6">
                        <h1>Meet new and Intresting Dogs nearby.</h1>
                        <button type="button" className="btn btn-dark btn-lg  download-button"><i class="fab fa-apple"></i> Download</button>
                        <button type="button" className="btn btn-outline-light btn-lg download-button" ><i class="fab fa-google-play"></i> Download</button>
                    </div>

                    <div className="col-lg-6">
                        <img className="title-image" src={Image} alt="iphone image"></img>
                    </div>
                </div>
            </div>


            <div className = "feature-head">
                <section id="features">

                    <div className="row">

                        <div className="feature-box col-lg-4">
                            <i class="icon fas fa-check-circle fa-4x"></i>
                            <h3>Easy to use.</h3>
                            <p>So easy to use, even your dog could do it.</p>
                        </div>

                        <div className="feature-box col-lg-4">
                            <i class="icon fas fa-bullseye fa-4x"></i>
                            <h3>Elite Clientele</h3>
                            <p>We have all the dogs, the greatest dogs.</p>
                        </div>

                        <div className="feature-box col-lg-4">
                            <i class="icon fas fa-heart fa-4x"></i>
                            <h3>Guaranteed to work.</h3>
                            <p>Find the love of your dog's life or your money back.</p>
                        </div>

                    </div>

                </section>
            </div>

            <section id="testimonials">
                <div id="testinomial-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        <div class="carousel-item active">

                            <img class="d-block w-100" ></img>
                            <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
                            <img className="testimonial-image" src={Dog} alt="dog-profile"></img>
                            <em>Pebbles, New York</em>

                        </div>

                        <div class="carousel-item">

                            <img class="d-block w-100" ></img>
                            <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
                            <img class="testimonial-image" src={Lady} alt="lady-profile"></img>
                            <em>Beverly, Illinois</em>

                        </div>

                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#testinomial-carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#testinomial-carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <div className = "press-head">
                <section id="press">
                    <img className="press-logo" src={Tech} alt="tc-logo"></img>
                    <img className="press-logo" src={Tnw} alt="tnw-logo"></img>
                    <img className="press-logo" src={Bizi} alt="biz-insider-logo"></img>
                    <img className="press-logo" src={Mash} alt="mashable-logo"></img>

                </section>
            </div>

            <div className = "pricing-head">
                <section id="pricing">

                    <h2>A Plan for Every Dog's Needs</h2>
                    <p>Simple and affordable price plans for your and your dog.</p>

                    <div className="row">

                        <div className="pricing-column col-lg-4 col-md-6">
                            <div className="card">

                                <div className="card-header">
                                    <h3>Chihuahua</h3>
                                </div>
                                <div className="card-body d-grid downloadbutton">
                                    <h2>Free</h2>
                                    <p>5 Matches Per Day</p>
                                    <p>10 Messages Per Day</p>
                                    <p>Unlimited App Usage</p>
                                    <button type="button" className="btn btn-lg btn-outline-dark ">Sign Up</button>
                                </div>

                            </div>
                        </div>
                        <div className="pricing-column col-lg-4 col-md-6">
                            <div className="card">

                                <div className="card-header">
                                    <h3>Labrador</h3>
                                </div>
                                <div className="card-body d-grid downloadbutton">
                                    <h2>21k/ mo</h2>
                                    <p>Unlimited Matches</p>
                                    <p>Unlimited Messages</p>
                                    <p>Unlimited App Usage</p>
                                    <button type="button" className="btn btn-lg btn-dark">Sign Up</button>
                                </div>

                            </div>
                        </div>

                        <div className="pricing-column col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Mastiff</h3>
                                </div>
                                <div className="card-body d-grid downloadbutton">
                                    <h2> 23k / mo</h2>
                                    <p>Pirority Listing</p>
                                    <p>Unlimited Matches</p>
                                    <p>Unlimited Messages</p>
                                    <p>Unlimited App Usage</p>
                                    <button type="button" className="btn btn-lg btn-dark">Sign Up</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </div>


            <div className ="cta-head">
                <section id="cta">

                    <h3 className="cta-banner">Find the True Love of Your Dog's Life Today.</h3>
                    <button type="button" className="btn btn-dark btn-lg  download-buttons"><i class="fab fa-apple"></i> Download</button>
                    <button type="button" className="btn btn-light btn-lg download-buttons"><i class="fab fa-google-play"></i> Download</button>

                </section>
            </div>



            <footer id="footer">
                <i class="footer-icon fab fa-facebook-f"></i>
                <i class="footer-icon fab fa-twitter"></i>
                <i class="footer-icon fab fa-instagram"></i>
                <i class="footer-icon fas fa-envelope"></i>
                <p>© Copyright 2021 TinDog</p>

            </footer>

        </div>

    )
}


export default Tindog;