import { ReactNode } from "react";
import { useDeviceType } from "./useDeviceType";
import { ThemeProvider } from "styled-components";

interface DeviceTypeProviderProps {
  children: ReactNode;
}

export const DeviceTypeProvider = ({ children }: DeviceTypeProviderProps) => {
  const deviceType = useDeviceType();

  const extendedTheme = {
    deviceType,
  };

  return (
    <ThemeProvider theme={extendedTheme}>
    {children}
  </ThemeProvider>
  );
};
