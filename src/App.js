import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Education />
      <Skills />
      
      <Projects />
     
      <Work />
      <Footer />
    </div>
  );
}

function Header() {
  function openGithub() {
    window.open('https://github.com/content-123', '_blank');
  }

  function openLinkedin() {
    window.open('https://www.linkedin.com/in/keerthana-kumar-1ba02585/', '_blank');
  }

  function openResume() {
    window.open('https://drive.google.com/file/d/1X0dUcNLj8QJre6ywtIQRw5-GiveB41AX/view', '_blank');
  }

  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="container-fluid">
      <div id="name">I'm Keerthana</div>

      <div className="button1">
        <button onClick={openGithub}><i className="fa-brands fa-github"></i></button>
        <button onClick={openLinkedin}><i className="fa-brands fa-linkedin"></i></button>
      </div>
      <br/>
      <button type="button" onClick={openResume}>Resume <i className="fa-solid fa-file-arrow-down"></i></button>
      <button type="button" onClick={() => scrollToSection('footer')}>Contact</button>
      <br/>
      <div>
        <button type="button" id="arrow" onClick={() => scrollToSection('aboutme')}><i className="fa-solid fa-circle-chevron-down"></i></button>
      </div>
    </header>
  );
}

function AboutMe() {
  return (
    <div id="aboutme">
      <div className="d-flex flex-row mb-3">
        <div className="p-2">
          <img
            className="profile"
            src="https://lh3.googleusercontent.com/a/ACg8ocKfrGoREdlpU-4J9wZszF2NrFmwa-iani7JC-1odz1oomx_gIvKREzaBJKWuuvUE3XXJcDecw655fZer-8WWMUaZgWNu-dC=s360-c-no"
            alt="..."
          />
        </div>
        <div className="p-2">
          <h2>About Me</h2>
          <p>
            I am proud to have a unique background that combines system engineering, computer networking, and software development. 
            In my various roles, I have found myself regularly called upon to tackle technical challenges, resolve coding issues and 
            engage with different teams working on different projects. My love of coding drives me internally and I relish every 
            opportunity to tackle the deepest technical challenges. From developing a user-friendly frontend to building reliable web servers, 
            I've worked on many projects. Also, have experience with cross-platform application development.
          </p>
        </div>
      </div>
    </div>
  );
}


function Education() {
  return (
    <div className="container1">
      <h2><u>EDUCATION</u></h2>
      
      <div className="d-flex flex-row mb-3">
      <ul>
        <li>B.E. Electronics and Communication Engineering - 2014</li>
        <li>VVGHSS - 2010</li>
      </ul>
    </div>
   </div>
  );
}

