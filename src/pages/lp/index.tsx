import React, {FC, memo} from 'react';
import Image from 'next/image';
import bg from '../../images/bg.png';

const Lp: FC = memo(() => {
  return (
    <section className="relative mt-20 h-screen w-full text-2xl text-white">
      <Image alt={`bg`} className="absolute z-0 h-full w-full object-cover" placeholder="blur" priority src={bg} />
      <div className="z-1 absolute h-full w-full"></div>
    </section>
  );
});

export default Lp;
