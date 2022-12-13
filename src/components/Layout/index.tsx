import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-300 to-purple-500">
      <main className="h-full flex items-center justify-center">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
