import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight } from 'lucide-react';
import backgroundImage from '@/assets/background.jpg';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      acceptTerms: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Left Column - Background Image with Text Overlay */}
          <div 
            className="relative flex flex-col justify-center items-start p-8 md:p-12 text-white"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Create your Account
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Share your artwork and Get projects!
              </p>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="flex flex-col justify-center p-8 md:p-12 bg-white">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Sign Up
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full"
                    required
                  />
                </div>

                {/* Terms & Conditions Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="acceptTerms" className="text-sm text-gray-600">
                    I accept the Terms & Conditions
                  </Label>
                </div>

                {/* Join Us Button */}
                <Button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  disabled={!formData.acceptTerms}
                >
                  <span>Join us</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">or</span>
                  </div>
                </div>

                {/* Google Sign Up Button */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Sign up with Google</span>
                </Button>

                {/* Apple Sign Up Button */}
                <Button
                  type="button"
                  className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-3 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 12.013c-.051-3.015 2.463-4.47 2.571-4.538-1.395-2.04-3.569-2.32-4.346-2.354-1.845-.195-3.604 1.088-4.542 1.088-.938 0-2.391-1.063-3.926-1.035-2.017.032-3.874 1.173-4.913 2.981-2.091 3.63-.536 9.003 1.505 11.947 1.002 1.44 2.194 3.06 3.76 3.001 1.533-.061 2.109-.99 3.962-.99 1.853 0 2.397.99 3.926.958 1.62-.028 2.685-1.469 3.684-2.912 1.158-1.668 1.634-3.284 1.661-3.369-.036-.016-3.189-1.224-3.221-4.857zm-2.82-8.306c.832-1.01 1.394-2.412 1.241-3.81-1.199.048-2.648.8-3.505 1.81-.766.896-1.438 2.329-1.256 3.7 1.329.103 2.686-.674 3.52-1.7z"/>
                  </svg>
                  <span>Sign up with Apple</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;