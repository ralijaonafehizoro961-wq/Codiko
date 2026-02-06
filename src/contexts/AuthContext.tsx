import React, { createContext, useState, useCallback, useEffect } from 'react';

export interface User {
  id: string;
  username: string;
  email: string;
  completedChapters: string[];
  completedLessons: string[];
  enrollmentDate: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  updateCompletedChapters: (chapterId: string) => void;
  updateCompletedLessons: (lessonId: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('codiko_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    // Simulated login - in real app, would call backend
    const users = JSON.parse(localStorage.getItem('codiko_users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (!foundUser) {
      throw new Error('Invalid credentials');
    }

    const userData = {
      id: foundUser.id,
      username: foundUser.username,
      email: foundUser.email,
      completedChapters: foundUser.completedChapters || [],
      completedLessons: foundUser.completedLessons || [],
      enrollmentDate: foundUser.enrollmentDate
    };

    setUser(userData);
    localStorage.setItem('codiko_user', JSON.stringify(userData));
  }, []);

  const register = useCallback(async (username: string, email: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('codiko_users') || '[]');
    
    if (users.some((u: any) => u.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      password, // In real app, this would be hashed
      completedChapters: [],
      completedLessons: [],
      enrollmentDate: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('codiko_users', JSON.stringify(users));

    const userData = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      completedChapters: newUser.completedChapters,
      completedLessons: newUser.completedLessons,
      enrollmentDate: newUser.enrollmentDate
    };

    setUser(userData);
    localStorage.setItem('codiko_user', JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('codiko_user');
  }, []);

  const updateCompletedChapters = useCallback((chapterId: string) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        completedChapters: [...new Set([...prev.completedChapters, chapterId])]
      };
      localStorage.setItem('codiko_user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateCompletedLessons = useCallback((lessonId: string) => {
    setUser((prev) => {
      if (!prev) return prev;
      const updated = {
        ...prev,
        completedLessons: [...new Set([...prev.completedLessons, lessonId])]
      };
      localStorage.setItem('codiko_user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    updateCompletedChapters,
    updateCompletedLessons
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
