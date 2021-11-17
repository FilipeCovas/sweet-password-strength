import React from 'react';
import { Container, Filler, Label } from './styles';
import { ProgressBarProps } from './types';

function ProgressBar({ bgcolor, status, completed, style }: ProgressBarProps) {
  return (
    <Container style={style}>
      <Label bgcolor={bgcolor}>{status}</Label>
      <Filler bgcolor={bgcolor} completed={completed} />
    </Container>
  );
}

export default ProgressBar;
