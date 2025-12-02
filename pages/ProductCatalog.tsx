import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: '三星 980 Pro SSD',
    description: '2TB SSD, 高速读写, 五年质保',
    price: 899,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2V7VoJkIloa6e5phJo20y-TdKN2viApUwEOn_kDCaKOw34Mvp6mGjpBYhLcGy4giWFLlBlJYqHEWu9iCHIGOD3jHlMmkmAjXLWBmpejuul9tmq-X2VTrMLXusHRssP-is2y5aRNUr5DeKb4hlBmdRYZwU063hU7xQ6d8h2bW46TjlCl8VVi4Hi65dv9W4tDsrPSC98p-K3G0FK_Om5lJGWdCZoAvGU_ZQ1C0SooCGg2cRNGDN_3yEHXxmAzYcWXxqdTadWqsiXmE',
    category: 'SSD',
    rating: 4.8,
    reviews: 2100,
    features: [],
    specs: { capacity: '2TB', interface: 'NVMe' }
  },
  {
    id: '2',
    name: '西部数据 My Passport',
    description: '4TB, USB 3.0, 自动备份',
    price: 499,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCfbzfdzfkopR36eDnLYQ-X-AZyhSoBo8T5IbBeLNk5LAvWcwOr1_lQeH40JwWfnwfcmdnvIQz-nJKeUL94-22z8MGcXNSvi1G6jnww3iXeImQG6X9KDFY5ahLdX1TkssUCsseXMuUd3sfuSN7QpSko6WyPnytKFKmKMXZ4JIYCCY9q57gkxprivk4d0Gz8dtn57DszwobnNcdkcLuddG7uw84Q_mJ5nLejb_VXmU97YvpTNP_1BKv65OSgmDvFSM5DOwxaZkzVcE',
    category: 'HDD',
    rating: 4.5,
    reviews: 3400,
    features: [],
    specs: { capacity: '4TB', interface: 'USB 3.0' }
  },
  {
    id: '3',
    name: '金士顿 DataTraveler',
    description: '128GB, USB 3.2, 便携设计',
    price: 59,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp_LfqDyiyb-8c2ROgoQSmcDJyF6EpXDq0F1eNFJFHa81_CtZ0CiaJqSD4XOJwZ8WGIr0nJMG_b8xH5fsa2pHO0ix4Jge_ndycLWzH4Gn2hPqHF7bUnQSKh01jKRbM_8PTPL-tj5_3hxeTxQFh_lRBkiVlrkagEga4onjzr2NKAmqMqXWmvJPHmaM795Rf88fK11ZhNfrEmd3-RCRDlfDVBJvyzcAFzQbO45-vQAaSGxaogtDrD65vGQj-YkW_6L9doRIf5r_gV80',
    category: 'USB',
    rating: 4.2,
    reviews: 500,
    features: [],
    specs: { capacity: '128GB', interface: 'USB 3.2' }
  },
  {
    id: '4',
    name: '群晖 DS220+ NAS',
    description: '双盘位, 数据安全, 家庭影音',
    price: 2580,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbK6o2s3yhh3bLOYDdVks_hdJfNCFwWE3sMjFa1Nvo9f3D86kgLoBq9ilUsnWC1lwuPWQ2vAPUHaQxITHnXfGRdiz-YQ6ugL5gPrRwHKj1IQ14dXB6HUFcbRlaOlXpaxTok0DeGW0zoiI4ObAb0n99A2mpzxphzPq-8WFvw5pQt1Lv_rHZTKAge1QAi_QwN3du1BSdVxxx6gnKYwrFWTpjgqMstBbNGhF7KafiEIsVB6Mi50_774qdAgDkZgxMk080OWsDABSDK74',
    category: 'NAS',
    rating: 4.9,
    reviews: 120,
    features: [],
    specs: { capacity: 'N/A', interface: 'Ethernet' }
  },
    {
    id: '5',
    name: '闪迪 Extreme Pro SD卡',
    description: '256GB, V30, 4K拍摄',
    price: 129,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6qxCWO9tfx-tn67Pw0n3xD-yJ2dMZout07CHpTNpRALQ0kqVW_-6Qz8huMB1LiIXWmFJQOhYnjCFqHIOXN9KyW6-hMoUoZQfx0axJUXJ7S0iEx_xxGcXkl_ZshZN-x8b5o_qAa3awqQLQ5WgD3QseecL_qY0hLDml9kPJWoRKECgu8EC6aWQ612VGp6uDG89Ug2UQzczpJ3bWEcZNJs1oWkq4fDSR7Rv7-IR-MgAgF4BpdG2uogn8axXrapbrm5GiSxcM_c3smAA',
    category: 'SD',
    rating: 4.7,
    reviews: 1500,
    features: [],
    specs: { capacity: '256GB', interface: 'SDXC' }
  },
  {
    id: '6',
    name: '英睿达 P5 Plus NVMe',
    description: '1TB, PCIe 4.0, 游戏加载',
    price: 759,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-1D0BGQUYJjAgB_BdFRB2rT-BtojLcMxIR--scXHu4lK_CLX-NgFn26LiZ1OEI_8U22-oufIrLLJXmItklxQouBvOGav22VQrsfL0-2k2ZppNhiMPZdK6tUwJuB5Hvoh112Obv4VWjVmHYISNyTBvWGxYiqNw4iubv9fD5chQzu7iqf_df_M4zNpp0dSeBn1IgDfFbNOM0B5NK9cBrmQlswOfrgRN7hgA0Sw6I5Zl6uKBIKsSgrsbbfIXLZDuiRPNNStY5o0kKsQ',
    category: 'SSD',
    rating: 4.6,
    reviews: 800,
    features: [],
    specs: { capacity: '1TB', interface: 'NVMe' }
  },
  {
    id: '7',
    name: 'LaCie Rugged 移动硬盘',
    description: '5TB, 三防设计, 雷电接口',
    price: 1299,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjvCeWNjBw6AkwjiJpH_shFVdBC1cNotoW6GJdLvXyD-FgV5apr3EAlNTYzsZZ6x5N1vBUl7xrcMd0ti1MPV4IxJZsi-xeZY-rA0Q5di9_VrPFZvAg8_ptzo8dIvQnIdTNJefZfjIO5QKhT7Z0eLbMhObWNOwjnadY-Pqi96rK2T8rQ8Nzotx2ZIuNa6T15xI3f-Ld3NNnnxfTSDGawOcyFrA96OCLZyOHyLGjSv316QeFxschh7ZMczhAaJYie2S9vjC9VlvupXs',
    category: 'HDD',
    rating: 4.8,
    reviews: 450,
    features: [],
    specs: { capacity: '5TB', interface: 'USB-C/Thunderbolt' }
  },
  {
    id: 'P500',
    name: '极速固态移动硬盘 P500',
    description: '2TB 容量 | USB 4.0 | 2800MB/s',
    price: 1299,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAuMNTY7f1NjpMZCFLbiyluU7uFbftJ5b5jxDnKvF0CgZsma0QQ9hefs5Oy10_pDBtsrFjdpKGWfMkApxUnMtGo7bC3JAY6QsIi6lA9z-w8xdPi0iHyxpWgVcS5qLer939-P-E18BGTGhPFnJdbhYPtnVPbvLo2jH4cg5jm1EKMT6r_igxyBmenhi09eAaTgplfpKQHz7qQhNJr3PTGk4YJ_HnUMK5XiFz5VMt_Mwp7b9tdN4GaduyroHYou3rI_oA6Etvgg1o-Jw',
    category: 'SSD',
    rating: 4.7,
    reviews: 3128,
    features: [],
    specs: { capacity: '2TB', interface: 'USB 4.0' }
  }
];

