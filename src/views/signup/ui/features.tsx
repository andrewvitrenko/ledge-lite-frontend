import type { FC } from 'react';

import { features } from '../config/features';
import { Feature } from './feature';

export const Features: FC = () => {
  return (
    <section className="space-y-3">
      <h3 className="text-center font-semibold">What you&apos;ll get:</h3>
      <ul className="space-y-2">
        {features.map((feature) => (
          <Feature key={feature} text={feature} />
        ))}
      </ul>
    </section>
  );
};
