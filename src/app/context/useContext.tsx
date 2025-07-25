'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id?: string;
  email: string;
  nom?: string;
  telephone?: string;
  pays?: string;
  token?: string;
  prenom: string
  userName?: string
  password?: string
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // ✅ Restaurer l'utilisateur au montage
  useEffect(() => {
    const userStored = localStorage.getItem("user");
    if (userStored) {
      setUser(JSON.parse(userStored));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser doit être utilisé dans <UserProvider>");
  return context;
};
