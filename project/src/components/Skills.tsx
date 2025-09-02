import React from 'react';
import { Trophy, Target, Code2, Award } from 'lucide-react';
import { SKILLS, DSA_PLATFORMS } from '../utils/constants';

export const Skills: React.FC = () => {
  const skillCategories = [...new Set(SKILLS.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category) => (
              <div
                key={category}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {category}
                </h3>
                <div className="space-y-4">
                  {SKILLS.filter(skill => skill.category === category).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DSA Skills Section */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Data Structures & Algorithms
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Competitive programming achievements and problem-solving expertise across major platforms
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {DSA_PLATFORMS.map((platform) => (
                <div
                  key={platform.name}
                  className={`${platform.bgColor} rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${platform.color} mb-4`}>
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {platform.name}
                    </h4>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${platform.textColor} bg-white dark:bg-gray-800 mb-3`}>
                      {platform.badge}
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Problems Solved:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{platform.solved}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{platform.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">150+</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Total Problems</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">15+</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Contests Participated</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
                <Code2 className="w-8 h-8 text-amber-600 dark:text-amber-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">Intermediate</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Algorithm Level</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
                <Trophy className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">-</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Global Ranking</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Frontend</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Modern UI/UX</p>
            </div>
            <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">Backend</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Scalable APIs</p>
            </div>
            <div className="text-center p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">Database</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Data Management</p>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">DevOps</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">CI/CD & Cloud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};