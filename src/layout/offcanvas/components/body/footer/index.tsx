import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function OffcanvasFooter() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li key={id}>
        <a href={href} target="_blank" rel="noopener">
          <MagneticButton>{title}</MagneticButton>
        </a>
      </li>
    );
  });

  return <ul className="flex w-full justify-between gap-10">{medias}</ul>;
}
