import P from 'prop-types';
// import * as Styled from './styles';

export const Example = ({ children }) => {
   return (
      <>
         <h1>{children}</h1>
         {/* <Styled.Example>{children}</Styled.Example> */}
      </>
   );
};

Example.propTypes = {
   children: P.node.isRequired,
};
