import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto">
        <header className="h-16 bg-white dark:bg-[#111722] border-b border-slate-200 dark:border-[#232f48] flex items-center justify-between px-4 md:px-10 shrink-0 sticky top-0 z-10">
            <div className="md:hidden flex items-center gap-3 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary">currency_bitcoin</span>
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">CryptoManager</h2>
            </div>
            <div className="hidden md:block"></div>
            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-[#232f48] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#324467] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">notifications</span>
                </button>
                <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-[#232f48] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#324467] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">help</span>
                </button>
                <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-transparent hover:border-primary cursor-pointer transition-colors" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD3VjuK17D2mWlUulnCz8v9_PWUU9Gk9H1M-n51i2bY3bbS6ypfVCslcQXCf3hcPqsT1I8f4LXqWVAnVZq12BY-W7suMZ01P5hq1CLw7tih3q45XSa_afz9TSK4LOc4e8GCUwhn8oMt0-hu6qMgr3s-17kk84j-hd7-WYZTLV19NCF0pyw181smDN4PQokxCCczUNSYM2mFsKqHVfN8HGngFd57ZxQWeYGob1WArxvaQxvF-2SsR-rb_qG9lI3zzR-eiduriS5Qlbw')" }}></div>
            </div>
        </header>

        <div className="flex-1 px-4 md:px-10 py-8 w-full max-w-[1000px] mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Account Settings</h1>
                <p className="text-slate-500 dark:text-[#92a4c9] text-base font-normal">Manage your profile, security, connected wallets, and notifications.</p>
            </div>

            <div className="border-b border-slate-200 dark:border-[#324467]">
                <div className="flex gap-8 overflow-x-auto">
                    <TabLink label="Profile" active />
                    <TabLink label="Security" />
                    <TabLink label="Wallets" />
                    <TabLink label="Notifications" />
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight">Profile Information</h2>
                <div className="bg-white dark:bg-[#1e293b] rounded-xl p-6 border border-slate-200 dark:border-[#232f48] shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-6 w-full">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 shrink-0 shadow-inner" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkwCXwHjQGhnPZeQXGZ-QsMbmxboPo6ZYh-f8VeEIW_2y2ysIv-wH7DTVXS609V2MPyn3011duXshgEemhkXb9Pr4zX_lSLJ08MMlFy9s26VcdqMAXd9M-sPs6TQs-XcVOoAZ2RGmGc514LjStebs8oDC2XnGO0f8Ag6jYEvmtTmyI_B4oHn6pyVvfQLhaTn9Vs00juvhqdI5u6YqDzCt4aiFaEbFMjiH6S1A-dQ4MbymEgCtKAGoeA7_jfAozpOnWTjFZVo-BiY4')" }}></div>
                            <div className="flex flex-col">
                                <p className="text-slate-900 dark:text-white text-xl font-bold">Alex Trader</p>
                                <p className="text-slate-500 dark:text-[#92a4c9] text-sm mb-2">alex.trader@example.com</p>
                                <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-500 ring-1 ring-inset ring-green-500/20 w-fit">Pro Member</span>
                            </div>
                        </div>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-[#324467] text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-[#405680] transition-colors whitespace-nowrap">Upload New</button>
                            <button className="flex-1 sm:flex-none items-center justify-center rounded-lg h-10 px-4 border border-slate-200 dark:border-[#324467] text-slate-500 dark:text-[#92a4c9] text-sm font-bold hover:bg-slate-50 dark:hover:bg-[#232f48] transition-colors">Remove</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <InputGroup label="Display Name" defaultValue="Alex Trader" type="text" />
                        <InputGroup label="Email Address" defaultValue="alex.trader@example.com" type="email" />
                        <SelectGroup label="Default Currency" options={["USD - United States Dollar", "EUR - Euro", "GBP - British Pound"]} />
                        <SelectGroup label="Timezone" options={["(GMT-05:00) Eastern Time (US & Canada)", "(GMT+00:00) UTC", "(GMT+01:00) Central European Time"]} />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button className="flex min-w-[120px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">Save Changes</button>
                    </div>
                </div>

                <hr className="border-slate-200 dark:border-[#232f48] my-2"/>

                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight">Connected Wallets</h2>
                        <button className="flex items-center gap-2 text-primary text-sm font-bold hover:text-blue-400">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            Connect New
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <WalletItem 
                            name="Binance Exchange" 
                            status="Connected" 
                            detail="API Key: ••••••••8X29" 
                            icon="currency_bitcoin" 
                            iconBg="bg-[#F3BA2F]" 
                            iconColor="text-black" 
                        />
                        <WalletItem 
                            name="Sui Wallet" 
                            status="Synced" 
                            detail="0x71C...92A1" 
                            icon="water_drop" 
                            iconBg="bg-[#4DA2FF]" 
                            iconColor="text-white" 
                        />
                    </div>
                </div>

                <hr className="border-slate-200 dark:border-[#232f48] my-2"/>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight">Security</h2>
                        <div className="bg-white dark:bg-[#1e293b] p-5 rounded-xl border border-slate-200 dark:border-[#232f48]">
                            <div className="flex items-start justify-between">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">lock</span>
                                        <p className="font-bold text-slate-900 dark:text-white">Two-Factor Authentication</p>
                                    </div>
                                    <p className="text-sm text-slate-500 dark:text-[#92a4c9]">Add an extra layer of security to your account.</p>
                                </div>
                                <ToggleSwitch checked />
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#1e293b] p-5 rounded-xl border border-slate-200 dark:border-[#232f48]">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">key</span>
                                    <p className="font-bold text-slate-900 dark:text-white">Change Password</p>
                                </div>
                                <input className="h-10 w-full rounded-lg border border-slate-300 dark:border-[#324467] bg-gray-50 dark:bg-[#232f48] px-3 text-slate-900 dark:text-white text-sm outline-none focus:border-primary" placeholder="Current Password" type="password" />
                                <input className="h-10 w-full rounded-lg border border-slate-300 dark:border-[#324467] bg-gray-50 dark:bg-[#232f48] px-3 text-slate-900 dark:text-white text-sm outline-none focus:border-primary" placeholder="New Password" type="password" />
                                <button className="w-full h-10 rounded-lg bg-[#232f48] hover:bg-[#324467] text-white text-sm font-bold transition-colors">Update Password</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight">Notifications</h2>
                        <div className="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-[#232f48] overflow-hidden">
                             <NotificationItem title="Portfolio Summary" subtitle="Daily email digest of your assets" />
                             <NotificationItem title="Price Alerts" subtitle="Push notifications for >5% moves" />
                             <NotificationItem title="Security Alerts" subtitle="New logins and API key usage" isLast />
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-red-900/30">
                    <h3 className="text-red-500 font-bold text-lg mb-2">Danger Zone</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                        <p className="text-sm text-slate-500 dark:text-[#92a4c9]">Permanently delete your account and all associated data. This action cannot be undone.</p>
                        <button className="whitespace-nowrap rounded-lg bg-red-500/10 px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-500 hover:text-white transition-all">Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

const TabLink: React.FC<any> = ({ label, active }) => (
    <a href="#" className={`flex flex-col items-center justify-center border-b-[3px] ${active ? 'border-primary text-primary dark:text-white' : 'border-transparent text-slate-500 dark:text-[#92a4c9] hover:text-slate-900 dark:hover:text-white'} pb-3 pt-2 px-2 min-w-max transition-colors`}>
        <p className="text-sm font-bold leading-normal">{label}</p>
    </a>
);

const InputGroup: React.FC<any> = ({ label, type, defaultValue }) => (
    <div className="flex flex-col gap-2">
        <label className="text-slate-900 dark:text-white text-sm font-medium">{label}</label>
        <input className="h-12 w-full rounded-lg border border-slate-300 dark:border-[#324467] bg-white dark:bg-[#1e293b] px-4 text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" type={type} defaultValue={defaultValue} />
    </div>
);

const SelectGroup: React.FC<any> = ({ label, options }) => (
    <div className="flex flex-col gap-2">
        <label className="text-slate-900 dark:text-white text-sm font-medium">{label}</label>
        <div className="relative">
            <select className="h-12 w-full appearance-none rounded-lg border border-slate-300 dark:border-[#324467] bg-white dark:bg-[#1e293b] px-4 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
                {options.map((opt: string) => <option key={opt}>{opt}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 dark:text-[#92a4c9]">
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    </div>
);

const WalletItem: React.FC<any> = ({ name, status, detail, icon, iconBg, iconColor }) => (
    <div className="bg-white dark:bg-[#1e293b] p-4 rounded-xl border border-slate-200 dark:border-[#232f48] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group">
        <div className="flex items-center gap-4">
            <div className={`h-12 w-12 rounded-full ${iconBg} flex items-center justify-center ${iconColor} font-bold text-xl shrink-0`}>
                <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
                <h3 className="text-slate-900 dark:text-white font-bold text-lg">{name}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <p className="text-xs text-green-500 font-medium uppercase tracking-wide">{status}</p>
                    <span className="text-slate-500 dark:text-[#92a4c9] text-xs ml-2 font-mono">{detail}</span>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button className="p-2 text-slate-500 dark:text-[#92a4c9] hover:bg-slate-100 dark:hover:bg-[#324467] rounded-lg transition-colors" title="Settings">
                <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Disconnect">
                <span className="material-symbols-outlined">link_off</span>
            </button>
        </div>
    </div>
);

const ToggleSwitch: React.FC<{ checked?: boolean }> = ({ checked }) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input defaultChecked={checked} className="sr-only peer" type="checkbox" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
    </label>
);

const NotificationItem: React.FC<any> = ({ title, subtitle, isLast }) => (
    <div className={`flex items-center justify-between p-4 ${!isLast ? 'border-b border-slate-200 dark:border-[#232f48]' : ''}`}>
        <div className="flex flex-col">
            <p className="font-bold text-slate-900 dark:text-white text-sm">{title}</p>
            <p className="text-xs text-slate-500 dark:text-[#92a4c9]">{subtitle}</p>
        </div>
        <ToggleSwitch checked />
    </div>
);

export default Settings;