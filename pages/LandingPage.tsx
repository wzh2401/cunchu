import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(16, 25, 34, 0.7) 0%, rgba(16, 25, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCon7tgcZuf_00BrA791QBOeWflYqvS-S9VTSe-9knauts3cLpsKSBgsaFoMMXR-a3dfoUGFsa1axb1xYAnJsOt_KfCZhPKYdMiv5ewnnxQP0QmekffZBkG2WY1oZut-d9QwKARMazu8JmRhuLtY_lZtA5keIHoH6DRF4MJLW7_Ssajn_76O71Sz7uvcbeTkLS_rfNIg1XYSwbFm0FjQL_qJeZ3SDXCdSuMurPL2BeqqUWlCtNQhhHR1lCdngJePKXAhLjiKxpo4kE")'
          }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
           <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">赋能数据未来，构筑可靠存储基石</h1>
           <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
             我们致力于提供最先进、最可靠的硬件存储解决方案，帮助企业安全、高效地管理其数据资产。
           </p>
           <div className="flex justify-center gap-4">
             <Link to="/dashboard" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">
               免费试用
             </Link>
             <Link to="/products" className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors">
               浏览产品
             </Link>
           </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">公司简介</h2>
            <p className="text-white/70 text-lg leading-relaxed">
               我们是一家专注于硬件存储与产品选择的领先平台。我们的使命是通过创新的技术和卓越的服务，帮助用户轻松查询存储容量、精准预测未来使用需求，并获取最适合的新产品推荐。我们提供全中文的操作界面，致力于为用户打造无缝、高效的存储管理体验。
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4juLzF4qrZSJ9Zf4cOY8C_ZdG-t_JoNIlndwgxLlx4_SlJQ4ukjsK-sBJi2ejn7ztMSY7uA-31sZvNMAORiVZxRSTVsU7XQx4PLGzasSuTvNwSq5Ghg916HkB4aSMNQaT6HDpLJq-eBgqfGlIDhZ8jAQYlUgrEAs8l1oWBnADSZ36AgyJvc05vewSD1POa6AF_M61T3lXskl2eASjt9nk3FcuvquBBOefUtK1DL4ZJevBTpyEsurKOWFuCZi4Iv1o-4f3lcmL-6U" alt="Office" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">发展历程</h2>
          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:pl-8 space-y-12">
            {[
              { year: '2018年', title: '公司成立', desc: '怀揣着变革数据存储行业的愿景，我们在科技之都正式成立。' },
              { year: '2020年', title: '首款产品发布', desc: '推出第一代企业级固态硬盘，以卓越性能获得市场初步认可。' },
              { year: '2022年', title: '获得A轮融资', desc: '成功吸引顶级风险投资，为公司加速发展注入强大动力。' },
              { year: '2024年', title: '推出智能预测平台', desc: '发布行业领先的存储需求预测平台，帮助客户前瞻性地规划资源。' }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="absolute -left-[9px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background-dark"></div>
                <h3 className="text-xl font-bold text-primary">{item.year} - {item.title}</h3>
                <p className="text-white/70 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-12">核心价值</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'lightbulb', title: '创新驱动', desc: '我们不断探索前沿技术，致力于提供最具创新性的存储解决方案。' },
                { icon: 'groups', title: '客户至上', desc: '客户的成功是我们最大的追求，我们用心倾听并满足每一个需求。' },
                { icon: 'shield', title: '安全可靠', desc: '数据的安全是我们的最高承诺，我们构建坚不可摧的存储基石。' }
              ].map((val, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-xl text-center hover:bg-white/10 transition-colors">
                  <div className="size-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-3xl">{val.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-white/60">{val.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white/5 px-4">
         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-background-dark p-8 md:p-12 rounded-2xl border border-white/10">
            <div>
               <h3 className="text-2xl font-bold mb-6">联系我们</h3>
               <p className="text-white/70 mb-8">如果您有任何问题或合作意向，请随时通过以下方式与我们联系。</p>
               <div className="space-y-4">
                 <div className="flex items-center gap-4 text-white/80">
                   <span className="material-symbols-outlined text-primary">location_on</span>
                   <span>中国北京市海淀区中关村软件园</span>
                 </div>
                 <div className="flex items-center gap-4 text-white/80">
                   <span className="material-symbols-outlined text-primary">call</span>
                   <span>+86 10 8888 6666</span>
                 </div>
                 <div className="flex items-center gap-4 text-white/80">
                   <span className="material-symbols-outlined text-primary">email</span>
                   <span>contact@datastone.com</span>
                 </div>
               </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div>
                 <label className="block text-sm font-medium mb-1">姓名</label>
                 <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary text-white" />
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1">邮箱</label>
                 <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary text-white" />
               </div>
               <div>
                 <label className="block text-sm font-medium mb-1">消息内容</label>
                 <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-primary text-white"></textarea>
               </div>
               <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors">
                 发送消息
               </button>
            </form>
         </div>
      </section>
    </div>
  );
};

export default LandingPage;