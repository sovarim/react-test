import { FC } from 'react';
import styled from 'styled-components';

interface AvatarRootProps {
  width?: number;
  height?: number;
}

interface AvatarProps extends AvatarRootProps {
  src?: string;
}

const AvatarRoot = styled.div.attrs<AvatarRootProps>((props) => ({
  width: props.width || 55,
  height: props.height || 55,
}))<AvatarRootProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  position: relative;
  display: flex;
  font-weight: 500;
  font-size: 1.125rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #b5b5b5;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  left: 0;
  top: 0;
`;

const Avatar: FC<AvatarProps> = ({ children, src }) => {
  return (
    <AvatarRoot>
      {src && <AvatarImg src={src} />}
      {children}
    </AvatarRoot>
  );
};

export default Avatar;
