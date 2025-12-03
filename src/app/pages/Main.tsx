"use client"

import React from 'react'
import { FaRocket, FaHeadset } from 'react-icons/fa'

const Hero: React.FC = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-end justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-black to-blue-980">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
        {/* Accent lights */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 py-32 mb-20">
        {/* Main Heading - Positioned Lower */}
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white block">
              Empowering Business
            </span>
            <span className="text-blue-200 block text-xl sm:text-2xl md:text-3xl font-normal mt-6">
              with Intelligent Automation
            </span>
          </h1>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Transform your business with cutting-edge AI solutions. We empower SMEs, educational institutions, and organizations to achieve unprecedented growth.
        </p>

        {/* Value Proposition */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-5">
            <p className="text-white text-base sm:text-lg font-medium italic">
              "Stop wasting time on manual tasks. Let our AI agents handle the work while you focus on growing your business."
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 sm:w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={handleContactClick}
            className="group relative bg-white hover:bg-blue-50 text-blue-900 font-medium py-3.5 px-10 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-white/30 inline-flex items-center gap-3 overflow-hidden w-full sm:w-auto justify-center border border-blue-300"
          >
            <FaRocket className="text-blue-900 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">Get Free Consultation</span>
          </button>
          
          <button 
            onClick={handleContactClick}
            className="group relative bg-blue-800/50 hover:bg-blue-800 text-white font-medium py-3.5 px-10 rounded-lg transition-all duration-300 hover:shadow-lg border border-blue-600 hover:border-blue-500 inline-flex items-center gap-3 overflow-hidden w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            <FaHeadset className="text-blue-300 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-semibold">Inquire About AI</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
          {[
            { number: "10+", label: "AI Solutions" },
            { number: "100+", label: "Happy Clients" },
            { number: "99.9%", label: "Satisfaction" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-blue-400/30 hover:border-blue-300 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-blue-200 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-300">
            <div className="text-center">
              <div className="text-sm font-semibold">Fast Deployment</div>
              <div className="text-xs text-blue-200">2-4 Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold">Proven Results</div>
              <div className="text-xs text-blue-200">ROI Focused</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold">Data Secure</div>
              <div className="text-xs text-blue-200">Enterprise Grade</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative mt-8">
          <div className="flex flex-col items-center gap-3">
            <span className="text-blue-300 text-xs font-light uppercase tracking-widest">
              Scroll to Explore
            </span>
            <div className="w-6 h-10 border border-blue-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero