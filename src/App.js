import logo from '../src/assets/logo.svg';
import './App.css';
import retro from '../src/assets/image-retro-pcs.jpg';
import laptop from '../src/assets/image-top-laptops.jpg';
import game from '../src/assets/image-gaming-growth.jpg';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <img src={logo} alt='logo'/>
        <div className='item'>Home</div>
        <div className='item'>News</div>
        <div className='item'>Popular</div>
        <div className='item'>Trending</div>
        <div className='item'>Categories</div>
        </div>
      <div className='wrapper'>
        <div className='left'>
          <div className='left1'></div>
          <div className='left2'>
            <div className='bright'>The Bright Future of Web 3.0?</div>
            <div className='readMore'>
              <span className='readBody'>
                We dive into the next evolution of the web that
             claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? 
             </span>
             <button className='button'>
             READ MORE
             </button>
            </div>
          </div>
        </div>
        <div className='right'>
         <div className='container'>
         <span className='news'>New</span>
          <div className='newsWrapper'> <span className='title'>New Hydrogen VS Electric</span>
          <span className='body'>Cars Will hydrogen-fueled cars ever catch up to EVs?</span></div>
          <div className='newsWrapper'> <span className='title'>The Downsides of AI Artistry</span>
          <span className='body'>What are 
          the possible adverse effects of on-demand AI image generation?</span></div>
          <div className='newsWrapper'> <span className='title'>Is VC Funding Drying Up?</span>
          <span className='body'>Private funding by VC firms is down 50%
           YOY. We take a look at what that means</span></div>          
          </div>     
        </div>
      </div>
      <div className='bottomWrapper'>
        <div className='bottomItem'>
          <img src={retro} alt='retro' className='imagine'/>
        </div>
        <div className='bottomItem'>
          <img src={laptop} alt='laptop'  className='imagine'/>
        </div>
        <div className='bottomItem'>
          <img src={game} alt='game'  className='imagine'/>
          </div>
      </div>
    </div>
  );
}

export default App;