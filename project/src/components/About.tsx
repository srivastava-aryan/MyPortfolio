import React from 'react';
import { User, Heart, Coffee, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and pushing the boundaries of web development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Who I Am
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a passionate full-stack developer currently sharpening my skills through real-world projects.
                    I love solving problems, exploring new technologies, and transforming ideas into functional, user-friendly applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    What I Love
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Beyond coding, I'm passionate about user experience design, performance 
                    optimization, and staying up-to-date with the latest technologies. 
                    I believe great software should be both powerful and delightful to use.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    My Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I approach every project with curiosity and attention to detail. 
                    Whether it's architecting a complex backend system or crafting an 
                    intuitive user interface, I focus on quality and maintainability.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">10+</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">150+</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">DSA Problems Solved</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4">
                      <Coffee className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Chai Enthusiast</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">∞</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Always Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};