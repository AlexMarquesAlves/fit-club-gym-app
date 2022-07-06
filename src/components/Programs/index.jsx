import P from 'prop-types';
import './styles.scss';

Programs.propTypes = {
   children: P.node.isRequired,
};

export function Programs() {
   return (
      <div className="programs" id="programs">
         {/* Header */}
         <div className="programs-header">
            <span>Explore our</span>
            <span>Programs</span>
            <span>to shape you</span>
         </div>
      </div>
   );
}
