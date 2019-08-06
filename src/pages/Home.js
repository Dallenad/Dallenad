import React from 'react';
//import { Link } from 'react-router-dom'
import '../App.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Games from '../components/Games';
//import GoogleMap from '../components/GoogleMap';

import behance from '../images/behance-logo.svg';
import linkedin from '../images/linkedin-logo.svg';
import youtube from '../images/youtube-play-button.svg';

export default class Home extends React.Component {
  constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
  }
  
  render() {
    //const { blocks } = this.state;
    return (
      <div className="App">
        <Header nav={[
          { item: "Home", href: "/" },
          { item: "Banners", href: "/banners" },
          //{ item: "Résumé", href: "https://docs.google.com/document/d/1r1oTQjQb7NBBOc8r8RvQ6wUvrzwFoc5aBiErATSVdlk/edit?usp=sharing&authkey=CMyD5bIP" }
        ]} />
        <Hero />
        <Intro />
        <Games buttons={[
          {
            label: "Tenis Combat (Trailer)",
            href: "https://www.youtube.com/watch?v=dQwSkGPulm4",
            backgroundImage: "https://scontent.fsjo1-1.fna.fbcdn.net/v/t31.0-8/11045482_10206130459367808_6116952346692362417_o.jpg?_nc_cat=108&_nc_ht=scontent.fsjo1-1.fna&oh=d91ab80b9c919b6e3ea39fa4a2fabfc1&oe=5D6406DC",
            description: "Fighting game created to advertise a contest presented by Falabella. Coded in AS3. I was promoted to Senior right after delivering this game, which later was featured on the company's yearbook."
          },
          {
            label: "Running Man (ActionScript)",
            href: "http://dallenad.com/games/running_man/",
            backgroundImage: "http://dallenad.com/images/runningMan.png",
            description: "One of the various rich-media advergames I made at Prodigious. The older ones were made in AS3, while the newer ones were coded in JavaScript or one of its frameworks."
          },
          {
            label: "Old Flash games gallery",
            href: "http://dallenad.deviantart.com/gallery/51109705/Games",
            backgroundImage: "http://dallenad.com/images/tableTennis.jpg",
            description: "My first profitable games were indie. Distributed along Flash game websites at the time. Gameplay coded in AS3, artwork made on Flash, music composed on FL Studio."
          },
          {
            label: "Published tutorials",
            href: "http://tutsplus.com/authors/daniel-ramirez",
            backgroundImage: "https://cdn.tutsplus.com/active/uploads/legacy/tuts/307_3dRacing/tutorial/final.jpg",
            description: "After publishing a tutorial for a racing game, I was encouraged to write another one, so later I wrote a couple of tutorials explaining homing missiles in a 2D game."
          },
          {
            label: "Ice Elate (Android)",
            href: "http://dallenad.com/games/IceElate.apk",
            backgroundImage: "http://dallenad.com/images/iceElate.jpg",
            description: "Work in progress. An experiment for motion controls in an attempt to have a minimalistic HUD on the phone screen. Made on Unity, coded in C#, music composed on FL Studio. Tilt the phone to make the cube jump."
          }
        ]} />
        {
        //<GoogleMap/>
        }
        <Footer nav={[
          { item: "Behance", icon: behance, href: "https://www.behance.net/dallenad" },
          { item: "LinkedIn", icon: linkedin, href: "https://www.linkedin.com/in/dallenad" },
          { item: "YouTube", icon: youtube, href: "https://www.youtube.com/watch?v=qSIivIgoC-Q&list=PLv1FL-R7vvmFXOgVRUnI7TIihPXG2GKL5" }
        ]} />
      </div>
    );
  }
}