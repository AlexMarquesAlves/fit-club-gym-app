import P from 'prop-types';
import Calories from '../../assets/calories.png';
import Heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import { Heading } from '../Heading';
import './styles.scss';

const imgs = { hero_image, hero_image_back, Heart, Calories };
export function Hero() {
   return (
      <div className="hero">
         <div className="left-h">
            <Heading />
            {/* hero ad */}
            <div className="the-best-ad">
               <div></div>
               <span>the best fitness club in the town</span>
            </div>
            {/* hero heading */}
            <div className="hero-text">
               <div>
                  <span className="stroke-text">Shape </span>
                  <span> Your</span>
               </div>
               <div>
                  <span>Ideal Body</span>
               </div>
               <div>
                  <span>
                     in here We will help you to shape and build your ideal body
                     and live up your life to fullest
                  </span>
               </div>
            </div>
            {/* figures */}
            <div className="figures">
               <div>
                  <span>+140</span>
                  <span>expert coachs</span>
               </div>
               <div>
                  <span>+978</span>
                  <span>members</span>
               </div>
               <div>
                  <span>+50</span>
                  <span>fitness programs</span>
               </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
               <button className="btn">Get Started</button>
               <button className="btn">Learn More</button>
            </div>
         </div>
         <div className="right-h">
            <button className="btn">Join Now</button>

            <div className="heart-rate">
               <img src={Heart} alt="A heart image" />

               <span>Heart Rate</span>
               <span>116 bpm</span>
            </div>
         </div>
      </div>
   );
}

Hero.propTypes = {
   children: P.node.isRequired,
};
