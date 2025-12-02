import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { label: '存储概览', path: '/dashboard/overview', icon: 'monitoring' },
    { label: '智能分析', path: '/dashboard/analysis', icon: 'analytics' }, // Originally "Scan"
    { label: '预测与建议', path: '/dashboard/predictions', icon: 'lightbulb' },
    { label: '产品推荐', path: '/products', icon: 'shopping_bag' }, // Links out to public catalog
    { label: '设置', path: '/dashboard/settings', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen bg-background-dark text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r border-white/10 bg-background-dark/95">
        <div className="p-6 border-b border-white/10 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
           <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight">数据基石</span>
        </div>

        <div className="flex flex-col gap-6 p-4 flex-1 overflow-y-auto">
          {/* User Profile Snippet */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <div 
              className="size-10 rounded-full bg-cover bg-center"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZLK6Jz8JXAKuFp4jPdPkOgtYyOanLAKkfRcC6fVhKJyznzKYU6KMMR-rwn7Qr03mvQOZIvCT0MyGpEgVDTEBN4PKv04TTcYIkhEHNK1haDq0y3m4YFZW9BGqLGu_qz0o0sgf1Ka9g88DYg-LQ2cAQsYbcseVj6LSpo8ndZfFPejeuF01IS9tZFpJ8kT6K_Pcidm49gAnOmZr_oBw8-dPsINqoSEpN-3sAm66CD9kp7jixFNhajC2PT3ec2YCA634GUeq8eluywMM")' }}
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold">张伟</span>
              <span className="text-xs text-white/50">管理员</span>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                  ${isActive && !item.path.includes('/products') 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'}
                `}
              >
                <span className={`material-symbols-outlined ${item.path.includes('/products') ? '' : 'fill'}`}>{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
                {item.path.includes('/products') && (
                  <span className="material-symbols-outlined text-sm ml-auto opacity-50">open_in_new</span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">退出登录</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto bg-background-dark relative">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;