import P from 'prop-types';
import './styles.scss';

Programs.propTypes = {
   children: P.node.isRequired,
};

export function Programs() {
   return <h1>Programs</h1>;
}
