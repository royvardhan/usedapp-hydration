import React, { useEffect, useState } from "react";

export interface ClientRendererProps {
  children: React.ReactNode;
}

export const ClientRenderer = ({ children }: ClientRendererProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <></>;
  }

  return <>{children}</>;
};
