import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 30 },
  { name: 'B', value: 60 },
  { name: 'C', value: 45 },
  { name: 'D', value: 80 },
  { name: 'E', value: 50 },
  { name: 'F', value: 95 },
  { name: 'G', value: 60 },
  { name: 'H', value: 110 },
  { name: 'I', value: 85 },
  { name: 'J', value: 130 },
];

const Holdings: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto">
        {/* Mobile Header logic is in Layout, we assume desktop/responsive handling via main container */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-slate-800 sticky top-0 z-20">
            <div className="flex items-center gap-2">
                <div className="bg-primary/20 rounded-full size-8 flex items-center justify-center text-primary font-bold">C</div>
                <span className="font-bold dark:text-white">CryptoManager</span>
            </div>
            <button className="text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </div>

        <div className="flex flex-col max-w-[1200px] mx-auto w-full p-4 lg:p-8 gap-6">
            <div className="flex flex-wrap justify-between items-end gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Portfolio Overview</h2>
                    <p className="text-text-secondary text-base font-normal">Manage your asset distribution and track performance across wallets.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-card-dark border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-white text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[18px] mr-2">visibility</span>
                        Hide Balances
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-slate-800 text-white text-sm font-bold hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[18px] mr-2">download</span>
                        Export Report
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <OverviewCard 
                    title="Total Net Worth" 
                    value="$45,230.00" 
                    change="+5.4%" 
                    icon="account_balance"
                    iconColor="text-primary"
                />
                <OverviewCard 
                    title="Total Profit/Loss" 
                    value="+$1,240.50" 
                    change="+12.1%" 
                />
                <OverviewCard 
                    title="24h Change" 
                    value="+3.2%" 
                    change="+$342.10" 
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-slate-800/50">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Asset Allocation</h3>
                            <p className="text-text-secondary text-sm">Distribution across tokens</p>
                        </div>
                        <button className="text-primary text-sm font-bold hover:underline">View Details</button>
                    </div>
                    <div className="h-64 w-full mt-4">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                <linearGradient id="colorWave" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#135bec" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                                </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="value" stroke="#135bec" strokeWidth={3} fillOpacity={1} fill="url(#colorWave)" />
                            </AreaChart>
                         </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mt-4">
                        <LegendItem color="bg-primary" label="BTC 45%" />
                        <LegendItem color="bg-primary/70" label="ETH 25%" />
                        <LegendItem color="bg-primary/40" label="SUI 15%" />
                        <LegendItem color="bg-slate-600" label="USDT 15%" />
                    </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-slate-800/50">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Wallet Distribution</h3>
                            <p className="text-text-secondary text-sm">Holdings by location</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 mt-4 justify-center h-full">
                        <ProgressBar label="Binance" percent={40} color="bg-primary" />
                        <ProgressBar label="SUI Wallet" percent={35} color="bg-primary/80" />
                        <ProgressBar label="MetaMask" percent={15} color="bg-primary/60" />
                        <ProgressBar label="Cold Storage" percent={10} color="bg-slate-500" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Wallet Integration Status</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <StatusCard name="Binance" icon="currency_bitcoin" color="text-yellow-500" bg="bg-yellow-500/20" connected />
                    <StatusCard name="SUI Wallet" icon="water_drop" color="text-blue-500" bg="bg-blue-500/20" connected />
                    <StatusCard name="MetaMask" icon="pets" color="text-orange-500" bg="bg-orange-500/20" connected />
                    <StatusCard name="Ledger" icon="lock" color="text-slate-500" bg="bg-slate-500/20" disconnected />
                </div>
            </div>

            <div className="flex flex-col gap-4 pb-8">
                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Assets Breakdown</h3>
                <div className="w-full overflow-x-auto rounded-xl border border-gray-100 dark:border-slate-800/50 bg-white dark:bg-card-dark shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 dark:border-slate-800">
                                <th className="p-4 text-xs font-bold uppercase text-text-secondary whitespace-nowrap">Asset Name</th>
                                <th className="p-4 text-xs font-bold uppercase text-text-secondary text-right whitespace-nowrap">Price</th>
                                <th className="p-4 text-xs font-bold uppercase text-text-secondary text-right whitespace-nowrap">Balance</th>
                                <th className="p-4 text-xs font-bold uppercase text-text-secondary text-right whitespace-nowrap">Value</th>
                                <th className="p-4 text-xs font-bold uppercase text-text-secondary text-right whitespace-nowrap">Allocation</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                             <BreakdownRow icon="B" iconBg="bg-orange-500" name="Bitcoin" ticker="BTC" price="$42,150.00" balance="0.482 BTC" value="$20,353.50" alloc="45%" />
                             <BreakdownRow icon="E" iconBg="bg-indigo-500" name="Ethereum" ticker="ETH" price="$2,250.00" balance="5.02 ETH" value="$11,307.50" alloc="25%" />
                             <BreakdownRow icon="S" iconBg="bg-blue-500" name="Sui" ticker="SUI" price="$1.45" balance="4,679 SUI" value="$6,784.50" alloc="15%" />
                             <BreakdownRow icon="T" iconBg="bg-emerald-500" name="Tether" ticker="USDT" price="$1.00" balance="6,784.50 USDT" value="$6,784.50" alloc="15%" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
};

