import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import AuroraCapacity from '../../components/AuroraCapacity';

const data = [
  { name: '4周前', value: 200 },
  { name: '3周前', value: 380 },
  { name: '2周前', value: 150 },
  { name: '1周前', value: 410 },
  { name: '本周', value: 375 },
];

const Overview: React.FC = () => {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">存储概览</h1>
          <p className="text-white/60">查看您所有存储设备的使用情况和性能指标。</p>
        </div>
        <div className="flex bg-white/5 rounded-lg p-1 gap-1">
          {['过去30天', '过去90天', '过去一年', '所有时间'].map((label, idx) => (
            <button 
              key={label} 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${idx === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: '总容量', value: '500 TB', change: '+0%', positive: true },
          { label: '已用容量', value: '375 TB', change: '+2.5%', positive: false },
          { label: '剩余容量', value: '125 TB', change: '-2.5%', positive: false, red: true },
          { label: '使用率', value: '75%', change: '+2.5%', positive: false },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/[0.07] transition-colors">
            <p className="text-white/60 font-medium mb-2">{stat.label}</p>
            <p className="text-3xl font-bold tracking-tight mb-2">{stat.value}</p>
            <p className={`text-sm font-medium ${stat.red ? 'text-red-500' : 'text-green-500'}`}>{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: Aurora Visual */}
        <div className="xl:col-span-1 h-full">
           <AuroraCapacity percentage={75} used="375 TB" total="500 TB" />
        </div>

        {/* Right: Trend Chart */}
        <div className="xl:col-span-2 bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold mb-1">存储使用历史趋势</h3>
              <div className="flex items-baseline gap-2">
                 <span className="text-3xl font-bold">375 TB</span>
                 <span className="text-green-500 text-sm font-bold">+12.4%</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#137fec" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#9CA3AF', fontSize: 12}} 
                  dy={10}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#137fec" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;