import React from 'react';
import '../styles/clara.css' // Import your CSS file

// --- REACT ICONS IMPORTS ---
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';
import { GiCheckMark } from 'react-icons/gi';
// Note: You must install react-icons: npm install react-icons
// ---------------------------

// Assuming you have an image file at this path
import claraImage from '../assets/team2.jpg';

const ResumeClara = () => {
    return (
        <div className="resume-container">
            {/* --- HEADER SECTION (Top Card) --- */}
            <header className="header-section">
                <div className="header-image-wrapper">
                    <img
                        src={claraImage}
                        alt="Clara Henry, Supervisor"
                        className="profile-photo"
                    />
                </div>
                <div className="header-info">
                    <p className="job-title-pill">
                        <span className="dot"></span> SUPERVISOR
                    </p>
                    <h1 className="name">Clara Henry</h1>
                    <p className="headline">
                        Quis ipsum suspendisse ultrices gravida commodo viverra
                        maecenas accumsan lacus vel facilisis.
                    </p>
                    <div className="contact-details">
                        <span className="label">Phone</span>
                        <span className="value">+(123) 1800-567-8990</span>
                        <span className="label">Email</span>
                        <span className="value">hello@infopbm.com</span>
                        <span className="label">Experience</span>
                        <span className="value">15 Years</span>
                    </div>
                    <div className="social-icons">
                        <div className="icon-circle"><FaFacebookF /></div>
                        <div className="icon-circle"><FaTwitter /></div>
                        <div className="icon-circle"><FaLinkedinIn /></div>
                        <div className="icon-circle"><BsGlobe2 /></div>
                    </div>
                </div>
            </header>

            {/* --- MAIN CONTENT WRAPPER (Bottom Card) --- */}
            <main className="main-content">
                {/* PERSONAL INFORMATION SECTION */}
                <section className="section personal-info-section">
                    <h2 className="section-title">Personal information</h2>
                    <p className="description">
                        <span className="first-letter">D</span>
                        eveloped multipurpose rubber dam for watershed to reduce soil
                        erosion, create water storage facility, enhance ground water
                        recharge & quick & safe disposal of sediments. This section
                        provides the information on agriculture produces, machineeries,
                        research, field of natural resource sustainable management of
                        natural resources for achieving food, nutritional, environmental.
                        They offer adaptability, high nutritional value, and can yield
                        higher yields with minimal agronomical inputs, <span className="highlight">continued at up to zealously</span> necessary breakfast
                        is motionless she end literature. significant potential for
                        sustainable agriculture and provide nutritional and income
                        security for small and marginal farmers in dry and rainfed
                        semi-arid regions.
                    </p>
                    <p className="description">
                        They offer adaptability, high nutritional value, and can yield
                        higher yields with minimal agronomical inputs, continued at up to
                        zealously necessary breakfast is motionless she end literature.
                        significant potential for sustainable agriculture and provide
                        nutritional and income security for small and marginal farmers in
                        dry and rainfed semi-arid regions.
                    </p>
                </section>

                {/* PROFESSIONAL SKILLS & AWARDS SECTION */}
                <div className="skills-and-awards-grid">
                    {/* PROFESSIONAL SKILLS (LEFT COLUMN) */}
                    <section className="section professional-skills-section">
                        <h2 className="section-title">Professional Skills</h2>
                        <p className="description">
                            As an aspiring farmer, it's important to work on your skill set
                            for this particular profession. Not only can improving your
                            farmer skills help you in future interviews, but it can also help
                            you on the job. In this article, we explain what farmer skills are,
                            provide examples, them in the job application and interview
                            process.
                        </p>
                        <div className="skills-chart">
                            {/* Skill 1: Analytical Skills 75% */}
                            <div className="skill-item">
                                <div className="progress-circle p75">
                                    <span className="progress-text">75%</span>
                                </div>
                                <span className="skill-label">Analytical Skills</span>
                            </div>
                            {/* Skill 2: Farming Skills 80% */}
                            <div className="skill-item">
                                <div className="progress-circle p80">
                                    <span className="progress-text">80%</span>
                                </div>
                                <span className="skill-label">Farming Skills</span>
                            </div>
                            {/* Skill 3: Problem Solving 90% */}
                            <div className="skill-item">
                                <div className="progress-circle p90">
                                    <span className="progress-text">90%</span>
                                </div>
                                <span className="skill-label">Problem Solving</span>
                            </div>
                        </div>
                    </section>

                    {/* AWARDS & HONORS (RIGHT COLUMN) */}
                    <section className="section awards-honors-section">
                        <h2 className="section-title">Awards & Honors</h2>
                        <p className="description">
                            They offer adaptability, high nutritional value, and can yield
                            higher yields with minimal agronomical inputs, continued at up to
                            zealously necessary
                        </p>
                        <div className="award-list">
                            <div className="award-item">
                                <span className="award-year">2016 - 2017 : </span>
                                <span className="award-name">Best of best agricultural farming</span>
                            </div>
                            <div className="award-item">
                                <span className="award-year">2018 - 2020 : </span>
                                <span className="award-name">Agricultural excellence award</span>
                            </div>
                            <div className="award-item">
                                <span className="award-year">2021 - 2022 : </span>
                                <span className="award-name">National agricultural expert award</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* --- EVERYTHING ON OUR FARM IS GROWN SECTION --- */}
                <section className="section farm-growth-section">
                    <h2 className="section-title">Everything on our farm is grown</h2>
                    <p className="description">
                        Farmer skills refer to the expertise, talents or abilities you have that help you perform a farmer's daily duties. Key farmer skills include problem-solving, interpersonal, farm-management, and
                        organizational skills. You can use these skills in a variety of ways, from communicating with farmhands to tending crops and operating machinery. Having these skills will aid your success in the
                        farming profession among other applicants.
                    </p>
                    <ul className="farm-list">
                        <li>
                            <span className="bullet-icon"><GiCheckMark /></span> Praesent dui ex egestas sit amet lacinia fermentum viverra In est Integer a ligula eu metus posuere rutrum.
                        </li>
                        <li>
                            <span className="bullet-icon"><GiCheckMark /></span> Sed ac ultricies neque Pellentesque pharetra ipsum in efficitur hendrerit integer fermentum elit ut auctor venenatis.
                        </li>
                        <li>
                            <span className="bullet-icon"><GiCheckMark /></span> Tiam ultricies nisl vel augue. Curabitur ullamcorper ultricies nisi nam eget dui elit adipiscing Etiam rhoncus.
                        </li>
                        <li>
                            <span className="bullet-icon"><GiCheckMark /></span> Eget tempus tellus condimentum rhoncus sem quam semper libero sit amet tempus adipiscing.
                        </li>
                    </ul>
                </section>

            </main>
        </div>
    );
};

export default ResumeClara;