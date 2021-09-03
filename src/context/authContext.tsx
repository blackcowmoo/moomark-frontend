import { createContext, useContext, ReactNode, useState } from 'react';

type authContextType = {
  user: string | null;
  login: () => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: null,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<string | null>(null);

  const login = () => {
    console.log('login!@');
    setUser('mock');
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
