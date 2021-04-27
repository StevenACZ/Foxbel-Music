// React
import React from 'react';

// Styles
import { SpinStyled } from './Styles';

// Ant Icons
import { LoadingOutlined } from '@ant-design/icons';

interface Props {
  spinning: boolean;
}

const Spin: React.FC<Props> = ({ spinning = false, children }) => {
  return (
    <SpinStyled>
      {spinning && <LoadingOutlined spin />}
      {children}
    </SpinStyled>
  );
};

export default Spin;
