import { Center } from '@/components';
import { useDocumentTitle } from '@/hooks';

export function NotFound() {
  useDocumentTitle('404');

  return (
    <Center className="h-screen">
      <div className="select-none">
        <h1 className="text-[max(9.5em,16vw)]">Not Found</h1>
      </div>
    </Center>
  );
}
