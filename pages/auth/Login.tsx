import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard/overview');
  };

  return (
    <div className="bg-surface-dark border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">欢迎回到存储专家</h2>
        <p className="text-white/50 text-sm">登录您的 DataStone 账户</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
           <input 
             type="text" 
             placeholder="电子邮箱地址" 
             className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
           />
        </div>
        <div>
           <input 
             type="password" 
             placeholder="密码" 
             className="w-full h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
           />
        </div>
        
        <button 
          type="submit" 
          className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors mt-4"
        >
          登录
        </button>
      </form>

      <div className="mt-6 flex flex-col gap-2 text-center text-sm text-primary">
         <button className="hover:underline">无需密码登录</button>
         <button className="hover:underline">忘记密码？</button>
         <button className="hover:underline text-white/60">新用户？立即注册</button>
      </div>
    </div>
  );
};

export default Login;