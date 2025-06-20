import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  joinDate: string;
  totalLinks: number;
  totalClicks: number;
  earnings: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('rjlinks_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = JSON.parse(localStorage.getItem('rjlinks_users') || '[]');
    const existingUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (existingUser) {
      const userData = {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
        joinDate: existingUser.joinDate,
        totalLinks: existingUser.totalLinks || 0,
        totalClicks: existingUser.totalClicks || 0,
        earnings: existingUser.earnings || 0
      };
      setUser(userData);
      localStorage.setItem('rjlinks_user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = JSON.parse(localStorage.getItem('rjlinks_users') || '[]');
    const existingUser = users.find((u: any) => u.email === email);
    
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      joinDate: new Date().toISOString(),
      totalLinks: 0,
      totalClicks: 0,
      earnings: 0
    };
    
    users.push(newUser);
    localStorage.setItem('rjlinks_users', JSON.stringify(users));
    
    const userData = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      joinDate: newUser.joinDate,
      totalLinks: newUser.totalLinks,
      totalClicks: newUser.totalClicks,
      earnings: newUser.earnings
    };
    
    setUser(userData);
    localStorage.setItem('rjlinks_user', JSON.stringify(userData));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rjlinks_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};