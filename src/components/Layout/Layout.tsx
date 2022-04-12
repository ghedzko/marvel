import React from "react";

import style from "./Layout.module.scss";

export interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  noHeader?: boolean;
  headerAction?: JSX.Element;
  infoCard?: JSX.Element;
  summaryData?: any[];
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = "",
  noHeader = false,
  headerAction = <></>,
  infoCard,
  summaryData,
}) => {
  const handleError = (error: Error, info: { componentStack: string }) => {
    // Do something with the error
    // E.g. log to an error logging client here
    console.error({ error });
    console.info({ info });
  };

  const handleResetError = () => {
    // reset the state of your app so the error doesn't happen again
    window.location.reload();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__main}>
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
