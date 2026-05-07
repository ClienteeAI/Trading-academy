import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { blogPostsData } from '../data/blogPostsData';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language.split('-')[0] || 'en') as 'en' | 'cs' | 'pl';

  const posts = Object.values(blogPostsData);

  return (
    <div className="bg-bg min-h-screen">
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <span className="text-accent font-sans text-[10px] uppercase tracking-[4px] mb-4 block">Finademica Insights</span>
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 tracking-tighter">Blog</h1>
          <p className="text-text-dim text-lg font-light max-w-2xl mx-auto leading-relaxed">
            {currentLang === 'cs' ? 'Hloubkové analýzy a vzdělávací články pro moderního tradera.' : 
             currentLang === 'pl' ? 'Szczegółowe analizy i artykuły edukacyjne dla nowoczesnego tradera.' :
             'In-depth analyses and educational articles for the modern trader.'}
          </p>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="bg-white/[0.02] border border-white/5 p-10 text-left group hover:border-accent/20 transition-colors">
                <div className="h-48 bg-white/5 mb-8 overflow-hidden relative">
                   <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-4 left-4 bg-accent text-bg text-[9px] font-bold px-3 py-1 uppercase tracking-widest">
                     {post.category}
                   </div>
                </div>
                <div className="flex items-center gap-4 text-[9px] text-white/30 uppercase tracking-widest mb-4 font-bold">
                  <span>{new Date(post.date).toLocaleDateString(currentLang)}</span>
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors leading-tight">
                  {post.title[currentLang]}
                </h3>
                <p className="text-sm text-text-dim font-light leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt[currentLang]}
                </p>
                <div className="w-12 h-px bg-white/10 group-hover:w-24 group-hover:bg-accent transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
