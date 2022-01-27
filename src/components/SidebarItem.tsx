import { FC } from 'react';
import styled from 'styled-components';

interface SidebarItemProps {
  name?: string;
}

const SidebarItemRoot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SidebarItemText = styled.p`
  padding-left: 1.25rem;
  font-size: 1.125rem;
  font-weight: 400;
  color: #333;
`;

const Circle = styled.div`
  width: 55px;
  height: 55px;
  background: #b5b5b5;
  border-radius: 50%;
`;

const SidebarItem: FC<SidebarItemProps> = ({ name }) => {
  return (
    <SidebarItemRoot>
      <Circle />
      <SidebarItemText>{name}</SidebarItemText>
    </SidebarItemRoot>
  );
};

export default SidebarItem;
