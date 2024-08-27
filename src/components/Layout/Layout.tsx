import AppBar from '../AppBar/AppBar';

type LayoutProps = {
  onCloseSideBar: () => void;
  children: React.ReactNode;
};

function Layout({ onCloseSideBar, children }: LayoutProps) {
  return (
    <>
      <AppBar onCloseSideBar={onCloseSideBar} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
