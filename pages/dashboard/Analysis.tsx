import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const trendData = [
  { month: '1月', value: 250 },
  { month: '2月', value: 320 },
  { month: '3月', value: 410 },
  { month: '4月', value: 480 },
  { month: '5月', value: 550 },
  { month: '6月', value: 680 },
];

const Analysis: React.FC = () => {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-[1600px] mx-auto">
       <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">存储分析</h1>
          <p className="text-white/60">硬件存储与产品选择平台
          数据洞悉未来</p>
        </div>

        {/* Scan Action Card */}
        <div className="bg-gradient-to-r from-surface-dark to-white/5 border border-white/10 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">document_scanner</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">扫描您的存储空间</h3>
              <p className="text-white/60 max-w-xl">
                同意我们扫描您的存储空间，以获取准确的使用数据、未来用量预测和个性化产品推荐。我们采用先进的加密技术保护您的隐私。
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/20">
            同意并扫描
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trend Chart */}
          <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold">存储总量上升趋势</h3>
              <div className="flex gap-2">
                 <button className="px-3 py-1 bg-primary/20 text-primary rounded text-sm font-medium">6个月</button>
                 <button className="px-3 py-1 bg-white/5 hover:bg-white/10 text-white/60 rounded text-sm transition-colors">1年</button>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#137fec" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#fff', opacity: 0.5}} dy={10} />
                  <Area type="monotone" dataKey="value" stroke="#137fec" strokeWidth={3} fillOpacity={1} fill="url(#trendGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Breakdown */}
          <div className="flex flex-col gap-6">
             <div className="bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center flex-1">
                <h3 className="text-lg font-bold mb-4 self-start">当前存储使用量</h3>
                <div className="relative size-48">
                  <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-white/10 stroke-current" strokeWidth="8" fill="none" cx="50" cy="50" r="40" />
                    <circle className="text-primary stroke-current" strokeWidth="8" strokeLinecap="round" fill="none" cx="50" cy="50" r="40" strokeDasharray="251.2" strokeDashoffset="62.8" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">75%</span>
                    <span className="text-sm text-white/50">已使用</span>
                  </div>
                </div>
             </div>

             <div className="bg-white/5 border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">月度存储量</h3>
                <div className="space-y-4">
                  {[
                    { m: '六月', v: '495 TB', w: '95%' },
                    { m: '五月', v: '450 TB', w: '85%' },
                    { m: '四月', v: '405 TB', w: '75%' },
                  ].map((item) => (
                    <div key={item.m} className="space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-white/60">{item.m}</span>
                         <span className="font-bold">{item.v}</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className="h-full bg-primary rounded-full" style={{ width: item.w }}></div>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
    </div>
  );
};

export default Analysis;