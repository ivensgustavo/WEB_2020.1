import React from 'react';

import Hero from './Hero';
import Enemy from './Enemy';
import Arena from './Arena';

export default () => {
  return (
    <div>
      <Arena arena = 'Nova York' >
        <Hero />
        <Enemy />
      </Arena>
    </div>
  )
}