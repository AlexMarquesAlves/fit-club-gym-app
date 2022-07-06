import P from 'prop-types';
import './styles.scss';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

Programs.propTypes = {
   children: P.node.isRequired,
};

export function Programs() {
   return (
      <div className="programs" id="programs">
         {/* Header */}
         <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>
         </div>

         {/* Programs Cards */}
         <div className="programs-categories"></div>
      </div>
   );
}
