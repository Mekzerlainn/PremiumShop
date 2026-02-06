import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Eye, EyeOff, Diamond } from 'lucide-react';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password, rememberMe });
        // MVP: Şimdilik sadece konsola yazdır ve ana sayfaya yönlendir
        alert('Giriş başarılı!');
        navigate('/');
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Dark Gradient Section */}
            <div className="hidden lg:flex flex-1 auth-gradient items-center justify-center p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-md relative z-10">
                    {/* Logo */}
                    <div className="flex items-center gap-3 mb-12">
                        <Diamond className="w-10 h-10 text-primary" />
                        <span className="text-2xl font-black text-white uppercase tracking-tight">PremiumShop</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                        Tekrar <span className="text-primary">hoş geldiniz.</span>
                    </h1>
                    <p className="text-white/60 text-lg">
                        Hesabınıza giriş yapın ve alışverişe devam edin. Premium deneyiminiz sizi bekliyor.
                    </p>
                </div>
            </div>

            {/* Right Side - Form Section */}
            <div className="flex-1 bg-background-light dark:bg-background-dark flex items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center gap-3 mb-8">
                        <Diamond className="w-8 h-8 text-primary" />
                        <span className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">PremiumShop</span>
                    </div>

                    {/* Icon */}
                    <div className="mb-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                            <LogIn className="w-7 h-7 text-primary" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Giriş Yap</h2>
                        <p className="text-gray-600 dark:text-gray-400">PremiumShop hesabınıza giriş yapın</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                E-posta Adresi
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="auth-input w-full px-4 py-3.5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white outline-none transition-all"
                                placeholder="ornek@email.com"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Şifre
                                </label>
                                <button
                                    type="button"
                                    className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                                >
                                    Şifremi Unuttum
                                </button>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="auth-input w-full px-4 py-3.5 pr-12 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white outline-none transition-all"
                                    placeholder="Şifrenizi girin"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                                Beni hatırla
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-gray-900 font-bold py-4 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
                        >
                            Giriş Yap
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-background-light dark:bg-background-dark text-gray-500">veya</span>
                            </div>
                        </div>

                        {/* Register Link */}
                        <div className="text-center">
                            <span className="text-gray-600 dark:text-gray-400">Hesabınız yok mu? </span>
                            <Link
                                to="/signup"
                                className="text-gray-900 dark:text-white font-semibold hover:text-primary transition-colors duration-200"
                            >
                                Kayıt Ol
                            </Link>
                        </div>
                    </form>

                    {/* Back to Home */}
                    <div className="mt-8 text-center">
                        <Link
                            to="/"
                            className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                        >
                            ← Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
