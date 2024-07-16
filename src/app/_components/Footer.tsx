import React from "react";

const Footer = (): JSX.Element => {
  return (
    <div className="fixed bottom-0 left-0 z-20 flex w-full justify-center bg-slate-800/50 py-3">
      <small className="text-slate-300">
        &copy; Dan Choiniere {new Date().getFullYear()} All rights reserved.
      </small>
    </div>
  );
};

export default Footer;
