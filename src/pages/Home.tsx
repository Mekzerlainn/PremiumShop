import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [isDark, setIsDark] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

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
                        <a className="text-lg font-bold uppercase tracking-wide hover:text-primary transition-colors py-2 border-b border-gray-100 dark:border-gray-800" href="#">Shop</a>
                        <Link to="/categories" className="text-lg font-bold uppercase tracking-wide hover:text-primary transition-colors py-2 border-b border-gray-100 dark:border-gray-800">Collections</Link>
                        <a className="text-lg font-bold uppercase tracking-wide hover:text-primary transition-colors py-2 border-b border-gray-100 dark:border-gray-800" href="#">About</a>
                        <a className="text-lg font-bold uppercase tracking-wide hover:text-primary transition-colors py-2 border-b border-gray-100 dark:border-gray-800" href="#">Journal</a>
                    </nav>
                    <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 space-y-4">
                        <Link to="/signin" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">login</span>
                            Giriş Yap
                        </Link>
                        <Link to="/signup" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors">
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

            {/* Sticky Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-200/50 dark:border-white/5 transition-colors duration-300">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                    {/* Mobile Menu Icon */}
                    <button onClick={() => setMobileMenuOpen(true)} className="md:hidden p-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">menu</span>
                    </button>

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="text-primary">
                            <span className="material-symbols-outlined text-[32px] md:text-[40px]">diamond</span>
                        </div>
                        <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl font-black tracking-tighter uppercase">
                            PremiumShop</h2>
                    </Link>

                    {/* Desktop Links */}
                    <nav className="hidden md:flex items-center gap-10">
                        <a className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-gray-300 hover:text-primary transition-colors" href="#">Shop</a>
                        <Link to="/categories" className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-gray-300 hover:text-primary transition-colors">Collections</Link>
                        <a className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-gray-300 hover:text-primary transition-colors" href="#">About</a>
                        <a className="text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-gray-300 hover:text-primary transition-colors" href="#">Journal</a>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-2 md:gap-4">
                        <button onClick={() => setSearchOpen(true)} className="p-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[24px]">search</span>
                        </button>
                        <button className="p-2 text-gray-900 dark:text-white hover:text-primary transition-colors relative">
                            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
                            <span className="absolute top-1 right-0 size-2 bg-primary rounded-full"></span>
                        </button>
                        <button onClick={toggleTheme} className="hidden md:block p-2 text-gray-900 dark:text-white hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[24px]">{isDark ? 'light_mode' : 'dark_mode'}</span>
                        </button>
                        {/* Login Button */}
                        <Link to="/signin" className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-gray-900 font-bold text-sm uppercase tracking-wide rounded-full hover:bg-primary/90 transition-all hover:scale-105">
                            <span className="material-symbols-outlined text-[20px]">login</span>
                            Giriş
                        </Link>
                    </div>
                </div>
            </header>

            {/* Search Modal */}
            {searchOpen && (
                <div className="fixed inset-0 z-[60]">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSearchOpen(false)} />
                    <div className="relative z-10 max-w-3xl mx-auto mt-32 px-6">
                        <div className="bg-white dark:bg-background-dark rounded-2xl shadow-2xl p-6">
                            <div className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-gray-400 text-2xl">search</span>
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="flex-1 bg-transparent border-none outline-none text-xl font-medium placeholder-gray-400 dark:text-white"
                                    autoFocus
                                />
                                <button onClick={() => setSearchOpen(false)} className="p-2 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <main className="w-full">
                {/* Hero Section */}
                <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center z-0 animate-fade-in scale-105"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTsFWdFwfulqmT0HRs-TcCs1A-KDsvKZbM__5TW1NMK57XcjnFjsgWxcwwGjRZJvj4CpV0JLbqGnXuHCpiFBwdLmr_eo0DEH9Xrg1Cx9zxhu4MFCRB6DkPv8qHuetEe8Sx06QKCipc8syVkYOCJdDpKfhgH56dlVazGKC4ElEafgKr5v6EfQNq6F84uuhQf3VAXo52y9jLRsqb-nNoJEnimaBoM_OB7SykLUxZgRa1ySjCYNZ9Q5CZJpSI-Sq2eUovSt__mbUuz--R')" }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-black/40 to-black/70" />

                    {/* Content */}
                    <div className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center gap-6 md:gap-8 max-w-4xl">
                        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter drop-shadow-lg animate-fade-in-up">
                            Curated <br /> <span className="text-primary">Excellence.</span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Discover the new standard of modern luxury. Meticulously sourced for the discerning few.
                        </p>
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <a className="group relative inline-flex items-center justify-center h-14 px-8 bg-primary text-gray-900 text-base font-bold uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-105 rounded-full shadow-[0_0_20px_rgba(242,185,13,0.4)] animate-pulse-glow"
                                href="#new-arrivals">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Collection
                                    <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                        <span className="material-symbols-outlined text-white/50 text-4xl">keyboard_arrow_down</span>
                    </div>
                </section>

                {/* New Arrivals Grid */}
                <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto" id="new-arrivals">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 text-gray-900 dark:text-white">New Arrivals</h2>
                            <p className="text-gray-500 dark:text-white/60 text-lg">Fresh from the atelier.</p>
                        </div>
                        <a className="group flex items-center gap-2 text-gray-900 dark:text-white font-bold uppercase tracking-wider text-sm hover:text-primary transition-colors" href="#">
                            View All Products
                            <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
                        {/* Product 1 */}
                        <div className="product-card group flex flex-col gap-4 cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 dark:bg-surface-dark border dark:border-white/5 shadow-2xl">
                                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary/90 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase tracking-wider rounded-sm">New</span>
                                <div className="product-image w-full h-full bg-cover bg-center transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC79tpQ8g2zk4-VaVUS3G6lsexDb6QHrDWIdsKtFM37RAlO9LUhczuOcEjVYl5rC4oi3Q5tNx2r9mS8ZL-N33abiJJX6qmI_5Gxmv55bjdKZoC2qABALedSvIJTCTUE4O6NBT-iXpDWsemPEZrwzkpjd-sXkZaABFwXkWQeO43TLf0cREgMKiPokaewnYtqbYZfZQUL5JGuig_jSPN4TvZ1fdqwuBV37lFmxwSpskU4xgKTpPM3YQDfsDrE4CgX3sKx4IFrn-kfuvP6')" }}
                                />
                                <div className="quick-add-btn absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <button className="w-full h-12 bg-gray-900 text-white text-sm font-bold uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-gray-900 border border-white/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Quick Add
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Gold Chronograph</h3>
                                    <span className="text-gray-500 dark:text-primary font-semibold">$2,500</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Swiss Movement</p>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="product-card group flex flex-col gap-4 cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 dark:bg-surface-dark border dark:border-white/5 shadow-2xl">
                                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary/90 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase tracking-wider rounded-sm">New</span>
                                <div className="product-image w-full h-full bg-cover bg-center transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvWk63OElEM-rPyftQirh_oImUtqWjRANzNxcmYBnqVf7EedJPg0yzUzWR2C8gUokdf4fMNQd-T0kNad_ETTCyfvSs99_NsRbt2lRNPAoSDAxqUTo1qkV5fbNReU8r86-QXehp3cwd-uaOHL1d5Cv-_ukPeRPzf81Z_QTDWGeLJk4cf0DuC6uLr3Qnqzy7Md6KnDlR7MhVXSSDSOZ4FjyYUXqy4Kd5Qhuf7S9Hcndnl0ogMl1VJ5v8v6hMGAAFx3arjW0C6FPrN8oR')" }}
                                />
                                <div className="quick-add-btn absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <button className="w-full h-12 bg-gray-900 text-white text-sm font-bold uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-gray-900 border border-white/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Quick Add
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Signature Leather Tote</h3>
                                    <span className="text-gray-500 dark:text-primary font-semibold">$1,200</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Italian Calfskin</p>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="product-card group flex flex-col gap-4 cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 dark:bg-surface-dark border dark:border-white/5 shadow-2xl">
                                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary/90 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase tracking-wider rounded-sm">New</span>
                                <div className="product-image w-full h-full bg-cover bg-center transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBb-towgkU-zOnW_4E0ic5EBFPv5tqo7dY5WZeuPb4jfmgp_z7rHq9mPzlc-9K1hvBZ1hCFFkA6XlmkTossZ8GC7AFHjtB_6meWC63LK_Ur0zVFxdi8DKbeJ3zYr9XrLk8fy7lkQIziS9w9IVXVB7054RjmYjzUd_q4bjdPmqf83zwjuYoqPcA_thaXAsgVBvjnkE1uRGP0W4XLGuY2xxi3PR_6iA5D3rRgrO1USQhoASuDbZXUDGvnI-Mp4PMtPzTXyipYSS0G8_2')" }}
                                />
                                <div className="quick-add-btn absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <button className="w-full h-12 bg-gray-900 text-white text-sm font-bold uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-gray-900 border border-white/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Quick Add
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Oud Nuit Parfum</h3>
                                    <span className="text-gray-500 dark:text-primary font-semibold">$350</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">50ml Extrait</p>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="product-card group flex flex-col gap-4 cursor-pointer">
                            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 dark:bg-surface-dark border dark:border-white/5 shadow-2xl">
                                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary/90 backdrop-blur-sm text-gray-900 text-xs font-bold uppercase tracking-wider rounded-sm">New</span>
                                <div className="product-image w-full h-full bg-cover bg-center transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfxyS_dGbsJNS13gPztrShw4Wmjg1bRHLHmoyLD_5SnEUloZkOEg8DvLAyUsCru0vMEpEZ1MtqL9MQ9kaeSBF4OOtKl7cN1ikHvW1AxeSqi-Sq5KtFnFafph_xOOsqAhazNmUhnqUnD5XNTQk3TRtjoqnw2gz_Uhz_fOee3ywfQ9-ZU-LnvQoWjaNyi92QiWgspMwwZCXW041lEtb2ZItm0aby0G1O6PFq3kWGhblPlOhZnWfGPdKy5mVE5zTv7lM_UMXsbX6VR05h')" }}
                                />
                                <div className="quick-add-btn absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                    <button className="w-full h-12 bg-gray-900 text-white text-sm font-bold uppercase rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-gray-900 border border-white/10 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                        Quick Add
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Classic Aviators</h3>
                                    <span className="text-gray-500 dark:text-primary font-semibold">$450</span>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Polarized Gold Lens</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trending Now Section */}
                <section className="py-20 bg-gray-100 dark:bg-background-dark overflow-hidden relative">
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
                        <div className="flex flex-col md:flex-row gap-4 items-end justify-between mb-16">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 dark:text-white">Trending Now</h2>
                            <div className="w-24 h-1 bg-primary shadow-[0_0_10px_rgba(242,185,13,0.5)]" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Trending Item 1 */}
                            <div className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border dark:border-white/5 cursor-pointer">
                                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-300 group-hover:bg-black/20" />
                                <div className="absolute top-4 left-4 z-20 text-white font-black text-6xl md:text-8xl opacity-50 mix-blend-overlay">01</div>
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh73kaaiWEGWOiNhrKe-9aFE0sNVs3m62P1nvXZXsaL-rlciWqRcAft9WVfPBEWFkUDErAXdVlpesaAmEi1GPZcwa2nd92o-HYduuuTzls8fpV2eXUwRyYXGE9sjABdc8M8E2l942Ra909DnyX4UZB6fElMRwV6XiBbq6UkntlUKsTlPY_aF1SioNUN0vFkAkrj2cRdOPXtvdsubeHQSxp-x4t2UBKnCJJpp9TGrJ7Q1mxiT-o4q87gF5vY6VY1ZFtD3Gm86mvJByJ')" }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 glass-card">
                                    <h3 className="text-white text-2xl font-bold mb-2">The Royal Pump</h3>
                                    <p className="text-gray-200 text-sm mb-4">Hand-stitched satin finish for evening elegance.</p>
                                    <span className="text-primary font-bold group-hover:tracking-wider transition-all">Shop Now →</span>
                                </div>
                            </div>

                            {/* Trending Item 2 */}
                            <div className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl md:translate-y-12 border dark:border-white/5 cursor-pointer">
                                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-300 group-hover:bg-black/20" />
                                <div className="absolute top-4 left-4 z-20 text-white font-black text-6xl md:text-8xl opacity-50 mix-blend-overlay">02</div>
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA6BlIPW2zXXNRAwRQE1MGSLKxRjdCOoy8ezrQ9HzpZtvkcoEN1j7vXeFaQk1b1di0JVTyUM5OzVmYNdwZ-tHyLhfjaPwPo2G9QXB9rKei4HDiRJ25_lLZxVqE6zEDZp-lLIdL4pTNhejfWADAQUnd_txjiw5Uxnruq4HD8hMf6dMuNndVPrQ6nj7I1mru2WOxg-dTv3vdRheYyeP6LEmE58A6Tjjc8V1QIOwgKyUlGl774vBcYAuqf-IuwKGiAR-S0KWCI35K3dCpC')" }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 glass-card">
                                    <h3 className="text-white text-2xl font-bold mb-2">Heritage Wallet</h3>
                                    <p className="text-gray-200 text-sm mb-4">Aged cognac leather with reinforced stitching.</p>
                                    <span className="text-primary font-bold group-hover:tracking-wider transition-all">Shop Now →</span>
                                </div>
                            </div>

                            {/* Trending Item 3 */}
                            <div className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border dark:border-white/5 cursor-pointer">
                                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-300 group-hover:bg-black/20" />
                                <div className="absolute top-4 left-4 z-20 text-white font-black text-6xl md:text-8xl opacity-50 mix-blend-overlay">03</div>
                                <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoaVqrI9GzkpegEGF9zFlosQ2HIqdgnjOwNzr99ta4OuFtBXrSrRjeCFMOxrZkEx_vXfQSEmH8fsb8Fj43b_rnsmR3x6jYOJ8b4S8-InbZikcGTvhCvN8h8fYHq50Rerety046w89BQUTBccAZVVmRRzg0CgXHcqJpCh4wIHgP5oy7EaSzpfaUQtQ7QecgzNbdvUe2mJ010O3hFR7EPhqalRrA__njcoE7rIitRZvvbZooE9dyLanp1bbyf8y2u-XQHOnirPwXDfCA')" }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 glass-card">
                                    <h3 className="text-white text-2xl font-bold mb-2">Essential Silk Tee</h3>
                                    <p className="text-gray-200 text-sm mb-4">The everyday essential, elevated.</p>
                                    <span className="text-primary font-bold group-hover:tracking-wider transition-all">Shop Now →</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="py-24 px-6 relative bg-white dark:bg-background-dark border-t dark:border-white/5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-gray-900 shadow-[0_0_20px_rgba(242,185,13,0.3)]">
                            <span className="material-symbols-outlined text-3xl">format_quote</span>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center mt-8">
                        <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed text-gray-900 dark:text-gray-100 mb-8">
                            "The attention to detail is unmatched. From the packaging to the product itself, shopping here feels like a truly premium experience."
                        </blockquote>

                        <div className="flex flex-col items-center gap-2">
                            <div className="flex items-center gap-1 text-primary">
                                <span className="material-symbols-outlined text-xl filled">star</span>
                                <span className="material-symbols-outlined text-xl filled">star</span>
                                <span className="material-symbols-outlined text-xl filled">star</span>
                                <span className="material-symbols-outlined text-xl filled">star</span>
                                <span className="material-symbols-outlined text-xl filled">star</span>
                            </div>
                            <cite className="not-italic text-lg font-bold text-gray-900 dark:text-white mt-2">Alexander V.</cite>
                            <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wide">
                                <span className="material-symbols-outlined text-sm">verified</span> Verified Buyer
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full max-w-xs mx-auto h-1 bg-gray-100 dark:bg-gray-800 mt-10 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-primary rounded-full" />
                        </div>
                    </div>
                </section>

                {/* Newsletter / Footer */}
                <footer className="bg-gray-900 dark:bg-black text-white py-20 px-6 md:px-10 border-t dark:border-white/5">
                    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Newsletter */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-black tracking-tight text-white">Join the Inner Circle.</h2>
                            <p className="text-white/60 dark:text-gray-400 text-lg max-w-md">Receive exclusive access to new collections, private sales, and curated content.</p>
                            <form className="flex w-full max-w-md relative group" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
                                <input
                                    className="w-full h-14 bg-transparent border-b border-white/20 text-white placeholder-white/40 dark:placeholder-white/20 focus:outline-none focus:border-primary transition-colors pr-12 text-lg"
                                    placeholder="Email address" type="email" required
                                />
                                <button className="absolute right-0 top-0 h-14 text-primary hover:text-white transition-colors" type="submit">
                                    <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                                </button>
                            </form>
                        </div>

                        {/* Footer Links */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-items-end">
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-white uppercase tracking-wider text-sm">Shop</h4>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">New Arrivals</a>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">Best Sellers</a>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">Accessories</a>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">Gift Cards</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-white uppercase tracking-wider text-sm">Support</h4>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">Contact Us</a>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">Shipping</a>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">Returns</a>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">FAQ</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="font-bold text-white uppercase tracking-wider text-sm">Legal</h4>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
                                <a className="text-white/60 dark:text-gray-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 dark:text-gray-500">
                        <p>© 2024 PremiumShop. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a className="hover:text-white transition-colors" href="#">Instagram</a>
                            <a className="hover:text-white transition-colors" href="#">Twitter</a>
                            <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

