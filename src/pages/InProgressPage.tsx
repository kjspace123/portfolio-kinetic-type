import { InProgress } from '@/components';
import { Transition } from '@/layout';
import { useDocumentTitle } from '@/hooks';

interface InProgressPageProps {
  label: string;
}

export function InProgressPage({ label }: InProgressPageProps) {
  useDocumentTitle(label);

  return (
    <Transition>
      <InProgress>{label} Page</InProgress>
    </Transition>
  );
}
