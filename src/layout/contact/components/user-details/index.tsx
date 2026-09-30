import { motion, type MotionValue } from "framer-motion";
import { ArrowDownLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { MagneticButton } from "@/components";
import { cldImageUrl } from "@/utils";

interface UserDetailsProps {
  transformX: MotionValue<number>;
}

export function UserDetails({ transformX }: UserDetailsProps) {
  return (
    <div className="mx-auto px-[clamp(1.5em,8vw,8em)] lg:px-[calc(clamp(2.5em,8vw,8em)*2)] min-[1400px]:max-w-[1400px]">
      <div className="pb-[calc(clamp(5em,21vh,12em)/2)]">
        <div className="flex items-center gap-8">
          <div className="relative size-[clamp(4.5em,6.5vw,8em)]">
            <img
              src={cldImageUrl("Dennis-Portfolio/images/mqtwxh5znybowgaljrbp")}
              className="absolute inset-0 h-full w-full rounded-full object-cover"
              alt="Dennis Snellenberg Profile Picture"
            />
          </div>
          <h2 className="text-[calc(clamp(3.25em,7vw,8em)*0.875)] leading-[1.1]">
            Let’s work
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-[calc(clamp(3.25em,7vw,8em)*0.875)] leading-[1.1]">
            together
          </h2>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>
      </div>

      <div className="pb-[calc(clamp(5em,21vh,12em)/2)]">
        <div className="relative w-full">
          <div className="h-[1px] bg-muted-foreground" />
          <div className="absolute right-0 top-0 z-20 -translate-x-[20%] lg:-translate-x-1/2 -translate-y-1/2">
            <motion.div style={{ x: transformX }}>
              <Link to="/contact">
                <MagneticButton
                  variant="primary"
                  size="lg"
                  className="aspect-square w-[clamp(7em,16vw,9em)] p-0"
                >
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          <div>
            <a href="mailto:info@dennissnellenberg.com">
              <MagneticButton
                variant="outline"
                size="md"
                className="w-full border-muted-foreground py-6"
              >
                info@dennissnellenberg.com
              </MagneticButton>
            </a>
          </div>
          <div>
            <a href="tel:+31627847430">
              <MagneticButton
                variant="outline"
                size="md"
                className="w-full border-muted-foreground py-6"
              >
                +31 6 27 84 74 30
              </MagneticButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
