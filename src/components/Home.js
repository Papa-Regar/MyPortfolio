import React from 'react'
import Typewriter from 'typewriter-effect';
import Lottie from 'lottie-react';
import Study from './program.json'
import Intro from './Intro';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Card from 'react-bootstrap/Card';
import profile from '../components/black.jpg'
import secondprofile from '../components/second.png'
import Projects from './Projects';
import imgReact from '../components/images/react-2.svg'
import imgNative from '../components/images/react-native-1.svg'
import imgJavascript from '../components/images/logo-javascript.svg'
import imgHtml from '../components/images/html-1.svg'
import imgCss from '../components/images/css-3.svg'
import imgBoot from '../components/images/bootstrap-4.svg'
import Hire from './hireme.json'


//npm i typewriter-effect
//

const Home = () => {
    return (
        <div class="container">
            <div>
                <p style={{ fontSize: 30 }}>hello there! I am</p>
                <div style={{ fontSize: 60 }}>
             <Typewriter
                    options={{
                        strings: ['Sufian Rahim', 'Web Developer', 'Apps Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
                <p style={{ fontSize: 24 }}>A front end web dev</p>
                <button>Download CV</button>
                <p style={{ fontSize: 18 }}>I started my front-end development journey in June 2022 when one of my family member introduced it to me.
                    I'm not from Computer Science background but I have more than 2 years of working experince in property industry.
                    First, I gave it a try on Python and developed an interest to web development since then.
                    Then, I continued the journey with learning HTML, CSS, JavaScript and into the framework which is React.
                    I explored interesting libraries like Redux Toolkit, MUI, React Router and a few more.</p>
            </div>


            <div style={{ marginTop: 50 }}>
                <p style={{ fontSize: 30 }}>Thing that I have learn</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    gap: 2,
                }}>
                    <Card style={{ width: '6rem', background: 'none' }}>
                        <Card.Img variant="top" src={imgReact} />
                        <Card.Body>
                            <p style={{ fontSize: 18 }}>React Js</p>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '8rem', background: 'none' }}>
                        <Card.Img variant="top" src={imgNative} />
                        <Card.Body>
                            <p style={{ fontSize: 18 }}>React Native</p>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '6rem', background: 'none' }}>
                        <Card.Img variant="top" src={imgJavascript} />
                        <Card.Body>
                            <p style={{ fontSize: 18 }}>JavaScript</p>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '6rem', background: 'none' }}>
                        <Card.Img variant="top" src={imgHtml} />
                        <Card.Body>
                            <p style={{ fontSize: 18 }}>HTML</p>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '6rem', background: 'none' }}>
                        <Card.Img variant="top" src={imgCss} />
                        <Card.Body>
                            <p style={{ fontSize: 18 }}>CSS</p>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '6rem', background: 'none', borderWidth: 0 }}>
                        <Card.Img variant="top" src={imgBoot} />
                        <Card.Body>
                            <Card.Title>BOOTSTRAP</Card.Title>
                        </Card.Body>
                    </Card>
                </div>

            </div>

            <div style={{ marginTop: 50 }}>
                <p style={{ fontSize: 30 }}>My Recents Projects</p>
                <div>
                    <Projects />
                </div>
            </div>

            <div style={{ marginTop: 50 }}>
                <p style={{ fontSize: 30 }}>React Me Out</p>
                <Lottie animationData={Hire} style={{height: 190}}/>
                <p style={{ fontSize: 18 }}>I'm at the moment open to new opportunities that will accelerate my growth as a developer, so if you are hiring, do drop me an email. Feel free to connect on my social media as well so we can be friends !</p>
                <button>Hi Abudi</button>
                <p style={{ fontSize: 12 }}>This project coded by Abudi</p>
            </div>
        </div>


    )
}

export default Home
