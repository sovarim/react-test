import styled from 'styled-components';
import Input from './Input';
import Avatar from './Avatar';

const HeaderRoot = styled.header`
  display: flex;
  min-height: 74px;
  max-height: 74px;
  background: #f2f2f2;
  align-items: center;
  padding: 0 1rem;
`;

const HeaderLeft = styled.div`
  flex-grow: 1;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <HeaderRoot>
      <HeaderLeft>
        <Input placeholder="Поиск..." />
      </HeaderLeft>
      <HeaderRight>
        <HeaderText>Петров В. А.</HeaderText>
        <Avatar>В.А.</Avatar>
      </HeaderRight>
    </HeaderRoot>
  );
};

export default Header;
