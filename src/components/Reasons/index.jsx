import P from 'prop-types';
// import * as Styled from './styles';

export const Reasons = ({ children }) => {
   return (
      <>
         <h1>{children}</h1>
         {/* <Styled.Reasons>{children}</Styled.Reasons> */}
      </>
   );
};

Reasons.propTypes = {
   children: P.node.isRequired,
};
