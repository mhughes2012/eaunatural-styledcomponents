import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

const Wrapper = styled.div`
  margin-bottom: 30px;
  font-size: 14px;
  > a {
    color: #555;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (max-width: 650px) {
    margin-bottom: 20px;
  }
`;
const Spacer = styled.span`
  color: ${props => props.color};
  margin: 0 10px;
`;

const Footer = ({ product, theme }) => {
  return (
    <Wrapper>
      <p style={{textAlign: 'center'}}>Thank you for browsing Eau Natural -- Ecommerce Site coming soon! Until then email us <a href="mailto:info@eaunatural.ca">info@eaunatural.ca</a> or <a className="fb" href="https://www.facebook.com/Eau-Natural-648008055245905/">visit us on Facebook <em
          className="ic ic-facebook">&nbsp;</em> </a>
      </p>
    </Wrapper>
  );
};
export default withTheme()(Footer);
