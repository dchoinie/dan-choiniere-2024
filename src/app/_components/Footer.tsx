import React from "react";
import clsx from "clsx";

interface FooterProps {
  fixed?: boolean;
}

const Footer = ({ fixed }: FooterProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "z-20 flex w-full justify-center bg-slate-800/50 py-3",
        fixed ? "fixed bottom-0 left-0" : "mt-6",
      )}
    >
      <small className="text-slate-300">
        &copy; Dan Choiniere {new Date().getFullYear()} All rights reserved.
      </small>
    </div>
  );
};

export default Footer;
