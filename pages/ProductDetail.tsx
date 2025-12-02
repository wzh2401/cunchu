import React, { useState } from 'react';

const thumbnails = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDAuMNTY7f1NjpMZCFLbiyluU7uFbftJ5b5jxDnKvF0CgZsma0QQ9hefs5Oy10_pDBtsrFjdpKGWfMkApxUnMtGo7bC3JAY6QsIi6lA9z-w8xdPi0iHyxpWgVcS5qLer939-P-E18BGTGhPFnJdbhYPtnVPbvLo2jH4cg5jm1EKMT6r_igxyBmenhi09eAaTgplfpKQHz7qQhNJr3PTGk4YJ_HnUMK5XiFz5VMt_Mwp7b9tdN4GaduyroHYou3rI_oA6Etvgg1o-Jw',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBuA6CHo6R1TQFJ7qMvPOjQdB0cRWJlZ8fWvywTfxFKmf1A7xCprFQeZfkbnWnLZSMKVdHV4Ubsx0IG8N5d4cBSQiWnKr6r8I4r0TJHq17nI8bfUYXdaRKXLqthBzHIHsqUih1znr_o0kims2fxHVxoWaRqPOVoE4JYDpMEVFGoakJMxbWm22JVtRu4tr8RRojv-8JJFb7jmN6NweYQQH5U0NNpWNAg7GSEXlFetx8kHxC-moSU5YvYiXW5mZM_pTBto3qpUcSqmGA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCrg4ueshuKQGrMCYHU9SV8oNXqXCcLNaSQ1Zwikkcq_03mlDgYmzq4NNcG7Noe_Ls6Q3PpMj7uWnygRxQ6Jd493qx50dHvlgC_pApqXL4tSpc5IfRUwv-LTrTaqkgfQooBdKC5YxbldvgE9CYucRymmuz8J7xlRLwQmd9QbTQNnKJAN1rD82D5OTZZBRmrDT_o_lZN7XKmMJieiPSnFGXaBOBFxW25ti578xCayQ_dtWtwTQHOk5zVxQbKtLS3pCO6E1VRBuhz6c8',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCgwuqPSqoBtNszmTPAxEHvMIGOuwNLQsPXNwXJGASlowR4YXNlxWi-jDx1AyByr4wz3WGKJ96q7tLBgstno157BbLkJaw04iyg2_Hms4IBZDe8t2EutT8H7EHhRdX9tyzk5sp6k08-ggrD_1CsP_FLG43bUfqmX9ZQQNe37NfaO3kcVYQxm3mLd-IBIYaBVI2FCQgZTw19hdnyla8CQMRgT4b3INSAfQ_ZyDs7XhHRdshcR8GPYZPNV6pN7u65o2xZMnhTHshMTDo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ1h6SF1ApIAtv3QhRNwrTwcQQLPJ0ThlgAoAyTTWuRLqwigbkltxh9HhW51BNf3vQF-Bit4poziYFbT5LMYO9onR9nQufa5_1g6JB26zfPcKFnXe6XtqFqLlK_gz7QEPlUyiBmDGQyYa20tLTImtPTr7JybbiHLzD6PWTDJbUm_koDQaa3A3zp5NbaYzj3L6xK4lm5PdH9v53_PR4zq4tRIVa9u5iUAwCW49KzXXmMCdQ31fB-o65QyabmaT4BH-PJ_LR_4LdUPw'
];

