import { Center } from '@/components';
import { cldImageUrl, cldVideoUrl } from '@/utils';
import type { ProjectOption } from '@/data';

export function ProjectSlider({ type, source }: ProjectOption) {
  const image =
    type === 'image' ? (
      <img
        src={cldImageUrl(source)}
        className="absolute inset-0 h-full w-full object-cover"
        alt="project items"
      />
    ) : null;
  const video =
    type === 'video' ? (
      <video
        src={cldVideoUrl(source)}
        loop
        muted
        autoPlay
        playsInline
        className="!static h-full w-full !bg-transparent object-cover"
      />
    ) : null;

  return (
    <Center
      className="relative w-1/4 rounded"
      style={{
        minWidth: '150px',
        height: '20vw',
      }}
    >
      {image}
      {video}
    </Center>
  );
}
