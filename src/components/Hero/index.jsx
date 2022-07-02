import P from 'prop-types';
import { Heading } from '../Heading';
import './styles.scss';

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
         </div>
         <div className="right-h">Right Side</div>
      </div>
   );
}

Hero.propTypes = {
   children: P.node.isRequired,
};
