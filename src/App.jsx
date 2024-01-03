import './App.css';

const handleClick = () => {
  const element = document.getElementById('one');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}; 

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div id="zero" className="main">
          <a className="logo" href="#">
            <img src="/img/logo.svg" width="107" height="23" alt="logo" />
          </a>
          <nav className="menu">
            <a href="#">Equipment</a>
            <a href="#">About us</a>
            <a href="#">Blog</a>
          </nav>
          <a className="account" href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="white"/>
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="white"/>
              </mask>
              <g mask="url(#mask0)">
              </g>
            </svg>                          
            Account
          </a>
        </div>
      </div>
    </header>
  );
};

const MainContainer = () => {
  return (
    <div className="container">
      <section className="guide">
        <p className="text">A Hiking guide</p>
        <h1 className="mountains">Be prepared for the Mountains and beyond!</h1> 
        <button className="scroll" onClick={handleClick}>scroll down</button>  
        <ul className="navigation">
          <li><a href="#zero">Start</a></li> 
          <li><a href="#one">01</a></li>
          <li><a href="#two">02</a></li>
          <li><a href="#three">03</a></li>
        </ul>
      </section>
      <div className="cards">
        <section className="get">
          <div id="one" className="box">
            <p className="fone">01</p>
            <p className="start">GEt Started</p>
            <h2>What level of hiker are you?</h2>
            <p className="read">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
            <a className="more" href="#">read more
              <img src="/img/yellow.svg" width="16" height="24" alt="" />
            </a>
          </div>
          <img className="nature" src="/img/first.jpg" alt="" />
        </section>
        <section className="get">
          <div id="two" className="box">
            <p className="fone">02</p>
            <p className="start">Hiking Essentials</p>
            <h2>Picking the right Hiking Gear!</h2>
            <p className="read">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.</p>
            <a className="more" href="#">read more
              <img src="/img/yellow.svg" width="16" height="24" alt="" />
            </a>
          </div>
          <img className="nature" src="/img/second.jpg" alt="" />
        </section>
        <section className="get">
          <div id="three" className="box">
            <p className="fone">03</p>
            <p className="start">where you go is the key</p>
            <h2>Understand Your Map & Timing</h2>
            <p className="read">To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
            <a className="more" href="#">read more
              <img src="/img/yellow.svg" width="16" height="24" alt="" />
            </a>
          </div>
          <img className="nature" src="img/third.jpg" alt="" />
        </section>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default App;
