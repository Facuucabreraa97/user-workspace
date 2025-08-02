'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface Subscription {
  tier: 'basic' | 'premium' | 'pro' | null;
  expiresAt: Date | null;
}

interface AuthContextType {
  user: User | null;
  subscription: Subscription | null;
  isAuthenticated: boolean;
  hasAccessToModule: (moduleId: string) => boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string, tier: 'basic' | 'premium' | 'pro') => Promise<boolean>;
  logout: () => void;
  showSubscriptionPopup: boolean;
  setShowSubscriptionPopup: (show: boolean) => void;
  selectedModule: string | null;
  setSelectedModule: (moduleId: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [showSubscriptionPopup, setShowSubscriptionPopup] = useState(false);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Check authentication on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedSubscription = localStorage.getItem('subscription');
    
    if (savedUser && savedSubscription) {
      setUser(JSON.parse(savedUser));
      setSubscription(JSON.parse(savedSubscription));
    }
  }, []);

  const hasAccessToModule = (moduleId: string): boolean => {
    if (!subscription?.tier) return false;
    
    const { subscriptionTiers } = require('@/data/modules');
    const tier = subscriptionTiers[subscription.tier];
    
    if (tier.modules === 'all') return true;
    return tier.modules.includes(moduleId);
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in real app, this would be an API call
    const mockUser = { id: '1', email, name: email.split('@')[0] };
    const mockSubscription = { tier: 'premium' as const, expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) };
    
    setUser(mockUser);
    setSubscription(mockSubscription);
    
    localStorage.setItem('user', JSON.stringify(mockUser));
    localStorage.setItem('subscription', JSON.stringify(mockSubscription));
    
    return true;
  };

  const register = async (email: string, password: string, name: string, tier: 'basic' | 'premium' | 'pro'): Promise<boolean> => {
    // Mock registration - in real app, this would be an API call
    const newUser = { id: Date.now().toString(), email, name };
    const newSubscription = { 
      tier, 
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) 
    };
    
    setUser(newUser);
    setSubscription(newSubscription);
    
    localStorage.setItem('user', JSON.stringify(newUser));
    localStorage.setItem('subscription', JSON.stringify(newSubscription));
    
    return true;
  };

  const logout = () => {
    setUser(null);
    setSubscription(null);
    localStorage.removeItem('user');
    localStorage.removeItem('subscription');
  };

  return (
    <AuthContext.Provider value={{
      user,
      subscription,
      isAuthenticated: !!user,
      hasAccessToModule,
      login,
      register,
      logout,
      showSubscriptionPopup,
      setShowSubscriptionPopup,
      selectedModule,
      setSelectedModule
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
