// React
import React from 'react';

// Styles
import { AlertStyled } from './Styles';

// Ant Icons
import {
  CheckCircleFilled,
  InfoCircleFilled,
  WarningFilled,
} from '@ant-design/icons';

interface Props {
  message: string;
  type: string;
}

const Alert: React.FC<Props> = ({ message, type }) => {
  return (
    <AlertStyled type={type}>
      {type === 'error' && <WarningFilled />}
      {type === 'warning' && <InfoCircleFilled />}
      {type === 'success' && <CheckCircleFilled />}
      <p>{message}</p>
    </AlertStyled>
  );
};

export default Alert;
