import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard': return 'Dashboard';
      case '/wallets': return 'Wallet Integration';
      case '/transactions': return 'Transactions';
      case '/holdings': return 'Holdings';
      case '/settings': return 'Settings';
      default: return 'CryptoManager';
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111722] h-full shrink-0">
        <div className="flex h-full flex-col justify-between p-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 px-2 py-4 items-center border-b border-slate-100 dark:border-slate-800 mb-2">
              <div className="size-8 flex items-center justify-center rounded bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-2xl">currency_bitcoin</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">CryptoManager</h1>
                <p className="text-text-secondary text-xs font-medium">Pro Plan</p>
              </div>
            </div>
            
            <nav className="flex flex-col gap-2">
              <NavItem to="/dashboard" icon="dashboard" label="Dashboard" />
              <NavItem to="/wallets" icon="account_balance_wallet" label="Wallets" />
              <NavItem to="/transactions" icon="receipt_long" label="Transactions" />
              <NavItem to="/holdings" icon="pie_chart" label="Holdings" />
              <NavItem to="/settings" icon="settings" label="Settings" />
            </nav>
          </div>
          
          <div className="mt-auto px-2 border-t border-slate-100 dark:border-slate-800 pt-4">
            <button className="flex w-full items-center gap-3 px-3 py-3 rounded-lg text-slate-500 hover:text-red-500 dark:text-[#92a4c9] dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col h-full overflow-hidden relative">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 flex items-center justify-between px-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111722] shrink-0 z-20">
            <div className="flex items-center gap-3">
              <button className="text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">menu</span>
              </button>
              <div className="flex items-center gap-2">
                 <div className="size-6 flex items-center justify-center rounded bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-lg">currency_bitcoin</span>
                </div>
                <span className="font-bold text-slate-900 dark:text-white">CryptoManager</span>
              </div>
            </div>
             <div className="flex gap-2">
                <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 hover:bg-slate-200 dark:bg-[#232f48] dark:hover:bg-[#2f3e5e] text-slate-700 dark:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">notifications</span>
                </button>
             </div>
        </header>

        {/* Desktop Header (Usually hidden or part of page, but keeping consistent structure) */}
        {/* We will render page specific headers inside pages to match specific designs perfectly */}
        
        <main className="flex-1 overflow-hidden relative">
            <Outlet />
        </main>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ to: string; icon: string; label: string }> = ({ to, icon, label }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group
        ${isActive 
          ? 'bg-primary/10 text-primary dark:bg-primary dark:text-white font-bold' 
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-[#92a4c9] dark:hover:bg-[#1f2937] dark:hover:text-white font-medium'}
      `}
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      <span className="text-sm leading-normal">{label}</span>
    </NavLink>
  );
};

export default Layout;