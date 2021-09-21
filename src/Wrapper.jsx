import React from 'react';

const Header = () => <div>Header</div>;
const Footer = () => <div>Footer</div>;

const Wrapper = (Component) => {
  //Example of closure
  return () => (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
};
export default Wrapper;
