import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
        name: 'Timepieces',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC79tpQ8g2zk4-VaVUS3G6lsexDb6QHrDWIdsKtFM37RAlO9LUhczuOcEjVYl5rC4oi3Q5tNx2r9mS8ZL-N33abiJJX6qmI_5Gxmv55bjdKZoC2qABALedSvIJTCTUE4O6NBT-iXpDWsemPEZrwzkpjd-sXkZaABFwXkWQeO43TLf0cREgMKiPokaewnYtqbYZfZQUL5JGuig_jSPN4TvZ1fdqwuBV37lFmxwSpskU4xgKTpPM3YQDfsDrE4CgX3sKx4IFrn-kfuvP6',
        delay: '0.1s'
    },
    {
        name: 'Leather Goods',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvWk63OElEM-rPyftQirh_oImUtqWjRANzNxcmYBnqVf7EedJPg0yzUzWR2C8gUokdf4fMNQd-T0kNad_ETTCyfvSs99_NsRbt2lRNPAoSDAxqUTo1qkV5fbNReU8r86-QXehp3cwd-uaOHL1d5Cv-_ukPeRPzf81Z_QTDWGeLJk4cf0DuC6uLr3Qnqzy7Md6KnDlR7MhVXSSDSOZ4FjyYUXqy4Kd5Qhuf7S9Hcndnl0ogMl1VJ5v8v6hMGAAFx3arjW0C6FPrN8oR',
        delay: '0.2s'
    },
    {
        name: 'Fragrances',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBb-towgkU-zOnW_4E0ic5EBFPv5tqo7dY5WZeuPb4jfmgp_z7rHq9mPzlc-9K1hvBZ1hCFFkA6XlmkTossZ8GC7AFHjtB_6meWC63LK_Ur0zVFxdi8DKbeJ3zYr9XrLk8fy7lkQIziS9w9IVXVB7054RjmYjzUd_q4bjdPmqf83zwjuYoqPcA_thaXAsgVBvjnkE1uRGP0W4XLGuY2xxi3PR_6iA5D3rRgrO1USQhoASuDbZXUDGvnI-Mp4PMtPzTXyipYSS0G8_2',
        delay: '0.3s'
    },
    {
        name: 'Eyewear',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfxyS_dGbsJNS13gPztrShw4Wmjg1bRHLHmoyLD_5SnEUloZkOEg8DvLAyUsCru0vMEpEZ1MtqL9MQ9kaeSBF4OOtKl7cN1ikHvW1AxeSqi-Sq5KtFnFafph_xOOsqAhazNmUhnqUnD5XNTQk3TRtjoqnw2gz_Uhz_fOee3ywfQ9-ZU-LnvQoWjaNyi92QiWgspMwwZCXW041lEtb2ZItm0aby0G1O6PFq3kWGhblPlOhZnWfGPdKy5mVE5zTv7lM_UMXsbX6VR05h',
        delay: '0.4s'
    }
];

