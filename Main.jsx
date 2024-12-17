import React, {useEffect} from 'react'
import './main.css'
import './home.css'
import video from '../../Assets/video.mp4'

import img from '../../Assets/img (12).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (13).jpg'
import img6 from '../../Assets/img (6).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'






const Data = [
  {
  id:1,
  imgSrc: img,
  destTitle: 'Tour A: Classic Danube',
  location: 'Danube',
  grade: 'Passau\nVienna\nBudapest\nBratislava\nLinz',
  fees: '$1200 p.P.',
  description: "Explore Vienna's Schönbrunn Palace.\nVisit Budapest's Buda Castle and the Danube promenade.\nSee Bratislava's Old Town.\n7 Days"
  },


  {
  id:2,
  imgSrc: img2,
  destTitle: 'Tour B: Amsterdam to Basel',
  location: 'Rhine',
  grade: 'Amsterdam\nCologne\nKoblenz\nStrasbourg\nBasel',
  fees: '$1500 p.P.',
  description: "Explore Amsterdam's canals.\nVisit Cologne's famous Cathedral.\nWander through Strasbourg's ''La Petite France''\n7 Days."
  },


  {
  id:3,
  imgSrc: img3,
  destTitle: 'Tour C: Paris & Normandy',
  location: 'Seine',
  grade: 'Paris\nVernon\nRouen\nLe-Havre\nParis',
  fees: '$1100 p.P.',
  description: "Visit the Louvre and Eiffel Tower in Paris.\nExplore the medieval town of Rouen.\nVisit the D-Day beaches in Normandy.\n6 Days"  
  },


  {
  id:4,
  imgSrc: img4,
  destTitle: 'Tour D: Danube to the Black Sea',
  location: 'Danube',
  grade: 'Vienna\nBratislava\nBudapest\nBelgrade\nBlackSea',
  fees: '$2400 p.P.',
  description: "DesDiscover Vienna's Hofburg and Prater.\nExplore Belgrade's Kalemegdan Fortress.\nRelax on the Black Sea coast.\n14 Days"  
  },


  {
  id:5,
  imgSrc: img5,
  destTitle: 'Tour E: Romantic Rhine',
  location: 'Rhine',
  grade: 'Frankfurt\nRüdesheim\nKoblenz\nBacharach\nFrankfurt',
  fees: '$850 p.P.',
  description: "Visit the picturesque town of Rüdesheim.\nExplore Koblenz and the Ehrenbreitstein Fortress.\nAdmire the castles along the Rhine.\n4 Days"  
  },


  {
  id:6,
  imgSrc: img6,
  destTitle: 'Tour F: Normandy Highlights',
  location: 'Seine',
  grade: 'Paris\nGiverny\nRouen\nHonfleur\nParis',
  fees: '$1100 p.P.',
  description: "Visit Monet's Gardens in Giverny.\nSee Rouen's Cathedral and old town.\nExplore Honfleur's charming harbor.\n6 Days"  
  },
]

const Main = () => {
  
  
  useEffect(()=>{
    Aos.init({duration: 4000})
 }, [])


  return (
    <>
      <section id='home' className='home'>
            <div className="overlay"></div>
            <video src={video} autoPlay loop muted type="video/mp4"></video>
      
            <div data-aos="fade-down" className="homeContent container">
              <div className="textDiv">
              <span  className="smallText">
                Our Suggestion
              </span>
              <h1 data-aos="fade-down" className="homeTitle">
                Search your Holiday
              </h1>
              </div>
      
              <div style={{height: "140px"}} data-aos="fade-down" className="cardDiv grid">
                <div className="destinationInput">
                  <label htmlFor="city">Select your river for your adventure:</label>
                 
                </div>
      
      
                <div className="btnInput">
                  <button style = {{color:"white"}} className="btn">Danube</button>
                  <button style = {{marginLeft:"40px" , color:"white"}} className="btn">Rhine</button>
                  <button style={{marginLeft:"40px" , color:"white"}} className="btn">Seine</button>
                </div>
                
      
                <div className="searchOptions flex">
                
                <span style = {{color:"white", cursor:"pointer"}}>Diama</span>
                </div>
      
              </div>
      
              <div data-aos="fade-up" className="homeFooterIcons flex">
              
              
              </div>
            </div>
      </section>
      <section id='main' className='main section container'>
        <div className="secTitle">
          <h3 className="title">
            Our Destinations
          </h3>
        </div>

        <div className="secContent grid">
          {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
              return (
                
                
                <div key={id} data-aos="fade-up" className="singleDestination">
        
                  <div className="imageDiv">
                  <img src={imgSrc} alt="" />
                  </div>
        
                  <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                      
                      <span className="name">{location}</span>
                  </span>
        
                  <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1 </small> </span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                  </div>
        
                  <div className="desc">
                    <p>{description}</p>
                  </div>
        
                  <button onClick={()=> alert('Please call us for booking of your trip! \nTelefoneNr. : +49 123 456789')} className='btn flex'>ADD to BASKET </button>
                  </div>
                </div>
      
            )
          }) 
        }
      </div>
      
     
    </section>
  </>
  )
}

export default Main