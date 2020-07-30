import styled from 'styled-components';
import { Link } from 'gatsby';

export const Header = styled.header`
  background: var(--white);
`;

export const SocialBar = styled.div`
  background: var(--gray-1);
`;

export const SocialBarContainer = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 340px) {
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  max-width: 1216px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img``;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;

  @media screen and (max-width: 500px) {
    margin-top: 8px;
  }
`;

export const NavigationItem = styled.li`
  & + li {
    margin-left: 32px;
  }
`;

export const NavigationLink = styled(Link)`
  color: var(--gray-2);
  font-size: 1.125rem;
  font-weight: 600;

  &.active {
    color: var(--red);
    font-weight: 700;
  }
`;
