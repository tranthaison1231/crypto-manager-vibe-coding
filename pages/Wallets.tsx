import React from 'react';

const Wallets: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-hidden">
      <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-slate-200 dark:border-[#232f48] bg-white dark:bg-[#111722] shrink-0">
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
              <button className="flex items-center justify-center overflow-hidden rounded-lg size-10 bg-slate-100 hover:bg-slate-200 dark:bg-[#232f48] dark:hover:bg-[#2f3e5e] text-slate-700 dark:text-white transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
               <div className="size-10 rounded-full bg-cover bg-center border-2 border-slate-200 dark:border-[#232f48]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCP1MnTXOHGMhE7VkXNvvmfiHSmGG55DFgJekIautyYBgBFaU3K713pNlpgcliqej9FiZCwxQ8g25jxkHbJSNvSBNcuPXeNtXAyGkB06ri2LMd52O3lTi04iwW7ld88yr8tK_7enVSVPfTxuIz3hGzImkBaDCj2B47r0DaYKiDnyD95ELW33mtWDPoWOFTmFaYMkVsALZ5iMQLcxgeULMji0nhcIuo62_VyoBW0XL2m20OL1VzTCEYObXJQ0LBYEyFghm62etj3KFM')" }}></div>
          </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col gap-3 pb-4 border-b border-slate-200 dark:border-[#232f48]">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">Wallet Integration</h1>
                <p className="text-slate-500 dark:text-[#92a4c9] text-base font-normal leading-normal max-w-2xl">
                  Securely manage your API keys and wallet connections. All keys are encrypted locally before being sent to our secure servers.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard title="Total Balance" value="$124,592.00" />
              <StatCard title="Active Wallets" value="4" />
              <StatCard title="Last Sync" value="Just now" valueColor="text-green-500" />
              <StatCard title="Errors" value="0" />
            </div>

            <div className="flex items-center justify-between pt-4">
              <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Active Connections</h2>
              <button className="text-primary hover:text-blue-400 text-sm font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                Sync All
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <WalletCard 
                name="Binance (Main Account)"
                icon="currency_bitcoin"
                iconBg="bg-[#F3BA2F]/10"
                iconColor="text-[#F3BA2F]"
                borderColor="border-[#F3BA2F]/20"
                status="Active"
                synced="Synced 2m ago"
                detail="API ending in ...8X92"
                balance="$42,301.54"
                change="+1.2%"
              />
              <WalletCard 
                name="SUI Wallet"
                icon="water_drop"
                iconBg="bg-[#4DA2FF]/10"
                iconColor="text-[#4DA2FF]"
                borderColor="border-[#4DA2FF]/20"
                status="Active"
                synced="Synced 10m ago"
                detail="Address ending in ...44aL"
                balance="$8,120.00"
                change="-0.4%"
                changeNegative
              />
              <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#192233] p-5 shadow-sm border border-red-200 dark:border-red-900/30 transition-all">
                <div className="absolute top-0 right-0 p-2">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <div className="size-12 rounded-full bg-[#0052FF]/10 flex items-center justify-center shrink-0 border border-[#0052FF]/20">
                    <span className="material-symbols-outlined text-[#0052FF] text-[28px]">account_balance</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">Coinbase Pro</h3>
                      <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-medium text-red-500 ring-1 ring-inset ring-red-500/20">Error</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-red-500/80">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">warning</span>
                        API Key expired
                      </span>
                      <a className="underline font-semibold hover:text-red-400" href="#">Fix now</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors">
                      <span className="material-symbols-outlined text-[20px]">more_vert</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 rounded-xl bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#232f48] shadow-lg overflow-hidden flex flex-col">
              <div className="p-5 border-b border-slate-100 dark:border-[#232f48]">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Add New Wallet</h2>
                <p className="text-sm text-slate-500 dark:text-[#92a4c9] mt-1">Connect a new exchange or blockchain wallet.</p>
              </div>
              <div className="p-5 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Select Platform</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="aspect-square sm:aspect-auto sm:h-20 rounded-lg border-2 border-primary bg-primary/10 flex flex-col items-center justify-center gap-1 transition-all hover:bg-primary/20">
                      <span className="material-symbols-outlined text-primary text-[28px]">currency_bitcoin</span>
                      <span className="text-xs font-bold text-primary">Binance</span>
                    </button>
                    <button className="aspect-square sm:aspect-auto sm:h-20 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#232f48] flex flex-col items-center justify-center gap-1 transition-all hover:bg-slate-100 dark:hover:bg-[#2f3e5e]">
                      <span className="material-symbols-outlined text-slate-500 dark:text-slate-400 text-[28px]">water_drop</span>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Sui</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Wallet Nickname</label>
                    <input className="h-10 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111722] px-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="e.g. Binance Savings" type="text" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">API Key</label>
                    <div className="relative">
                      <input className="h-10 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111722] pl-3 pr-10 text-sm font-mono text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" type="text" value="xb02...93X" readOnly />
                      <button className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-slate-600 dark:hover:text-white">
                        <span className="material-symbols-outlined text-[18px]">content_paste</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">API Secret</label>
                    <div className="relative">
                       <input className="h-10 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111722] pl-3 pr-10 text-sm font-mono text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="••••••••••••••••" type="password" />
                       <button className="absolute right-0 top-0 h-full px-3 text-slate-400 hover:text-slate-600 dark:hover:text-white">
                          <span className="material-symbols-outlined text-[18px]">visibility_off</span>
                       </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 rounded-lg bg-slate-50 dark:bg-[#111722] p-3">
                   <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                         <span className="text-sm font-bold text-slate-900 dark:text-white">Read Only</span>
                         <span className="text-xs text-slate-500 dark:text-[#92a4c9]">Recommended for security</span>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                         <span className="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out translate-x-6"></span>
                      </button>
                   </div>
                   <div className="flex items-center justify-between opacity-50">
                      <div className="flex flex-col">
                         <span className="text-sm font-bold text-slate-900 dark:text-white">Enable Trading</span>
                         <span className="text-xs text-slate-500 dark:text-[#92a4c9]">Allows executing orders</span>
                      </div>
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700 transition-colors focus:outline-none">
                         <span className="inline-block h-4 w-4 transform rounded-full bg-slate-400 transition duration-200 ease-in-out translate-x-1"></span>
                      </button>
                   </div>
                </div>

                <button className="flex w-full items-center justify-center rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#192233]">
                  <span className="material-symbols-outlined mr-2 text-[20px]">link</span>
                  Connect Wallet
                </button>

                <div className="flex items-start gap-2 text-xs text-slate-500 dark:text-[#92a4c9] mt-2">
                  <span className="material-symbols-outlined shrink-0 text-[16px]">lock</span>
                  <p>Your keys are encrypted with AES-256 and never shared with third parties.</p>
                </div>
              </div>
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 via-primary to-purple-600"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard: React.FC<any> = ({ title, value, valueColor }) => (
  <div className="p-4 rounded-xl bg-white dark:bg-[#192233] border border-slate-200 dark:border-transparent shadow-sm">
    <p className="text-xs font-medium text-slate-500 dark:text-[#92a4c9] uppercase tracking-wider mb-1">{title}</p>
    <p className={`text-xl font-bold ${valueColor || 'text-slate-900 dark:text-white'}`}>{value}</p>
  </div>
);

const WalletCard: React.FC<any> = ({ name, icon, iconBg, iconColor, borderColor, status, synced, detail, balance, change, changeNegative }) => (
  <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-[#192233] p-5 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-all">
    <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
      <div className={`size-12 rounded-full ${iconBg} flex items-center justify-center shrink-0 border ${borderColor}`}>
        <span className={`material-symbols-outlined ${iconColor} text-[28px]`}>{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">{name}</h3>
          <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20">{status}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-[#92a4c9]">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">sync</span>
            {synced}
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="font-mono text-xs opacity-70">{detail}</span>
        </div>
      </div>
      <div className="flex items-center gap-2 self-end sm:self-center">
        <div className="text-right mr-2 hidden sm:block">
          <p className="text-sm font-bold text-slate-900 dark:text-white">{balance}</p>
          <p className={`text-xs ${changeNegative ? 'text-red-500' : 'text-green-500'}`}>{change}</p>
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-[#232f48] transition-colors">
          <span className="material-symbols-outlined text-[20px]">more_vert</span>
        </button>
      </div>
    </div>
  </div>
);

export default Wallets;