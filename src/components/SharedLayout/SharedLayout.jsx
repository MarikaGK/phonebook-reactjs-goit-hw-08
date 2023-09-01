import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from '../SharedLayout/SharedLayout.modules.css?inline'

const SharedLayout = () => (
  <main>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </main>
);

export default SharedLayout;
