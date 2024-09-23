import React from 'react';
import { Text } from '../Text';
import { Div } from '../TextContainer';

function BoxText() {
  return (
    <Div height='10%'>
      <Text aria-label="Click the box to see your moments">Click the box to see your moments</Text>
    </Div>
  );
}

export default BoxText;