const ProductDetail: React.FC = () => {
  const [activeImage, setActiveImage] = useState(thumbnails[0]);
  const [activeSize, setActiveSize] = useState('2TB');
  const [activeColor, setActiveColor] = useState('black');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          <div 
            className="w-full aspect-square bg-white/5 rounded-xl bg-contain bg-center bg-no-repeat transition-all duration-300"
            style={{ backgroundImage: `url('${activeImage}')`, backgroundSize: '70%' }}
          ></div>
          <div className="grid grid-cols-5 gap-2 md:gap-4">
            {thumbnails.map((src) => (
              <button
                key={src}
                onClick={() => setActiveImage(src)}
                className={`aspect-square rounded-lg bg-white/5 bg-contain bg-center bg-no-repeat border-2 transition-colors ${activeImage === src ? 'border-primary' : 'border-transparent hover:border-white/20'}`}
                style={{ backgroundImage: `url('${src}')`, backgroundSize: '80%' }}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl font-black mb-3">极速固态移动硬盘 P500</h1>
            <p className="text-white/60 text-lg">2TB 容量 | USB 4.0 | 2800MB/s 读取速度</p>
            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-yellow-400">
                {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined fill">star</span>)}
                <span className="material-symbols-outlined fill">star_half</span>
              </div>
              <span className="text-sm text-white/50">4.7 (3,128 条评价)</span>
            </div>
          </div>

          <div>
             <h3 className="text-sm font-bold text-white/80 mb-3">容量</h3>
             <div className="flex flex-wrap gap-3">
               {['1TB', '2TB', '4TB'].map(size => (
                 <button
                   key={size}
                   onClick={() => setActiveSize(size)}
                   className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                     activeSize === size 
                       ? 'bg-primary/20 text-primary border border-primary' 
                       : 'bg-white/5 text-white/70 hover:bg-white/10'
                   }`}
                 >
                   {size}
                 </button>
               ))}
             </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white/80 mb-3">颜色</h3>
            <div className="flex gap-4">
               <button 
                 onClick={() => setActiveColor('black')}
                 className={`size-10 rounded-full bg-gray-900 border-2 ${activeColor === 'black' ? 'border-primary ring-2 ring-primary/30' : 'border-white/10'}`}
               ></button>
               <button 
                 onClick={() => setActiveColor('silver')}
                 className={`size-10 rounded-full bg-gray-400 border-2 ${activeColor === 'silver' ? 'border-primary ring-2 ring-primary/30' : 'border-transparent'}`}
               ></button>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-4xl font-bold mb-2">¥1,299.00</p>
            <p className="text-green-500 text-sm mb-6">有货，预计2天内送达</p>
            <div className="flex gap-4">
              <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-bold h-14 rounded-xl transition-colors">
                加入购物车
              </button>
              <button className="flex-1 bg-primary/10 hover:bg-primary/20 text-primary font-bold h-14 rounded-xl transition-colors">
                立即购买
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Tabs */}
      <div className="mt-20">
         <div className="border-b border-white/10 flex gap-8 mb-8">
            <button className="py-4 border-b-2 border-primary text-primary font-bold">功能描述</button>
            <button className="py-4 border-b-2 border-transparent text-white/60 hover:text-white font-medium">完整规格</button>
            <button className="py-4 border-b-2 border-transparent text-white/60 hover:text-white font-medium">用户评价</button>
         </div>
         
         <div className="space-y-8">
           <h3 className="text-2xl font-bold">为专业人士打造的极速体验</h3>
           <p className="text-white/70 leading-relaxed max-w-4xl">
             极速固态移动硬盘 P500 专为摄影师、视频编辑和内容创作者设计，提供无与伦比的性能和可靠性。借助先进的 NVMe 技术和 USB 4.0 接口，您可以以前所未有的速度传输大型文件，从而显着缩短工作流程时间。
           </p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: 'speed', title: '高达 2800MB/s', desc: '闪电般的读写速度，轻松处理 8K 视频和高分辨率照片。' },
                { icon: 'usb', title: 'USB 4.0 接口', desc: '下一代连接标准，广泛兼容 Thunderbolt 3 及更高版本设备。' },
                { icon: 'shield', title: '坚固耐用', desc: '采用铝合金外壳，有效散热并提供高达2米的跌落保护。' },
              ].map((feat, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-xl text-center flex flex-col items-center">
                  <span className="material-symbols-outlined text-4xl text-primary mb-4">{feat.icon}</span>
                  <h4 className="font-bold text-lg mb-2">{feat.title}</h4>
                  <p className="text-sm text-white/60">{feat.desc}</p>
                </div>
              ))}
           </div>
         </div>
      </div>
    </div>
  );
};

export default ProductDetail;