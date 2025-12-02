import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  const location = useLocation();
  const isTransparent = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white">
      <header className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-md ${isTransparent ? 'bg-background-dark/80' : 'bg-background-dark'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="size-8 text-primary group-hover:scale-110 transition-transform">
                 <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                  <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">数据基石</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">首页</Link>
              <Link to="/products" className="text-sm font-medium text-white/70 hover:text-white transition-colors">产品中心</Link>
              <Link to="/dashboard" className="text-sm font-medium text-white/70 hover:text-white transition-colors">解决方案</Link>
              <Link to="#" className="text-sm font-medium text-white/70 hover:text-white transition-colors">支持</Link>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="hidden sm:flex items-center justify-center h-9 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-sm font-bold transition-colors">
                进入控制台
              </Link>
              <Link to="/login" className="flex items-center justify-center h-9 px-4 rounded-lg bg-primary hover:bg-primary/90 text-sm font-bold transition-colors shadow-lg shadow-primary/25">
                登录
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-background-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/40 text-sm">© 2024 数据基石科技有限公司. 版权所有.</p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;