import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

export function SocialInfo() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className="border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border"
      >
        <a href={href} target="_blank" rel="noopener">
          <MagneticButton>{title}</MagneticButton>
        </a>
      </li>
    );
  });

  return (
    <div className="px-12 pb-4 pt-10">
      <div className="flex flex-wrap items-stretch justify-between gap-5">
        <div className="flex gap-8">
          <div>
            <h5 className="mb-4 text-xs uppercase leading-4 text-muted-foreground">
              Version
            </h5>
            <p className="mt-7">2022 © Edition</p>
          </div>
          <div>
            <h5 className="mb-4 text-xs uppercase leading-4 text-muted-foreground">
              Local time
            </h5>
            <p className="mt-7">
              <time>04:01 PM GMT+2</time>
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <h5 className="mb-4 text-xs uppercase leading-4 text-muted-foreground">
            Socials
          </h5>
          <ul className="flex gap-8">{medias}</ul>
        </div>
      </div>
    </div>
  );
}
