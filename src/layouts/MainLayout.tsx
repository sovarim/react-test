import { FC, useState } from 'react';
import styled from 'styled-components';
import { Sidebar, Header, Filter } from 'components';

const sidebarItems = [
  {
    id: 1,
    name: 'Главная',
  },
  {
    id: 2,
    name: 'Клиенты',
  },
  {
    id: 3,
    name: 'Сотрудники',
  },
  {
    id: 4,
    name: 'Аналитика',
  },
];

const Root = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Container = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  flex-grow: 1;
  overflow: auto;
  padding: 0 1rem 1rem 1rem;
`;

const FilterWrapper = styled.div`
  padding: 1rem;
`;

const MainLayout: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Root>
      <Sidebar items={sidebarItems} open={open} onOpen={onOpen} onClose={onClose} />
      <Container>
        <Wrapper>
          <Header />
          <FilterWrapper>
            <Filter />
          </FilterWrapper>
          <Content>{children}</Content>
        </Wrapper>
      </Container>
    </Root>
  );
};

export default MainLayout;
