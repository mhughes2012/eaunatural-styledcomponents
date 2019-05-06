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
      <p>Thank you for browsing Eau Natural -- Ecommerce Site coming soon! Until then email us <a href="mailto:mairilee@shaw.ca">mairilee@shaw.ca</a>
          <div className="fb-page"
               data-href="https://www.facebook.com/Eau-Natural-648008055245905/"
               data-width="380"
               data-hide-cover="false"
               data-show-facepile="false"><a href="https://www.facebook.com/Eau-Natural-648008055245905/">Visit us on Facebook</a></div>
      </p>
    </Wrapper>
  );
};
export default withTheme()(Footer);