import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';

export default function RenderRouteWithOutletContext({children, context}) {

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/"element={<Outlet context={context} />}>
          <Route index element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}