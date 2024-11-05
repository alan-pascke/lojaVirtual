'use client'
import { checkAuth } from "@/service/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  }

const AuthContext = createContext< AuthContextType | undefined >(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) { 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthResult = async () => {
      try {
          const response = await checkAuth();
          setIsAuthenticated(response);
      } catch (error) {
          setIsAuthenticated(false);
      }
    };

    useEffect(() => {
        checkAuthResult();
    }, []);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);
   
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
} 

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };