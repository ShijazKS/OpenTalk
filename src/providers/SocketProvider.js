"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { getSocket } from "@/lib/socket";

const SocketContext = createContext(null);

export function SocketProvider({ children }) {
  const socket = useMemo(() => getSocket(), []);

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocket = () => useContext(SocketContext);
