import { Outlet } from 'react-router-dom';
import { Provider as BalancerProvider } from 'react-wrap-balancer';

import { Offcanvas } from '@/layout';

function App() {
  return (
    <BalancerProvider>
      <Offcanvas />
      <Outlet />
    </BalancerProvider>
  );
}

export default App;