const OverviewCard: React.FC<any> = ({ title, value, change, icon, iconColor }) => (
    <div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-card-dark shadow-sm border border-gray-100 dark:border-slate-800/50 relative overflow-hidden group">
        {icon && (
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className={`material-symbols-outlined text-6xl ${iconColor}`}>{icon}</span>
            </div>
        )}
        <p className="text-slate-500 dark:text-text-secondary text-sm font-medium uppercase tracking-wider">{title}</p>
        <div className="flex items-end gap-3">
            <p className="text-slate-900 dark:text-white text-3xl font-bold leading-none">{value}</p>
            <span className="flex items-center text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded text-xs font-bold mb-1">
                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> {change}
            </span>
        </div>
    </div>
);

const LegendItem: React.FC<any> = ({ color, label }) => (
    <div className="flex items-center gap-2">
        <div className={`size-3 rounded-full ${color}`}></div>
        <span className="text-xs font-bold text-text-secondary uppercase">{label}</span>
    </div>
);

const ProgressBar: React.FC<any> = ({ label, percent, color }) => (
    <div className="flex flex-col gap-2">
        <div className="flex justify-between text-xs font-bold tracking-wide uppercase">
            <span className="text-slate-700 dark:text-slate-300">{label}</span>
            <span className="text-text-secondary">{percent}%</span>
        </div>
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className={`h-full ${color} rounded-full`} style={{ width: `${percent}%` }}></div>
        </div>
    </div>
);

const StatusCard: React.FC<any> = ({ name, icon, color, bg, connected, disconnected }) => (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card-dark border border-gray-100 dark:border-slate-800/50">
        <div className={`size-10 rounded-full ${bg} flex items-center justify-center ${color}`}>
            <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-bold text-slate-900 dark:text-white">{name}</span>
            <div className="flex items-center gap-1.5">
                <div className={`size-2 rounded-full ${connected ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                <span className="text-xs text-text-secondary">{connected ? 'Connected' : 'Disconnected'}</span>
            </div>
        </div>
    </div>
);

const BreakdownRow: React.FC<any> = ({ icon, iconBg, name, ticker, price, balance, value, alloc }) => (
    <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-gray-100 dark:border-slate-800/50">
        <td className="p-4">
            <div className="flex items-center gap-3">
                <div className={`${iconBg} rounded-full size-8 flex items-center justify-center text-white font-bold text-xs`}>{icon}</div>
                <div className="flex flex-col">
                    <span className="text-slate-900 dark:text-white font-bold">{name}</span>
                    <span className="text-text-secondary text-xs">{ticker}</span>
                </div>
            </div>
        </td>
        <td className="p-4 text-right text-slate-900 dark:text-white font-medium">{price}</td>
        <td className="p-4 text-right text-slate-900 dark:text-white font-medium">{balance}</td>
        <td className="p-4 text-right text-slate-900 dark:text-white font-bold">{value}</td>
        <td className="p-4 text-right">
            <span className="inline-block px-2 py-1 rounded bg-primary/10 text-primary text-xs font-bold">{alloc}</span>
        </td>
    </tr>
);

export default Holdings;