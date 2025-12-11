import React from 'react';

const Transactions: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-dark overflow-y-auto">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-dark bg-background-dark px-6 py-4 lg:px-10">
        <div className="flex items-center gap-4 text-white lg:hidden">
          <span className="material-symbols-outlined cursor-pointer">menu</span>
          <h2 className="text-white text-lg font-bold leading-tight">Transactions</h2>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-white">
          <div className="flex items-center gap-2 text-sm">
            <a className="text-[#92a4c9] font-medium hover:text-white transition-colors" href="#">Home</a>
            <span className="text-[#92a4c9]">/</span>
            <span className="text-white font-medium">Transactions</span>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <div className="flex gap-2">
             <button className="flex items-center justify-center rounded-lg size-10 bg-[#232f48] text-white hover:bg-[#3b4d6e] transition-colors">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
             </button>
             <button className="flex items-center justify-center rounded-lg size-10 bg-[#232f48] text-white hover:bg-[#3b4d6e] transition-colors">
                <span className="material-symbols-outlined text-[20px]">forum</span>
             </button>
          </div>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-[#232f48]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwweMTHVnaoYhmpbKl6trCSwc3lES_-V_AN31s4JHD4kmMBdI5zuhp0KZC31o-ElH3o6nin4eKBYgERDL6fWsIqaY6DsMcOKTIsPZ1ep3Id2QB5PZkOUnuEZa9TJifFu-AKEOfCSIPi_eMtwqbZY_niHzyJA-0PzTvJkmamqVt1pzF3Y4MsdO6w1rkRtbuvI8mACGxRLGDjy3uZuAXOOTEFiYbH4FWRPBcsc6MVXD_sH3QjklCfjsirXSiCkntRb6gjn_8yYVlAvI')" }}></div>
        </div>
      </header>
      
      <main className="flex-1 p-4 lg:p-10">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
             <div className="flex flex-col gap-2">
                <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Transaction History</h1>
                <p className="text-[#92a4c9] text-base font-normal max-w-2xl">View and manage your crypto activity across all connected wallets including SUI, Binance, and MetaMask.</p>
             </div>
             <div className="flex gap-3 flex-wrap">
                <button className="flex items-center gap-2 px-4 h-10 bg-[#232f48] hover:bg-[#2d3b55] rounded-lg text-white text-sm font-bold transition-colors">
                   <span className="material-symbols-outlined text-[18px]">download</span>
                   <span>Export CSV</span>
                </button>
                <button className="flex items-center gap-2 px-4 h-10 bg-primary hover:bg-blue-600 rounded-lg text-white text-sm font-bold shadow-lg shadow-blue-900/20 transition-colors">
                   <span className="material-symbols-outlined text-[18px]">sync</span>
                   <span>Sync Wallets</span>
                </button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <StatBox title="Total Volume (30d)" value="$1,245,300.00" trend="12%" />
             <StatBox title="Net P/L" value="+$12,405.22" valueColor="text-emerald-400" />
             <StatBox title="Gas Fees Paid" value="$432.90" />
             <StatBox title="Active Wallets" value="4" subtext="/ 6 Connected" />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 bg-[#1a2230] p-4 rounded-xl border border-border-dark items-center">
             <div className="relative flex-1 w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#92a4c9]">search</span>
                <input className="w-full bg-[#111722] text-white border border-[#232f48] rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-[#586580]" placeholder="Search by asset, hash, or address..." type="text" />
             </div>
             <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                <SelectDropdown options={['All Wallets', 'SUI Mainnet', 'Binance', 'MetaMask']} />
                <SelectDropdown options={['All Types', 'Buy', 'Sell', 'Swap', 'Transfer']} />
                <div className="relative">
                   <button className="flex items-center gap-2 bg-[#111722] text-white border border-[#232f48] rounded-lg px-4 py-2.5 text-sm hover:border-primary transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-[#92a4c9]">calendar_today</span>
                      <span>Last 30 Days</span>
                   </button>
                </div>
                <button className="text-[#92a4c9] hover:text-white text-sm font-medium px-2 underline decoration-transparent hover:decoration-white transition-all">Clear</button>
             </div>
          </div>

          <div className="bg-[#1a2230] rounded-xl border border-border-dark overflow-hidden flex flex-col shadow-xl shadow-black/20">
             <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-[#151b26] border-b border-border-dark">
                         <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#92a4c9]">Type</th>
                         <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#92a4c9]">Asset Pair</th>
                         <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#92a4c9]">Date & Time</th>
                         <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#92a4c9] text-right">Price</th>
                         <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#92a4c9] text-right">Total Value</th>
                         <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#92a4c9]">Wallet</th>
                         <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#92a4c9]">Status</th>
                         <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-[#92a4c9] text-center">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-[#232f48]">
                      <TransactionRow 
                        type="Swap" typeIcon="swap_horiz" typeColor="text-primary" typeBg="bg-[#135bec]/20"
                        pair="100 SUI → 120 USDC" fee="Fee: 0.01 SUI"
                        date="Oct 24, 2023" time="14:30:45"
                        price="$1.20" total="$120.00"
                        wallet="SUI Mainnet" walletIconBg="bg-blue-500"
                        status="Completed"
                      />
                      <TransactionRow 
                        type="Buy" typeIcon="arrow_downward" typeColor="text-emerald-400" typeBg="bg-emerald-500/20"
                        pair="0.45 BTC" fee="From: Fiat (USD)"
                        date="Oct 23, 2023" time="09:15:22"
                        price="$34,200.50" total="$15,390.22"
                        wallet="Binance" walletIconBg="bg-yellow-500"
                        status="Completed"
                      />
                      <TransactionRow 
                        type="Sell" typeIcon="arrow_upward" typeColor="text-rose-400" typeBg="bg-rose-500/20"
                        pair="5.2 ETH → USDT" fee="To: External Wallet"
                        date="Oct 23, 2023" time="08:45:10"
                        price="$1,850.00" total="$9,620.00"
                        wallet="MetaMask" walletIconBg="bg-orange-500"
                        status="Pending" statusPending
                      />
                      <TransactionRow 
                        type="Transfer" typeIcon="send" typeColor="text-[#92a4c9]" typeBg="bg-[#92a4c9]/20"
                        pair="500 USDT" fee="To: 0x82...9a21"
                        date="Oct 22, 2023" time="19:12:05"
                        price="$1.00" total="$500.00"
                        wallet="SUI Mainnet" walletIconBg="bg-blue-500"
                        status="Completed"
                      />
                      <TransactionRow 
                        type="Deposit" typeIcon="account_balance_wallet" typeColor="text-emerald-400" typeBg="bg-emerald-500/20"
                        pair="15 SOL" fee="From: External"
                        date="Oct 21, 2023" time="11:05:45"
                        price="$32.50" total="$487.50"
                        wallet="Phantom" walletIconBg="bg-purple-500"
                        status="Completed"
                      />
                   </tbody>
                </table>
             </div>
             <div className="flex items-center justify-between px-6 py-4 bg-[#151b26] border-t border-border-dark">
                <span className="text-sm text-[#92a4c9]">Showing <span className="text-white font-bold">1-5</span> of <span class="text-white font-bold">128</span> transactions</span>
                <div className="flex gap-2">
                   <button className="flex items-center justify-center size-8 rounded border border-[#232f48] text-[#92a4c9] hover:bg-[#232f48] hover:text-white transition-colors disabled:opacity-50">
                      <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                   </button>
                   <button className="flex items-center justify-center size-8 rounded bg-primary text-white font-bold text-sm">1</button>
                   <button className="flex items-center justify-center size-8 rounded border border-[#232f48] text-[#92a4c9] hover:bg-[#232f48] hover:text-white transition-colors text-sm">2</button>
                   <button className="flex items-center justify-center size-8 rounded border border-[#232f48] text-[#92a4c9] hover:bg-[#232f48] hover:text-white transition-colors text-sm">3</button>
                   <span className="flex items-center justify-center size-8 text-[#92a4c9]">...</span>
                   <button className="flex items-center justify-center size-8 rounded border border-[#232f48] text-[#92a4c9] hover:bg-[#232f48] hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                   </button>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const StatBox: React.FC<any> = ({ title, value, valueColor, trend, subtext }) => (
  <div className="bg-[#1a2230] p-5 rounded-xl border border-border-dark flex flex-col gap-1">
    <span className="text-[#92a4c9] text-sm font-medium">{title}</span>
    <div className="flex items-baseline gap-2">
      <span className={`${valueColor || 'text-white'} text-2xl font-bold font-display`}>{value}</span>
      {trend && (
        <span className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
          <span className="material-symbols-outlined text-[12px]">trending_up</span> {trend}
        </span>
      )}
      {subtext && <span className="text-[#92a4c9] text-sm">{subtext}</span>}
    </div>
  </div>
);

const SelectDropdown: React.FC<{ options: string[] }> = ({ options }) => (
  <div className="relative group">
    <select className="appearance-none bg-[#111722] text-white border border-[#232f48] rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-primary cursor-pointer min-w-[140px]">
      {options.map(opt => <option key={opt}>{opt}</option>)}
    </select>
    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#92a4c9] pointer-events-none text-sm">expand_more</span>
  </div>
);

const TransactionRow: React.FC<any> = ({ type, typeIcon, typeColor, typeBg, pair, fee, date, time, price, total, wallet, walletIconBg, status, statusPending }) => (
  <tr className="group hover:bg-[#232f48]/50 transition-colors">
    <td className="py-4 px-6 align-middle">
      <div className="flex items-center gap-3">
        <div className={`size-9 rounded-full ${typeBg} flex items-center justify-center ${typeColor}`}>
          <span className="material-symbols-outlined text-[20px]">{typeIcon}</span>
        </div>
        <span className="text-white font-medium text-sm">{type}</span>
      </div>
    </td>
    <td className="py-4 px-6 align-middle">
      <div className="flex flex-col">
        <span className="text-white text-sm font-medium">{pair}</span>
        <span className="text-[#92a4c9] text-xs">{fee}</span>
      </div>
    </td>
    <td className="py-4 px-6 align-middle">
      <div className="flex flex-col">
        <span className="text-white text-sm">{date}</span>
        <span className="text-[#92a4c9] text-xs">{time}</span>
      </div>
    </td>
    <td className="py-4 px-6 align-middle text-right">
      <span className="text-white text-sm font-medium">{price}</span>
    </td>
    <td className="py-4 px-6 align-middle text-right">
      <span className="text-white text-sm font-bold">{total}</span>
    </td>
    <td className="py-4 px-6 align-middle">
      <div className="flex items-center gap-2">
        <div className={`size-5 rounded-full ${walletIconBg}`}></div>
        <span className="text-[#92a4c9] text-sm">{wallet}</span>
      </div>
    </td>
    <td className="py-4 px-6 align-middle">
      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border ${statusPending ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
        {statusPending ? (
           <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>
        ) : (
           <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        )}
        {status}
      </span>
    </td>
    <td className="py-4 px-6 align-middle text-center">
      <button className="text-[#92a4c9] hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
        <span className="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
    </td>
  </tr>
);

export default Transactions;