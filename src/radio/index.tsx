import React from 'react';
import RadioIcon from './radio-icons';

interface RadioProps {
  color? : string;
  outlook? : string;
}

const Radio: React.FC<RadioProps> = () => {

  return (
    <React.Fragment>
      <RadioIcon/>
    </React.Fragment>
  )

}

export default Radio;
