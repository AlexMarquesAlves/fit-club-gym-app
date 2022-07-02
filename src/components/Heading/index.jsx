import P from 'prop-types';
import Logo from '../../assets/logo.png';
import './styles.scss';

export const Heading = () => {
   return (
      <div className="heading">
         <img className="logo" src={Logo} alt="some logo pic" />

         <ul className="heading-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why Us</li>
            <li>Plans</li>
            <li>Testimonials</li>
         </ul>
      </div>
   );
};

Heading.propTypes = {
   children: P.node.isRequired,
};
