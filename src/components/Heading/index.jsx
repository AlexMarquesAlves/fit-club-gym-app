import P from 'prop-types';
// import * as Styled from './styles';

export const Heading = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
      {/* <Styled.Heading>{children}</Styled.Heading> */}
    </>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
};
