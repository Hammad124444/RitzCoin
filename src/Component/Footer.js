import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const Footer = (props) => {
    return (
        <footer id="footer">
            <div class="container-fluid">
                <div class="footer-social-links">
                    <div class="footer-social-links-list">
                        <div class="icon-list d-flex justify-content-between">
                            <div class="icon">
                                <Image src="images/youtube.svg" alt="" fluid/>
                            </div>
                            <div class="icon">
                                <Image src="images/github.svg" alt="" fluid/>
                            </div>
                            <div class="icon">
                                <Image src="images/discord.svg" alt="" fluid/>
                            </div>
                            <div class="icon">
                                <Image src="images/twitter.svg" alt="" fluid/>
                            </div>
                            <div class="icon">
                                <Image src="images/reddit.svg" alt="" fluid/>
                            </div>
                            <div class="icon">
                                <Image src="images/instagram.svg" alt="" fluid/>
                            </div>
                            <div class="icon">
                                <Image src="images/facebook.svg" alt="" fluid/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main-padding">
                    <Row>
                        <Col md={4}>
                            <div class="footer-col">
                                <div class="footer-logo">
                                    <Image src="images/footer-logo.svg" alt="" fluid/>
                                </div>
                                <div class="footer-para">
                                    <p>Ritzcoin is a decentralized exchange(DEX) automated market-making (AMM) for the Ethereum and Binance Network. What makes us stand out among other DEXs is we are invested in establishing a strong foundation with diverse farms, grants, and governance tokens.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div class="footer-col links">
                                <h6>Quick Links</h6>
                                <ul class="footer-navbar">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">FAQ's</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div class="footer-col address">
                                <h6>Contact Us</h6>
                                <ul class="footer-navbar">
                                    <li><a href="#">3762 Musgrave Street Atlanta, GA 30303</a></li>
                                    <li><a href="#">+1 (404) 957 0506 </a></li>
                                    <li><a href="#">info@email.com</a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
                <hr/>
                    <div class="main-padding">
                        <div class="copyright-services">
                            <p>Copyright ©2021 <a href="/">Ritzcoin</a>. All Rights Reserved</p>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;