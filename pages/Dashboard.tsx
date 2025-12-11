import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 100000 },
  { name: 'Tue', value: 105000 },
  { name: 'Wed', value: 102000 },
  { name: 'Thu', value: 108000 },
  { name: 'Fri', value: 115000 },
  { name: 'Sat', value: 122400 },
  { name: 'Sun', value: 124592 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark overflow-y-auto">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-[#111722] border-b border-slate-200 dark:border-[#232f48] flex-shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Overview</h2>
          <span className="text-xs font-medium text-slate-500 dark:text-[#92a4c9] py-1 px-2 bg-slate-100 dark:bg-[#232f48] rounded-md hidden sm:inline-block">Last updated: Just now</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center relative w-64">
            <span className="material-symbols-outlined absolute left-3 text-slate-400">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-[#232f48] border-none rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50 outline-none" placeholder="Search assets..." type="text" />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-600 dark:text-[#92a4c9] hover:bg-slate-100 dark:hover:bg-[#232f48] rounded-lg transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#111722]"></span>
            </button>
            <button className="p-2 text-slate-600 dark:text-[#92a4c9] hover:bg-slate-100 dark:hover:bg-[#232f48] rounded-lg transition-colors">
              <span className="material-symbols-outlined">help</span>
            </button>
          </div>
          <div className="flex items-center gap-3 border-l border-slate-200 dark:border-[#232f48] pl-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Alex Morgan</p>
              <p className="text-xs text-slate-500 dark:text-[#92a4c9]">Pro Member</p>
            </div>
            <div className="size-10 rounded-full bg-cover bg-center border-2 border-slate-200 dark:border-[#232f48]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCP1MnTXOHGMhE7VkXNvvmfiHSmGG55DFgJekIautyYBgBFaU3K713pNlpgcliqej9FiZCwxQ8g25jxkHbJSNvSBNcuPXeNtXAyGkB06ri2LMd52O3lTi04iwW7ld88yr8tK_7enVSVPfTxuIz3hGzImkBaDCj2B47r0DaYKiDnyD95ELW33mtWDPoWOFTmFaYMkVsALZ5iMQLcxgeULMji0nhcIuo62_VyoBW0XL2m20OL1VzTCEYObXJQ0LBYEyFghm62etj3KFM')" }}></div>
          </div>
        </div>
      </header>

      <div className="p-4 md:p-8 space-y-6 max-w-[1600px] mx-auto w-full">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white dark:bg-[#1a2230] shadow-sm border border-slate-200 dark:border-[#232f48] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-primary">account_balance</span>
            </div>
            <div className="flex flex-col gap-1 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-slate-500 dark:text-[#92a4c9] text-sm font-medium">Total Net Worth</p>
                <button className="text-slate-400 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                </button>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">$124,592.34</h3>
              <div className="flex items-center gap-1 mt-2">
                <span className="flex items-center text-xs font-bold px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-[#0bda5e]">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  +5.2%
                </span>
                <span className="text-xs text-slate-400 ml-1">vs last month</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-white dark:bg-[#1a2230] shadow-sm border border-slate-200 dark:border-[#232f48]">
            <div className="flex flex-col gap-1">
              <p className="text-slate-500 dark:text-[#92a4c9] text-sm font-medium">24h Profit/Loss</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">+$1,204.50</h3>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-xs font-medium text-slate-500 dark:text-[#92a4c9]">Daily PnL</span>
                <div className="h-1.5 w-24 bg-slate-100 dark:bg-[#232f48] rounded-full ml-2 overflow-hidden">
                  <div className="h-full bg-green-500 w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-white dark:bg-[#1a2230] shadow-sm border border-slate-200 dark:border-[#232f48] flex flex-col justify-between">
            <div>
              <p className="text-slate-500 dark:text-[#92a4c9] text-sm font-medium">Top Performer (24h)</p>
              <div className="flex items-center gap-3 mt-3">
                <div className="size-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">SUI</div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Sui Token</p>
                  <p className="text-xs text-slate-500 dark:text-[#92a4c9]">$1.84</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-green-600 dark:text-[#0bda5e] font-bold">+12.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts & Wallets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-xl bg-white dark:bg-[#1a2230] shadow-sm border border-slate-200 dark:border-[#232f48] min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Portfolio Performance</h3>
              <div className="flex bg-slate-100 dark:bg-[#232f48] rounded-lg p-1">
                {['1D', '1W', '1M', '1Y', 'ALL'].map((period, idx) => (
                  <button key={period} className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${idx === 1 ? 'bg-white dark:bg-[#111722] text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 dark:text-[#92a4c9] hover:bg-white dark:hover:bg-[#1a2230]'}`}>
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#135bec" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#92a4c9', fontSize: 12}} dy={10} />
                  <YAxis hide domain={['dataMin - 10000', 'dataMax + 10000']} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e2736', border: '1px solid #232f48', borderRadius: '8px' }}
                    labelStyle={{ color: '#92a4c9' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Value']}
                  />
                  <Area type="monotone" dataKey="value" stroke="#135bec" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
             <div className="p-6 rounded-xl bg-white dark:bg-[#1a2230] shadow-sm border border-slate-200 dark:border-[#232f48] flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">My Wallets</h3>
                  <button className="text-primary text-sm font-medium hover:underline">Manage</button>
                </div>
                <div className="flex flex-col gap-3 max-h-[360px] overflow-y-auto pr-1 custom-scrollbar">
                  <WalletItem 
                    name="Binance" 
                    status="Connected" 
                    value="$45,000" 
                    assets="3 Assets"
                    icon="currency_bitcoin"
                    iconColor="bg-[#F3BA2F]"
                  />
                  <WalletItem 
                    name="SUI Wallet" 
                    status="Connected" 
                    value="$12,500" 
                    assets="1 Asset"
                    icon="water_drop"
                    iconColor="bg-[#4DA2FF]"
                  />
                  <WalletItem 
                    name="MetaMask" 
                    status="Last sync: 1h ago" 
                    statusColor="text-slate-500 dark:text-[#92a4c9]"
                    value="$67,000" 
                    assets="5 Assets"
                    icon="pets"
                    iconColor="bg-[#F6851B]"
                  />
                  <button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-dashed border-slate-300 dark:border-[#92a4c9] text-slate-500 dark:text-[#92a4c9] hover:bg-slate-50 dark:hover:bg-[#232f48] transition-colors text-sm font-medium">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Add New Wallet
                  </button>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="p-6 rounded-xl bg-white dark:bg-[#1a2230] shadow-sm border border-slate-200 dark:border-[#232f48]">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Asset Allocation</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                 <div className="relative size-40 rounded-full bg-[#232f48]" style={{ background: "conic-gradient(#F7931A 0% 35%, #627EEA 35% 60%, #4DA2FF 60% 85%, #26A17B 85% 100%)" }}>
                    <div className="absolute inset-4 bg-white dark:bg-[#1a2230] rounded-full flex items-center justify-center flex-col">
                      <span className="text-xs text-slate-500 dark:text-[#92a4c9]">Total</span>
                      <span className="text-lg font-bold text-slate-900 dark:text-white">4 Assets</span>
                    </div>
                 </div>
                 <div className="flex flex-col gap-3 w-full sm:w-auto">
                    <AllocationItem color="#F7931A" label="BTC" value="35%" />
                    <AllocationItem color="#627EEA" label="ETH" value="25%" />
                    <AllocationItem color="#4DA2FF" label="SUI" value="25%" />
                    <AllocationItem color="#26A17B" label="USDT" value="15%" />
                 </div>
              </div>
           </div>
           
           <div className="lg:col-span-2 p-6 rounded-xl bg-white dark:bg-[#1a2230] shadow-sm border border-slate-200 dark:border-[#232f48] overflow-hidden">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Holdings</h3>
                  <button className="text-primary text-sm font-medium hover:underline">View All</button>
               </div>
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="border-b border-slate-200 dark:border-[#232f48] text-xs uppercase text-slate-500 dark:text-[#92a4c9]">
                       <th className="py-3 pl-2 font-semibold">Asset</th>
                       <th className="py-3 font-semibold">Price</th>
                       <th className="py-3 font-semibold">Balance</th>
                       <th className="py-3 font-semibold">Value</th>
                       <th className="py-3 pr-2 font-semibold text-right">24h Change</th>
                     </tr>
                   </thead>
                   <tbody className="text-sm">
                      <HoldingRow 
                        icon="currency_bitcoin" iconBg="bg-[#F7931A]" name="Bitcoin" ticker="BTC"
                        price="$43,502.10" balance="1.034" value="$45,000.22" change="+2.4%" changeType="pos"
                      />
                      <HoldingRow 
                        icon="token" iconBg="bg-[#627EEA]" name="Ethereum" ticker="ETH"
                        price="$2,250.00" balance="14.05" value="$31,612.50" change="-1.2%" changeType="neg"
                      />
                      <HoldingRow 
                        icon="water_drop" iconBg="bg-[#4DA2FF]" name="Sui" ticker="SUI"
                        price="$1.84" balance="6,793.47" value="$12,500.00" change="+12.4%" changeType="pos"
                      />
                      <HoldingRow 
                        icon="attach_money" iconBg="bg-[#26A17B]" name="Tether" ticker="USDT"
                        price="$1.00" balance="35,479.62" value="$35,479.62" change="0.0%" changeType="neu"
                      />
                   </tbody>
                 </table>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const WalletItem: React.FC<any> = ({ name, status, value, assets, icon, iconColor, statusColor }) => (
  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#232f48] border border-slate-100 dark:border-transparent group cursor-pointer hover:border-primary/30 transition-all">
    <div className="flex items-center gap-3">
      <div className={`size-10 rounded-full ${iconColor} p-2 flex items-center justify-center text-white`}>
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div>
        <p className="font-bold text-sm text-slate-900 dark:text-white">{name}</p>
        <p className={`text-xs flex items-center gap-1 ${statusColor || 'text-green-500'}`}>
          {!statusColor && <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>}
          {status}
        </p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-bold text-sm text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs text-slate-500 dark:text-[#92a4c9]">{assets}</p>
    </div>
  </div>
);

const AllocationItem: React.FC<any> = ({ color, label, value }) => (
  <div className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-2">
      <span className="size-3 rounded-full" style={{ backgroundColor: color }}></span>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>
    </div>
    <span className="text-sm font-bold text-slate-900 dark:text-white">{value}</span>
  </div>
);

const HoldingRow: React.FC<any> = ({ icon, iconBg, name, ticker, price, balance, value, change, changeType }) => {
  const changeColor = changeType === 'pos' ? 'text-green-500' : changeType === 'neg' ? 'text-red-500' : 'text-slate-500 dark:text-[#92a4c9]';
  return (
    <tr className="border-b border-slate-100 dark:border-[#232f48] hover:bg-slate-50 dark:hover:bg-[#232f48]/50 transition-colors">
      <td className="py-3 pl-2">
        <div className="flex items-center gap-3">
          <div className={`size-8 rounded-full ${iconBg} flex items-center justify-center text-white font-bold text-[10px]`}>
             <span className="material-symbols-outlined text-[16px]">{icon}</span>
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{name}</p>
            <p className="text-xs text-slate-500 dark:text-[#92a4c9]">{ticker}</p>
          </div>
        </div>
      </td>
      <td className="py-3 text-slate-700 dark:text-slate-200">{price}</td>
      <td className="py-3 text-slate-700 dark:text-slate-200">{balance}</td>
      <td className="py-3 font-medium text-slate-900 dark:text-white">{value}</td>
      <td className={`py-3 pr-2 text-right font-medium ${changeColor}`}>{change}</td>
    </tr>
  )
}

export default Dashboard;