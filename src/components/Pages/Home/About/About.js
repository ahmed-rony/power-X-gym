import React from 'react';
import './About.css';

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <img className="about-img img-fluid" src={require("../../../../Image_Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg")}  alt="" />
                    </div>
                    <div className="col-md-5 offset-md-1 ">
                        <div className='f-os  about-content'>
                            <h2 className='about'>ABOUT US</h2>
                            <h3 className='about-title brand-c'>WE ARE HERE TO DREAM!</h3>
                            <h3 className='about-title'>OUR TEAM IS HERE TO SERVE YOU</h3>
                            <p className="about-p f-ro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi inventore earum eaque delectus voluptas! Architecto commodi fugiat ratione, perspiciatis sapiente, impedit, ipsa atque debitis suscipit delectus enim! Earum quam laboriosam itaque totam temporibus corrupti ipsa sapiente laudantium mollitia voluptatum.</p>
                            {/* <div className="half-shape"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;