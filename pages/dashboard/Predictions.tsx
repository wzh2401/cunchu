import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const predictionData = [
  { month: '3月', value: 400 },
  { month: '4月', value: 450 },
  { month: '5月', value: 420 },
  { month: '6月', value: 500 },
  { month: '7月', value: 480 },
  { month: '8月', value: 600 },
  { month: '9月 (预测)', value: 750 },
];

const Recommendations = [
  {
    id: 1,
    name: 'ProDrive 5TB SSD',
    desc: '适合您当前增长率的最佳选择。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeYm2_NYkxlLqbVr0tVACLTA0tes19Iwu4NBPBVEccAwkDnQpJNOb54aG_dxj_krLG-4FhOkwrdHY3X9VDxX7rs2cVxLAjlTMsZAsWHxiJt_lEu-XF2lUk2ZBbpAv_mgQrqe4vbyyTyYw3uzeYZYZflLfb50VEN7fC_ZNnDg5Nk-06zhzUFNTlPj4cuL75WU3X2Hf_XPlOxMU2YIDg7EYUBNO42snW0AK-OMB5bm6HeWuVfJIBQZBb3VRcFETEGfJGfMNzyvTRLiM'
  },
  {
    id: 2,
    name: '云存储 Pro Max',
    desc: '无限扩展，无需担心容量问题。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFNm57yGO9SNCIoRvvtYC1wLhTcGoJTHAPvGRIUb8eSlXa4PKC83umRx4PqytdEuGShyWctPZ0CtahvIKSuGKSrxR-XAmtxa4jqMQiSYJ6vAO7ljU6N_0E1-HTIwBxzCyKhbrSIv6ORf9G-smgjhVuDhgQY_HJczl55qI4tlA0h4cs-fGZNE4JoXZLa88_DQqDQPWZexFOdJEUF7WGIocSFnyMUEVb2HYe5TSuSTR33LRS1XscLa2cDHvHPfaKJ-JOMobkhbP9RtQ'
  },
  {
    id: 3,
    name: '家庭NAS 10TB',
    desc: '经济实惠，满足长期存储需求。',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXtUPITa0rqj6qGKDKkJfXZYdZgYYFaGmBGtgMPVOXoeErjp_2QW5FcDk2q12w5QosIGF4r_7aTQXNsBGtLuVxZ2InMDW5OQ7OGMDCenvkbLlhVbLFYW5S4G5NBxflxIRxzA9FMgYnaR3Z71A_dy1Gt7iajJg3XlKVvEMBOtg8E2JkoVWRktAdiFdn6uTcwY-HRcDKQKb7fnoHwPSyLGXryBHKIWpPlhf3etE4L4wDhshAvudmZWf2RDVkM2sqBLqNUHyyWAdiDLE'
  }
];

const Predictions: React.FC = () => {
  return (
    <div className="p-6 md:p-10 space-y-8 max-w-[1600px] mx-auto">
      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight">使用预测与建议</h1>
        <p className="text-white/60">基于您当前的使用模式，预测未来的存储需求并获取产品建议。</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 border border-white/5 rounded-xl p-6">
          <p className="text-white/60 mb-2">当前用量</p>
          <p className="text-2xl font-bold mb-2">750 GB / 1 TB</p>
          <div className="flex items-center text-green-500 gap-1 text-sm font-medium">
             <span className="material-symbols-outlined text-lg">arrow_upward</span>
             <span>+5% 上月</span>
          </div>
        </div>
        <div className="bg-white/5 border border-white/5 rounded-xl p-6">
          <p className="text-white/60 mb-2">预测增长率</p>
          <p className="text-2xl font-bold mb-2">每月 50 GB</p>
          <p className="text-white/40 text-sm">基于历史数据</p>
        </div>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
          <p className="text-orange-300 mb-2">建议升级时间</p>
          <p className="text-2xl font-bold text-orange-100 mb-2">2024年12月</p>
          <p className="text-orange-400 text-sm">容量将达85%</p>
        </div>
      </div>

      {/* Prediction Chart */}
      <div className="bg-white/5 border border-white/5 rounded-xl p-8">
        <div className="mb-6">
          <h3 className="text-xl font-bold">750 GB</h3>
          <p className="text-green-500 font-bold text-sm">+15% <span className="text-white/40 font-normal ml-2">过去6个月</span></p>
        </div>
        <div className="h-[300px] w-full">
           <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={predictionData}>
                <defs>
                  <linearGradient id="predGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#fff', opacity: 0.5}} dy={10} />
                <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                <Area type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={4} fillOpacity={1} fill="url(#predGradient)" />
              </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Product Recommendations */}
      <div>
        <h2 className="text-2xl font-bold mb-6">推荐产品与升级方案</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Recommendations.map((prod) => (
            <div key={prod.id} className="bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col hover:bg-white/[0.08] transition-colors">
              <div className="aspect-video w-full rounded-lg bg-cover bg-center mb-4" style={{ backgroundImage: `url('${prod.image}')` }}></div>
              <h3 className="text-lg font-bold mb-1">{prod.name}</h3>
              <p className="text-white/60 text-sm mb-4 flex-1">{prod.desc}</p>
              <Link to="/products" className="w-full py-2.5 bg-primary text-white font-bold text-center rounded-lg hover:bg-primary-dark transition-colors">
                查看详情
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Predictions;