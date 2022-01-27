import { FC, useState } from 'react';
import styled from 'styled-components';
import { SettingsIcon } from 'icons';
import Input from './Input';
import Collapse from './Collapse';

const FilterRoot = styled.div`
  width: 100%;
`;

const FilterHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterText = styled.div`
  font-size: 1.225rem;
  font-weight: 500;
`;

const FilterFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem 0 2rem;
  margin-left: -2rem;
  margin-top: -2rem;
  & > * {
    padding-left: 2rem;
    padding-top: 2rem;
  }
`;

const FilterField = styled.div`
  flex: 0 0 25%;
`;

const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Filter: FC = () => {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <FilterRoot>
      <FilterHead>
        <FilterText>Фильтр</FilterText>
        <Button onClick={onToggle}>
          <SettingsIcon />
        </Button>
      </FilterHead>
      <Collapse open={open}>
        <FilterFields>
          <FilterField>
            <Input fullWidth placeholder="Дата от" />
          </FilterField>
          <FilterField>
            <Input fullWidth placeholder="Дата до" />
          </FilterField>
          <FilterField>
            <Input fullWidth placeholder="Дата от" />
          </FilterField>
          <FilterField>
            <Input fullWidth placeholder="Дата до" />
          </FilterField>
          <FilterField>
            <Input fullWidth placeholder="Имя клиента" />
          </FilterField>
          <FilterField>
            <Input fullWidth placeholder="Телефон" />
          </FilterField>
          <FilterField>
            <Input fullWidth placeholder="Имя клиента" />
          </FilterField>
          <FilterField>
            <Input fullWidth placeholder="Телефон" />
          </FilterField>
        </FilterFields>
      </Collapse>
    </FilterRoot>
  );
};

export default Filter;
