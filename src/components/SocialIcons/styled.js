import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  & + li {
    margin-left: 16px;
  }
`;

export const Link = styled.a`
  display: flex;
  color: var(--gray-3);

  &:hover {
    opacity: 0.8;
  }

  > svg {
    width: 16px;
    height: 16px;
  }
`;
