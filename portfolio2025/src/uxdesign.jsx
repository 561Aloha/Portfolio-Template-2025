import React, {useState} from "react";
import Carousel from './Carousel';
import replace from './assets/replacepic.png'
import slide from './assets/slide.png';
import lightening from './assets/lightning.svg';
import clock from './assets/alarm.svg';
import star from './assets/star.svg';
import smile from './assets/smile.svg';
import rightArrow from './assets/arrow.svg';
import leftArrow from './assets/arrow.svg';
import './css/uxdesign.css'

export const SecondaryResearch = ({ image, title, subheading, listItems, arrowdown, arrowup }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className='secondary-research-container' onClick={toggleOpen}>
            <img
                src={image}
                className={`research-img ${isOpen ? 'open' : 'closed'}`}
                alt={`${title} Image`}
            />
            <div className='research-text'>
                <h2>{title}</h2>
                {isOpen ? (
                    <>
                        <h3>Key Insights</h3>
                        <ul>
                            {listItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                <p>{subheading}</p>
                )}
            <div>
                {isOpen? (
                      <button> Read the full UX Design Report</button>
                    ):(
                        <> </>
                    )}
            </div>
            </div>
            
            <img
                src={isOpen ? leftArrow : rightArrow}
                alt="Toggle"
                className="toggle-image"
                style={{ width: '48px', height: '48px', transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
            />

        </div>

    );
};


const UXDesign = () => {
    const starbucksData = {
        image: './src/assets/replacepic.png',
        title: 'Company One',
        subheading: 'I chose this company because of they [...what they are doing right or similarities] and want to understand better their [..]',
        listItems: [
            'point 1',
            'point 2',
            'point 3'
        ]
    };
    const otherCompanyData = {
        image: './src/assets/replacepic.png',
        title: 'Other Company',
        subheading: 'Subheading for other company',
        listItems: [
            'Key insight 1 for other company.',
            'Key insight 2 for other company.',
            'Key insight 3 for other company.'
        ]
    };
    return (
        <div>
            <div className="main-container">
                <header>
                    <h1>Project Name</h1>
                    <h2>Replace with your project type (Mobile or Desktop Application)</h2>
                    <h4>This application is designed for a [type of business] that aims to [main goal of the project]. This project was a solo/group effort completed during [course or program].</h4>
                </header>
                <div className="carousel-parent">
                    <h2>The Final Mockups</h2>
                    <Carousel />
                </div>

                <div className='introduction'>
                    <div className='intro-box'>
                        <h2>Introduction</h2>
                        <p>Replace this text with a brief introduction of the business or context of the project.</p>
                    </div>
                    <div className='intro-box2'>
                        <h2>The Challenge</h2>
                        <p>Describe the main challenges that prompted the need for this design.</p>
                    </div>
                    <div className='intro-box3'>
                        <h2>The Goal</h2>
                        <p>Summarize the main goals of the redesign or development of the project.</p>
                    </div>
                </div>

                <div className='painpoints'>
                    <h2>Pain Points</h2>
                    <div className='introduction'>
                        <div className='painpoints-li'>
                            <h3>Pain Point 1</h3>
                            <p>Describe a specific user pain point.</p>
                        </div>
                        <div className='painpoints-li'>
                            <h3>Pain Point 2</h3>
                            <p>Describe another specific user pain point.</p>
                        </div>
                        <div className='painpoints-li'>
                            <h3>Pain Point 3</h3>
                            <p>Describe yet another specific user pain point.</p>
                        </div>
                    </div>
                </div>

                <h2>Secondary Research</h2>
                <SecondaryResearch {...starbucksData} />
                <SecondaryResearch {...otherCompanyData} />
                {/* <Persona {...personaData}/> */}

                <div className='image-container-solution'>
                    <h2>Coming up with a Solution</h2>
                    <img src={slide} alt="Solution overview" />
                    <img src={slide} alt="Detailed solution view" />
                </div>

                <div className='three-boxes'>
                    <h2>My Initial Designs: Usability Studies</h2>
                    <h3 className="three-boxesh3">This was the first working prototype, which I tested with participants.</h3>
                    <div className='usability'>
                        <div className='header-content'>
                            <h3>1</h3>
                            <p>Detail feedback received from testing this prototype.</p>
                        </div>
                        <div className='header-content'>
                            <h3>2</h3>
                            <p>Explain a specific issue users encountered during usability tests.</p>
                        </div>
                        <div className='header-content'>
                            <h3>3</h3>
                            <p>Describe confusion or problems users reported with the interface or experience.</p>
                        </div>
                    </div>
                </div>

                <div className='review-container'>
                    <div className="impact-container">
                    <img src={smile} alt="Lightening" class="impact-image"/>
                        <h2>Impact</h2>
                        <p>Describe the positive changes following the project’s implementation.</p>
                    </div>
                    <div className="impact-container">
                        <img src={star}/>
                        <h2>Key Learnings</h2>
                        <p>Summarize key insights gained during this project.</p>
                    </div>
                    <div className="impact-container">
                        <img src={clock} />
                        <h2>What I Would Do Differently</h2>
                        <p>Reflect on what could be improved or what you would change in future projects.</p>
                    </div>
                    <div className="impact-container">
                        <img src={lightening} />
                        <h2>Tools Used</h2>
                        <ul>
                            <li>Tool 1</li>
                            <li>Tool 2</li>
                            <li>Tool 3</li>
                            <li>Tool 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UXDesign;
