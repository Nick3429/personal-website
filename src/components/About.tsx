import stanleyPark from '../assets/images/StanleyPark.jpg';

const About = ()  => {
    return (
        <section id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-container">
                <div className="about-text">
                    <p>I am currently a technology consultant at Ernst & Young in the New York City Metropolitan Area, where I work within the Artificial Intelligence and Data Practice (AI&D). My journey in technology has been driven by curiosity and a commitment to continuous learning.</p>
                    <br />
                    <p>I excel at quickly mastering new concepts and technologies to design and deliver effective AI and data solutions for complex business challenges. Whether working independently or as part of a team, I bring dedication, creativity, and a process-oriented mindset to every project.</p>
                    <br />
                    <p>In my free time, you'll find me working out, watching sports, or listening to music.</p>
                </div>
                <div className="about-image">
                    <img src={stanleyPark} alt="About Me" />
                </div>
            </div>
        </section>
    );
};

export default About;