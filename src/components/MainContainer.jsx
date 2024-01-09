const handleClick = () => {
    const element = document.getElementById('one');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  export default MainContainer;