import './HomePage.css';
import Header from '../../Objects/Header/Header';
import chapel from "../../Images/MotherSoDear.png";
import React from 'react';

function Home() {
    return (
    <div className="main">
      <Header />
      <div className="background">
      
        <p className="background-title">
          Association of Computing Machinery
          <br />
          Wake Forest University Chapter
        </p>
        
        <div className="description">
          <p className="description-text">"ACM brings together computing educators, researchers, and professionals to inspire dialogue, 
            share resources, and address the field's challenges. As the world’s largest computing society, 
            ACM strengthens the profession's collective voice through strong leadership, promotion of the 
            highest standards, and recognition of technical excellence. ACM supports the professional growth 
            of its members by providing opportunities for life‐long learning, career development, and professional 
            networking. <br />
            <br />
            Founded at the dawn of the computer age, ACM’s reach extends to every part of the globe, with 
            more than half of its 100,000 members residing outside the U.S.  Its growing membership has led to Councils 
            in Europe, India, and China, fostering networking opportunities that strengthen ties within and across countries 
            and technical communities.  Their actions enhance ACM’s ability to raise awareness of computing’s important 
            technical, educational, and social issues around the world."<br />
            <br />
            ~The Official ACM Website [2018]
            </p>
        </div>
      </div>
      <img src={chapel} alt="" className={"background-image"} />
    </div>
    );
  }
export default Home;