function Skills() {
  return (
    <div className="container3">
      <h2><u>SKILLS</u></h2>
      <br />
      <br />
      <div className="d-flex flex-row mb-3">
        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: '75%' }}>React</div>
        </div>
        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: '65%' }}>Mongodb</div>
        </div>
      </div>
      <br /><br />
      <div className="d-flex flex-row mb-3">
        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: '55%' }}>Node</div>
        </div>
        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: '50%' }}>Express</div>
        </div>
      </div>
      <br />
      <br />
      <div className="d-flex flex-row mb-3">
        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
          <div className="progress-bar" style={{ width: '75%' }}>Mysql</div>
        </div>
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="container2">
      <h2><u>PROJECTS</u></h2>
      <div className="project"></div>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://wallpapercave.com/wp/wp2610900.jpg" className="d-block w-100" alt="background1" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Bulk email</h3>
              <p>
                Designed user registration and login and stored the users in db and used JWT token for authorization .allowing only registered users to send bulk email.
              </p>
              <br />
              <p>Frontend source code: <a href="https://github.com/content-123/bulk-email-frontend" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p>Backend source code: <a href="https://github.com/content-123/Bulkemail1backend" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p>Frontend Deployed url: <a href="https://stupendous-kheer-89c54f.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
              <p>Backend Deployed url: <a href="https://bulkemail-kt07.onrender.com" target="_blank" rel="noopener noreferrer">Deployed</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://wallpapercave.com/wp/wp2610900.jpg" className="d-block w-100" alt="background2" />
            <div className="carousel-caption d-none d-md-block">
              <h3>Bookpurchase</h3>
              <p>
                Adding books to display in the list and adding it to the cart and doing payment using Razorpay.
              </p>
              <br />
              <p>Frontend source code: <a href="https://github.com/content-123/razor" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p>Backend source code: <a href="https://github.com/content-123/socketback" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p>Frontend Deployed url: <a href="https://admirable-sprite-38f034.netlify.app" target="_blank" rel="noopener noreferrer">Deployed</a></p>
              <p>Backend Deployed url: <a href="https://socketback-6p9e.onrender.com" target="_blank" rel="noopener noreferrer">Deployed</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://wallpapercave.com/wp/wp2610900.jpg" className="d-block w-100" alt="background3" />
            <div className="carousel-caption d-none d-md-block">
              <h3>User Management</h3>
              <p>
                Created a React App that allows for CRUD operations with user data using React and Axios fetch to interact with a mock API.
              </p>
              <p>Frontend Source Code: <a href="https://github.com/content-123/crudapi" target="_blank" rel="noopener noreferrer">Github</a></p>
              <p>Frontend deployed Url: <a href="https://jovial-begonia-28db0d.netlify.app/" target="_blank" rel="noopener noreferrer">Deployed</a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

// function Skills() {
//   return (
//     <div className="container3">
//       <h2><u>SKILLS</u></h2>
//       <br />
//       <br />
//       <div className="d-flex flex-row mb-3">
//         <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//           <div className="progress-bar" style={{ width: '75%' }}>React</div>
//         </div>
//         <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//           <div className="progress-bar" style={{ width: '65%' }}>Mongodb</div>
//         </div>
//       </div>
//       <br /><br />
//       <div className="d-flex flex-row mb-3">
//         <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//           <div className="progress-bar" style={{ width: '55%' }}>Node</div>
//         </div>
//         <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//           <div className="progress-bar" style={{ width: '50%' }}>Express</div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <div className="d-flex flex-row mb-3">
//         <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//           <div className="progress-bar" style={{ width: '75%' }}>Mysql</div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Work() {
  return (
    <div className="container4">
      <h2><u>WORK</u></h2>
      <br />
      <div>
        <ul>
          <li>Systems Engineer at GP Strategies Indis Private Ltd - July 2021-current</li>
          <li>Engineer at CSS Corp Private Ltd June 2020-July 2021</li>
        </ul>
      </div>
    </div>
  );
}

function Footer() {
  function openGithub() {
    window.open('https://github.com/content-123', '_blank');
  }

  function openLinkedin() {
    window.open('https://www.linkedin.com/in/keerthana-kumar-1ba02585/', '_blank');
  }

  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer id="footer">
        
          <i className="fa-solid fa-envelope"></i>
          <span><b>Get in touch</b></span>
      <br/><br/>
        <div className="footer1">
          <button><i className="fa-solid fa-envelope"></i> keerthanakk10@gmail.com</button>
          <br /><br />
          <button onClick={openGithub}><i className="fa-brands fa-github-alt"></i> content-123</button>
       
      </div>
      <div>
        <button type="button" id="uparrow" onClick={() => scrollToSection('name')}><i className="fa-solid fa-circle-chevron-up"></i></button>
      </div>
      <div className="footer2">
        <button onClick={openGithub}><i className="fa-brands fa-github-alt"></i></button>
        <button onClick={openLinkedin}><i className="fa-brands fa-linkedin"></i></button>
        <p><b>© Copyright 2024 Keerthana</b></p>
      </div>
    </footer>
  );
}

export default App;
