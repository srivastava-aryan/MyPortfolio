import React from 'react';
import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">DevPortfolio.</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Crafting exceptional digital experiences through innovative full-stack development 
                and thoughtful problem-solving. Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/srivastava-aryan"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 transform hover:scale-110"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aryan-srivastava2608/"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:aryansrivastava0826@gmail.com"
                  className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>API Development</li>
                <li>System Architecture</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DevPortfolio. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1 mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of chai...</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};