import { Outlet, ScrollRestoration } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-[#0e0f1c] text-white min-h-screen">
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
