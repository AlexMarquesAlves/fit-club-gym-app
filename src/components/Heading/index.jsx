import P from 'prop-types';
// import * as Styled from './styles';

export const Heading = () => {
   return (
      <>
         <h1>Heading</h1>
         {/* <Styled.Heading>{children}</Styled.Heading> */}
      </>
   );
};

Heading.propTypes = {
   children: P.node.isRequired,
};
