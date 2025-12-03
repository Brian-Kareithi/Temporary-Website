"use client";
import { useState } from "react";
import Image from "next/image";

interface Solution {
  title: string;
  description: string;
  features: string[];
  icon: string;
  problem: string;
  solution: string;
  image?: string;
}

interface Industry {
  name: string;
  description: string;
  tagline: string;
  solution: string;
  problem: string;
  ourSolution: string;
  image: string;
  comingSoon?: boolean;
}

const solutions: Solution[] = [
  {
    title: "Software Development",
    description: "Custom applications tailored to your business needs, scalable and secure",
    features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
    icon: "💻",
    problem: "Businesses struggle with inefficient manual processes and lack of integrated systems that hinder growth and productivity.",
    solution: "We build custom software solutions that automate workflows, integrate systems, and provide real-time insights for informed decision-making."
  },
  {
    title: "AI Solutions",
    description: "From chatbots to predictive analytics – intelligent solutions that give you a competitive edge",
    features: ["AI Chatbots", "Predictive Analytics", "Machine Learning", "Intelligent Automation"],
    icon: "🤖",
    problem: "Organizations miss opportunities by not leveraging data and AI to optimize operations and customer experiences.",
    solution: "Our AI solutions transform raw data into actionable intelligence, automating complex tasks and providing predictive insights."
  },
  {
    title: "Business Automation",
    description: "Automating repetitive workflows to save time and reduce operational costs",
    features: ["Workflow Automation", "Process Optimization", "Cost Reduction", "Efficiency Boost"],
    icon: "⚡",
    problem: "Manual, repetitive tasks consume valuable time and resources while increasing error rates.",
    solution: "We identify automation opportunities and implement solutions that free up your team to focus on strategic initiatives."
  }
];

const industries: Industry[] = [
  {
    name: "Agriculture",
    description: "Empowering farmers with data-driven insights for better yields",
    tagline: "Grow what counts. Harvest prosperity.",
    solution: "Mavuno Insights",
    problem: "Farmers lack access to real-time data for optimal planting, harvesting, and resource allocation decisions.",
    ourSolution: "Mavuno Insights uses satellite data, weather patterns, and soil analysis to provide actionable agricultural intelligence.",
    image: "https://nowqwttrqtklrxgjgxid.supabase.co/storage/v1/object/public/folder/photos/maize.jpg"
  },
  {
    name: "Retail",
    description: "Transform your retail operations with intelligent solutions",
    tagline: "Sell smarter. Grow faster.",
    solution: "Mavuno Retail",
    problem: "Retailers struggle with inventory management, customer insights, and personalized marketing at scale.",
    ourSolution: "Mavuno Retail provides real-time inventory tracking, customer behavior analytics, and AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    comingSoon: true
  },
  {
    name: "Education",
    description: "Revolutionize learning institutions with cutting-edge technology",
    tagline: "Educate efficiently. Inspire innovation.",
    solution: "Mavuno Edu",
    problem: "Educational institutions face challenges in student engagement, administrative efficiency, and personalized learning.",
    ourSolution: "Mavuno Edu creates digital learning environments that enhance student engagement and streamline administrative processes.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
    comingSoon: true
  },
  {
    name: "Healthcare",
    description: "Enhance patient care and optimize medical operations",
    tagline: "Care better. Heal faster.",
    solution: "Mavuno Health",
    problem: "Healthcare providers need better tools for patient management, data security, and operational efficiency.",
    ourSolution: "Mavuno Health improves patient care coordination while ensuring data security and regulatory compliance.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
    comingSoon: true
  }
];

