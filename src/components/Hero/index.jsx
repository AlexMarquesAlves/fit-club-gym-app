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
         </div>
         <div className="right-h">Right Side</div>
      </div>
   );
}

Hero.propTypes = {
   children: P.node.isRequired,
};
