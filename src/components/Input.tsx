import { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

const StyledInput = styled.input<{ fullWidth: boolean }>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #404141;
  padding: 4px;
  font-size: 1rem;
`;

const Input: FC<InputProps> = ({ fullWidth = false, ...props }) => {
  return <StyledInput fullWidth={fullWidth} {...props} />;
};

export default Input;
