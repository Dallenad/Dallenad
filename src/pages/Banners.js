import React from 'react';
import '../App.css';
import Header from '../components/Header';
import BannerCollection from '../components/BannerCollection';
import Footer from '../components/Footer';

import behance from '../images/behance-logo.svg';
import linkedin from '../images/linkedin-logo.svg';
import youtube from '../images/youtube-play-button.svg';

export default class Banners extends React.Component {
  constructor(props) {
		super(props);
		// Define your state object here
		this.state = {data: null};
  }
  
  componentDidMount() {
    
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
        <BannerCollection banners={[
          { href: "http://dallenad.com/banners/ArtMatch/artmatch_728x90.html", width: 728, height: 90 },
          { href: "http://dallenad.com/banners/Xiidra_First_and_Only_728x90/Xiidra_First_and_Only_728x90.html", width: 728, height: 90 },
          { href: "http://dallenad.com/banners/Rich_Maze_970x250_052317/Rich_Maze_970x250_052317.html", width: 970, height: 250 },
          { href: "http://dallenad.com/banners/Personal_Savings_2016_Families_option2_300X250/deploy/Personal_Savings_2016_Families_option2_300X250.html", width: 300, height: 250 },
          { href: "http://dallenad.com/banners/Personal_Loans_Travel_Banner_300x250/U7LL06_Personal_Loans_Travel_Banner_300x250.html", width: 300, height: 250 },
          { href: "http://dallenad.com/banners/Comcast/BUS_BDL_ENG_OlympicsAwarenessBobsled1000000688_GETNOW_3490TP_HTML_300x250.html", width: 300, height: 250 },
          { href: "http://dallenad.com/banners/K7LL02_MerFi_SP_300x600/K7LL02_MerFi_SP_300x600.html", width: 300, height: 600 }
        ]} />
        <Footer nav={[
          { item: "Behance", icon: behance, href: "https://www.behance.net/dallenad" },
          { item: "LinkedIn", icon: linkedin, href: "https://www.linkedin.com/in/dallenad" },
          { item: "YouTube", icon: youtube, href: "https://www.youtube.com/watch?v=qSIivIgoC-Q&list=PLv1FL-R7vvmFXOgVRUnI7TIihPXG2GKL5" }
        ]} />
      </div>
    );
  }
}