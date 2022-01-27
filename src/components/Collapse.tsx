import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface CollapseProps {
  open?: boolean;
}

const CollapseRoot = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.2s ease-out;
`;

const CollapseWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const Collapse: FC<CollapseProps> = ({ children, open = false }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getWrapperSize = () => {
    const height = wrapperRef.current?.clientHeight || 0;
    return height;
  };

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.style.height = open ? `${getWrapperSize()}px` : '0';
    }
  }, [open]);

  return (
    <CollapseRoot ref={rootRef}>
      <CollapseWrapper ref={wrapperRef}>{children}</CollapseWrapper>
    </CollapseRoot>
  );
};

export default Collapse;