export default function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0]);
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetSolution = () => {
    setSelectedSolution(null);
    setTimeout(scrollToContact, 300);
  };

  return (
    <section className="min-h-screen w-full py-20 px-4 relative overflow-hidden" id="solutions">
      {/* Minimal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Enterprise Solutions
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Proven technology strategies developed through a decade of solving complex business challenges.
          </p>
        </div>

        {/* Who We Are - Refined */}
        <div className="backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 mb-12 bg-gradient-to-b from-white/5 to-transparent">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Deep Industry Expertise</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              With over a decade of collective experience, we specialize in building AI-powered solutions that address real business challenges across industries.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our methodology combines technical excellence with strategic insight, ensuring solutions that deliver measurable ROI and sustainable competitive advantage.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Enterprise Architecture",
                "AI Strategy & Implementation", 
                "Scalable Infrastructure",
                "Digital Transformation",
                "Data Security & Compliance",
                "Continuous Optimization"
              ].map((item, index) => (
                <div key={index} className="text-center p-3 rounded-lg bg-blue-900/20 border border-blue-500/20">
                  <div className="text-white text-xs font-medium leading-tight">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Solutions - Expert Layout */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:bg-blue-900/10 cursor-pointer group"
              onClick={() => setSelectedSolution(solution)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">
                  {solution.icon}
                </div>
                <span className="text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {solution.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {solution.description}
              </p>
              <div className="space-y-1.5">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-xs font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section - Professional */}
        <div className="backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 bg-gradient-to-b from-white/5 to-transparent">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">
              Industry-Specific Expertise
            </h2>
            <p className="text-gray-400 text-sm">
              Tailored solutions built on deep understanding of sector-specific challenges and opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Industry Selector */}
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative ${
                    selectedIndustry.name === industry.name
                      ? "border-blue-500 bg-blue-900/30"
                      : "border-gray-700 hover:border-blue-500/40 hover:bg-blue-900/10"
                  }`}
                >
                  {industry.comingSoon && (
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded font-medium">
                      SOON
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white">
                      {industry.name}
                    </h3>
                    <span className={`text-xs ${
                      selectedIndustry.name === industry.name 
                        ? "text-blue-400" 
                        : "text-gray-500"
                    }`}>
                      →
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">
                    {industry.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Industry Details */}
            <div className="border border-blue-500/20 rounded-xl p-6 bg-blue-900/5">
              <div className="mb-6">
                {selectedIndustry.comingSoon ? (
                  <div className="w-full h-48 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg mb-4 border border-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-3">🔧</div>
                      <h3 className="text-lg font-semibold text-white mb-1">Solution in Development</h3>
                      <p className="text-blue-400 text-sm">Launching Q1 2024</p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden border border-blue-500/20">
                    <Image 
                      src={selectedIndustry.image} 
                      alt={selectedIndustry.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {selectedIndustry.name}
                  </h3>
                  <p className="text-blue-400 text-sm italic mb-4">
                    {selectedIndustry.tagline}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/20">
                  <h4 className="text-blue-400 font-medium mb-1 text-xs uppercase tracking-wider">Challenge</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {selectedIndustry.problem}
                  </p>
                </div>
                
                <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-500/20">
                  <h4 className="text-blue-400 font-medium mb-1 text-xs uppercase tracking-wider">Strategic Solution</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {selectedIndustry.ourSolution}
                  </p>
                </div>
                
                <div className="pt-4">
                  <div className="inline-block bg-blue-900/30 border border-blue-500/30 rounded px-3 py-1.5 mb-4">
                    <span className="text-blue-300 font-medium text-sm">
                      {selectedIndustry.solution}
                    </span>
                  </div>
                  {selectedIndustry.comingSoon ? (
                    <button className="w-full bg-blue-900/30 text-blue-300 font-medium py-2.5 rounded-lg border border-blue-500/30 cursor-not-allowed text-sm">
                      Available Q1 2024
                    </button>
                  ) : (
                    <button className="w-full bg-blue-900 text-white font-medium py-2.5 rounded-lg hover:bg-blue-800 transition-all duration-300 border border-blue-600 text-sm">
                      Explore {selectedIndustry.solution}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Professional */}
        <div className="text-center mt-12">
          <div className="backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 bg-gradient-to-b from-white/5 to-transparent">
            <h2 className="text-xl font-semibold text-white mb-3">
              Schedule a Strategy Session
            </h2>
            <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
              Let&apos;s analyze your current challenges and develop a customized technology roadmap for your organization.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-blue-900 text-white font-medium py-2.5 px-8 rounded-lg hover:bg-blue-800 transition-all duration-300 border border-blue-600 text-sm"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Solution Detail Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="border border-blue-500/30 rounded-xl p-6 backdrop-blur-lg bg-gray-900/90 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="text-3xl">
                  {selectedSolution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedSolution.title}</h3>
                  <p className="text-gray-400 text-sm">{selectedSolution.description}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedSolution(null)}
                className="text-gray-400 hover:text-white text-xl transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/20">
                  <h4 className="text-blue-400 font-medium mb-2 text-xs uppercase tracking-wider">Business Challenge</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedSolution.problem}
                  </p>
                </div>
                
                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/20">
                  <h4 className="text-blue-400 font-medium mb-2 text-xs uppercase tracking-wider">Our Methodology</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedSolution.solution}
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/20">
                <h4 className="text-blue-400 font-medium mb-2 text-xs uppercase tracking-wider">Capabilities</h4>
                <div className="grid gap-1.5">
                  {selectedSolution.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={handleGetSolution}
                  className="bg-blue-900 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-all duration-300 flex-1 text-sm"
                >
                  Request Proposal
                </button>
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="bg-gray-800 text-gray-300 px-6 py-2.5 rounded-lg font-medium hover:bg-gray-700 hover:text-white transition-all duration-300 flex-1 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}