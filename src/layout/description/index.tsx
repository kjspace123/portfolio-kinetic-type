import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

const phrase =
  'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';

export function Description() {
  return (
    <article className="container relative">
      <div className="flex flex-wrap items-stretch justify-between gap-10 pb-[clamp(5em,14vh,16em)] pt-[clamp(4em,12vw,20em)] lg:flex-nowrap">
        <div className="basis-full lg:basis-9/12">
          <h4 className="text-[clamp(1.5em,2.2vw,3em)] leading-[1.45]">
            <ParallaxReveal paragraph={phrase} />
          </h4>
        </div>

        <div className="basis-7/12 lg:basis-3/12">
          <ParallaxFade>
            <Balancer as="p" className="mt-2 text-base lg:text-lg">
              The combination of my passion for design, code & interaction
              positions me in a unique place in the web design world.
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="absolute right-0 top-3/4 lg:top-full lg:me-10">
            <Link to="/about">
              <MagneticButton variant="ghost" size="xl">
                About me
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
