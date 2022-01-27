import { FC } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  onOpen: () => void;
  onClose: () => void;
  open: boolean;
  items?: { id: string | number; name: string }[];
}

const SIDEBAR_OPEN_WIDTH = 280;
const SIDEBAR_CLOSE_WIDTH = 87;

const SidebarRoot = styled.div<{ open: boolean }>`
  height: 100%;
  min-width: ${(props) => (props.open ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSE_WIDTH)}px;
  max-width: ${(props) => (props.open ? SIDEBAR_OPEN_WIDTH : SIDEBAR_CLOSE_WIDTH)}px;
  padding: 0 1rem;
  background: #f2f2f2;
  box-shadow: 2px 0px 8px 3px rgba(34, 60, 80, 0.2);
  position: relative;
  z-index: 1000;
  overflow-x: hidden;
  transition: all 0.2s ease-out;
`;

const SidebarContainer = styled.div`
  min-width: ${SIDEBAR_OPEN_WIDTH}px;
`;

const SidebarTitle = styled.div`
  height: 74px;
  display: flex;
  align-items: center;
`;

const SidebarTitleText = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  padding-left: 1rem;
  text-transform: uppercase;
`;

const SidebarItemsRoot = styled.nav`
  padding-top: 3rem;
  & > * {
    margin-bottom: 1.5rem;
  }
`;

const Sidebar: FC<SidebarProps> = ({ onOpen, onClose, open, items }) => {
  return (
    <SidebarRoot open={open} onMouseOver={onOpen} onMouseOut={onClose}>
      <SidebarContainer>
        <SidebarTitle>
          <Avatar src="https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200" />
          <SidebarTitleText>Name Company</SidebarTitleText>
        </SidebarTitle>
        <SidebarItemsRoot>
          {items?.map((item) => (
            <SidebarItem key={item.id} name={item.name} />
          ))}
        </SidebarItemsRoot>
      </SidebarContainer>
    </SidebarRoot>
  );
};

export default Sidebar;
