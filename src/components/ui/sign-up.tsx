import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Rocket, Eye, EyeOff, Diamond } from 'lucide-react';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleCreateAccount = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Creating account with:', { email, password });
        // MVP: Şimdilik sadece konsola yazdır ve ana sayfaya yönlendir
        alert('Hesap başarıyla oluşturuldu!');
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
                        Premium dünyasına <span className="text-primary">hoş geldiniz.</span>
                    </h1>
                    <p className="text-white/60 text-lg">
                        Özenle seçilmiş, eşsiz koleksiyonumuzu keşfedin. Lüksün yeni standardını deneyimleyin.
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
                            <Rocket className="w-7 h-7 text-primary" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Kayıt Ol</h2>
                        <p className="text-gray-600 dark:text-gray-400">PremiumShop ailesine katılın — Yolculuğunuz başlasın</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleCreateAccount} className="space-y-5">
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
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Şifre Oluştur
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="auth-input w-full px-4 py-3.5 pr-12 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white outline-none transition-all"
                                    placeholder="En az 8 karakter"
                                    required
                                    minLength={8}
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

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Şifre Tekrar
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="auth-input w-full px-4 py-3.5 pr-12 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary dark:text-white outline-none transition-all"
                                    placeholder="Şifrenizi tekrar girin"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Create Account Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/90 text-gray-900 font-bold py-4 px-4 rounded-xl transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
                        >
                            Hesap Oluştur
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

                        {/* Login Link */}
                        <div className="text-center">
                            <span className="text-gray-600 dark:text-gray-400">Zaten hesabınız var mı? </span>
                            <Link
                                to="/signin"
                                className="text-gray-900 dark:text-white font-semibold hover:text-primary transition-colors duration-200"
                            >
                                Giriş Yap
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
