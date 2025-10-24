import Footer from "./Footer";
import Header from "./Header";

const AppShell = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