export default function Categories() {
    const [isDark, setIsDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', !isDark ? 'dark' : 'light');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-200 font-display antialiased overflow-x-hidden selection:bg-primary selection:text-gray-900">
            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 h-full w-[280px] bg-white dark:bg-background-dark z-50 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-3xl">diamond</span>
                            <span className="text-xl font-black uppercase">PremiumShop</span>
                        </div>
                        <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-4">
                        <Link to="/" className="text-lg font-bold uppercase tracking-wide hover:text-primary transition-colors py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link to="/categories" className="text-lg font-bold uppercase tracking-wide text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
                        <a className="text-lg font-bold uppercase tracking-wide hover:text-primary transition-colors py-2 border-b border-gray-100 dark:border-gray-800" href="#">Atelier</a>
                        <a className="text-lg font-bold uppercase tracking-wide hover:text-primary transition-colors py-2 border-b border-gray-100 dark:border-gray-800" href="#">Journal</a>
                    </nav>
                    <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 space-y-4">
                        <Link to="/signin" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            <span className="material-symbols-outlined">login</span>
                            Giriş Yap
                        </Link>
                        <Link to="/signup" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                            <span className="material-symbols-outlined">person_add</span>
                            Kayıt Ol
                        </Link>
                        <button onClick={toggleTheme} className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
                            {isDark ? 'Light Mode' : 'Dark Mode'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-200/50 dark:border-white/5 transition-colors duration-300">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
                    <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <Link to="/" className="flex items-center gap-3">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-[32px] md:text-[36px]">diamond</span>
                        </div>
                        <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl font-black tracking-tighter uppercase">PremiumShop</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-12">
                        <Link className="text-xs font-bold uppercase tracking-[0.15em] text-gray-900 dark:text-white hover:text-primary transition-colors" to="/">Home</Link>
                        <Link className="text-xs font-bold uppercase tracking-[0.15em] text-primary transition-colors" to="/categories">Collections</Link>
                        <a className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">Atelier</a>
                        <a className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 dark:text-gray-300 hover:text-primary transition-colors" href="#">Journal</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[24px]">search</span>
                        </button>
                        <button className="p-2 text-gray-900 dark:text-white hover:text-primary transition-colors relative">
                            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                            <span className="absolute top-1 right-0 size-2 bg-primary rounded-full"></span>
                        </button>
                        <button onClick={toggleTheme} className="hidden md:block p-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[24px]">{isDark ? 'light_mode' : 'dark_mode'}</span>
                        </button>
                        <Link to="/signin" className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-gray-900 font-bold text-sm uppercase tracking-wide rounded-full hover:bg-primary/90 transition-all hover:scale-105">
                            <span className="material-symbols-outlined text-[20px]">login</span>
                            Giriş
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="w-full pt-32 pb-24 px-6 md:px-10 max-w-[1440px] mx-auto min-h-screen">
                {/* Page Header */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Our Collections</span>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">Curated Categories</h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Explore our meticulously selected range of premium goods, designed for the modern connoisseur.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {categories.map((category) => (
                        <a
                            key={category.name}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer animate-fade-in-up shadow-2xl"
                            href="#"
                            style={{ animationDelay: category.delay }}
                        >
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                                style={{ backgroundImage: `url('${category.image}')` }}
                            />
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8">
                                <div className="relative overflow-hidden">
                                    <h2 className="text-white font-black text-4xl md:text-5xl lg:text-6xl tracking-tight drop-shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {category.name}
                                    </h2>
                                    <div className="h-[2px] w-full bg-primary mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center shadow-[0_0_10px_rgba(242,185,13,0.5)]"></div>
                                </div>
                                <span className="mt-4 text-gray-200 text-sm font-bold uppercase tracking-[0.2em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    View Collection
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Coming Soon */}
                <div className="mt-24 text-center">
                    <div className="inline-flex items-center gap-4 text-gray-400 dark:text-gray-500 text-sm tracking-widest uppercase">
                        <span className="h-[1px] w-12 bg-gray-300 dark:bg-gray-700"></span>
                        <span>More Categories Coming Soon</span>
                        <span className="h-[1px] w-12 bg-gray-300 dark:bg-gray-700"></span>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 dark:bg-[#0a0a0a] text-white py-20 px-6 md:px-10 border-t dark:border-white/5">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Newsletter */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl font-black tracking-tight text-white">Join the Inner Circle.</h2>
                        <p className="text-gray-400 text-lg max-w-md font-light">Receive exclusive access to new collections, private sales, and curated content.</p>
                        <form className="flex w-full max-w-md relative group mt-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
                            <input
                                className="w-full h-14 bg-transparent border-b border-white/20 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors pr-12 text-lg font-light"
                                placeholder="Email address"
                                type="email"
                                required
                            />
                            <button className="absolute right-0 top-0 h-14 text-primary hover:text-white transition-colors" type="submit">
                                <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                            </button>
                        </form>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold uppercase tracking-wider text-xs text-primary">Shop</h4>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">New Arrivals</a>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">Best Sellers</a>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">Accessories</a>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">Gift Cards</a>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold uppercase tracking-wider text-xs text-primary">Support</h4>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">Contact Us</a>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">Shipping</a>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">Returns</a>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">FAQ</a>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="font-bold uppercase tracking-wider text-xs text-primary">Legal</h4>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">Privacy Policy</a>
                            <a className="text-gray-400 hover:text-white transition-colors text-sm" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-wider">
                    <p>© 2024 PremiumShop. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a className="hover:text-primary transition-colors" href="#">Instagram</a>
                        <a className="hover:text-primary transition-colors" href="#">Twitter</a>
                        <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
