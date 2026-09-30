import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';
import { useDocumentTitle } from '@/hooks';

export function Home() {
  useDocumentTitle('Home');

  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
