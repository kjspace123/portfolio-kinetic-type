import { Dot } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Center, MagneticButton } from '@/components';
import { navItems } from '@/data';
import { randomId } from '@/utils';

export function NavbarList() {
  const items = navItems.slice(1).map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id} className="group p-4">
        <Link to={href}>
          <MagneticButton>
            <span className="text-base capitalize">{title}</span>
            <Center>
              <Dot className="scale-0 transition-transform duration-200 ease-in-expo group-hover:scale-100" />
            </Center>
          </MagneticButton>
        </Link>
      </li>
    );
  });

  return <ul className="flex items-center max-lg:hidden">{items}</ul>;
}