const ProductCatalog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-black mb-2">为你推荐</h1>
          <p className="text-white/60">基于您的存储使用习惯和未来需求</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {['按相关性排序', '按价格排序', '按品牌排序'].map(label => (
            <button key={label} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 whitespace-nowrap transition-colors">
              <span className="text-sm font-medium">{label}</span>
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={product.id === 'P500' ? '/products/P500' : '#'} key={product.id} className="group flex flex-col gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1">
            <div 
              className="aspect-square w-full rounded-lg bg-white/5 bg-cover bg-center group-hover:scale-[1.02] transition-transform duration-300"
              style={{ backgroundImage: `url('${product.image}')` }}
            ></div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
              <p className="text-sm text-white/50 line-clamp-2 min-h-[40px]">{product.description}</p>
              <p className="text-primary text-xl font-bold mt-2">¥{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <button className="size-10 rounded-full flex items-center justify-center hover:bg-white/10">
           <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="size-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">1</button>
        <button className="size-10 rounded-full hover:bg-white/10 flex items-center justify-center">2</button>
        <button className="size-10 rounded-full hover:bg-white/10 flex items-center justify-center">3</button>
        <span className="size-10 flex items-center justify-center">...</span>
        <button className="size-10 rounded-full hover:bg-white/10 flex items-center justify-center">10</button>
        <button className="size-10 rounded-full flex items-center justify-center hover:bg-white/10">
           <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCatalog;