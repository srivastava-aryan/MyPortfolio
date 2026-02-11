import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-900/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
              Hi, I'm Aryan Srivastava
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Full Stack Developer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
                & Problem Solver
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming algorithms into user-friendly realities with modern tech.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-200">
            <button
              onClick={()=> window.open('/aryan_feb_26.pdf', '_blank')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              View My Resume
            </button>
            <button 
              onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/aryan_feb_26.pdf';
                      link.download = 'aryan_feb_26.pdf';
                      link.click();
                      }}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16 animate-fade-in-up delay-300">
            <a href="https://github.com/srivastava-aryan" target='_blank' className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/aryan-srivastava2608/" target='_blank' className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a href="mailto:aryansrivastava0826@gmail.com" className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-none transition-all duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};