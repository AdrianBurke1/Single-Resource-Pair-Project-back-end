import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const ourTeam = {
    adrianBurke: {
      name: "Adrian Burke",
      bio: "Hi I’m Adrian Burke, currently I'm studying to become a full stack developer at pursuit. I believe that coding is the future.",
      github: "https://github.com/AdrianBurke1",
      image: "https://avatars.githubusercontent.com/u/114108495?v=4"
    },
    berlinRivas: {
      name: "Berlin Rivas",
      bio: "Full Stack Software Engineer that aspires to also break into the field of Data Science and cybersecurity. Highly interested in new technology.",
      github: "https://github.com/Ari-So-Iri",
      image: "https://avatars.githubusercontent.com/u/104827679?v=4"
    }
  };

  return (
    <div className="about">

      <p style={{ fontSize: 20 }}><em><strong>Collabe Project</strong></em> We created a Gaming library app using React, collaborating to build a functional UI. This project boosted our practical experience and understanding of web dev practices..</p>
      <br />
      <h1>The Team</h1>
      <hr />
      <div className="developers">

        <div className="developer">
            <img src={ourTeam.adrianBurke.image} alt="Adrian Burke" style={{ width: "100px" }} />
            <h3>{ourTeam.adrianBurke.name}</h3>
            <p>{ourTeam.adrianBurke.bio}</p>
            <Link to={ourTeam.adrianBurke.github}>Adrian's Github</Link>
        </div>

        <div className="developer">
          <img src={ourTeam.berlinRivas.image} alt="Berlin Rivas" style={{ width: "100px" }} />
          <h3>{ourTeam.berlinRivas.name}</h3>
          <p>{ourTeam.berlinRivas.bio}</p>
          <Link to={ourTeam.github}>Berlin's GitHub</Link>
        </div>
      </div>

    </div>
  );
};

export default About;