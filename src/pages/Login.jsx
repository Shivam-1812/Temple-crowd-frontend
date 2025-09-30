
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Sun, User, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('devotee');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(role);
    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/devotee/dashboard');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Sun className="w-20 h-20 text-orange-600 animate-spin" style={{ animationDuration: '20s' }} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <Sun className="w-16 h-16 text-amber-600 animate-spin" style={{ animationDuration: '15s' }} />
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-full">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent mb-2">
              Temple Darshan
            </h1>
            <p className="text-slate-600 font-medium">Crowd Management System</p>
            <div className="flex justify-center items-center gap-2 mt-3 text-sm text-slate-500">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span>Somnath</span>
              <span className="text-orange-400">•</span>
              <span>Dwarka</span>
              <span className="text-orange-400">•</span>
              <span>Ambaji</span>
              <span className="text-orange-400">•</span>
              <span>Pavagadh</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                placeholder="devotee@temple.com"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Select Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    role === 'devotee'
                      ? 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-500 shadow-lg'
                      : 'bg-white/50 border-slate-200 hover:border-orange-300'
                  }`}
                >
                  <input
                    type="radio"
                    value="devotee"
                    checked={role === 'devotee'}
                    onChange={(e) => setRole(e.target.value)}
                    className="sr-only"
                  />
                  <User className={`w-8 h-8 mb-2 ${role === 'devotee' ? 'text-orange-600' : 'text-slate-400'}`} />
                  <span className={`font-semibold ${role === 'devotee' ? 'text-orange-700' : 'text-slate-600'}`}>
                    Devotee
                  </span>
                </label>

                <label
                  className={`relative flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    role === 'admin'
                      ? 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-500 shadow-lg'
                      : 'bg-white/50 border-slate-200 hover:border-orange-300'
                  }`}
                >
                  <input
                    type="radio"
                    value="admin"
                    checked={role === 'admin'}
                    onChange={(e) => setRole(e.target.value)}
                    className="sr-only"
                  />
                  <Shield className={`w-8 h-8 mb-2 ${role === 'admin' ? 'text-orange-600' : 'text-slate-400'}`} />
                  <span className={`font-semibold ${role === 'admin' ? 'text-orange-700' : 'text-slate-600'}`}>
                    Admin
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 text-white py-4 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all font-semibold text-lg mt-6 relative overflow-hidden group"
            >
              <span className="relative z-10">Begin Darshan</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-500">
              Secure & Sacred Digital Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;