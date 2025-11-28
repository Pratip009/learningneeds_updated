/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import React, { useState, } from 'react';
import { Award, Target, Heart, Users, Handshake, Lightbulb, Sprout, Flag, CheckCircle, Star, TrendingUp, Briefcase, } from 'lucide-react';

const LearningNeedsTree = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);




  const learningItems = [
    { letter: 'L', word: 'Leadership', icon: Award, color: 'from-purple-500 to-pink-500', description: 'Guide and inspire others' },
    { letter: 'E', word: 'Effectiveness', icon: Target, color: 'from-blue-500 to-cyan-500', description: 'Achieve optimal results' },
    { letter: 'A', word: 'Attitude', icon: Heart, color: 'from-red-500 to-orange-500', description: 'Maintain positive mindset' },
    { letter: 'R', word: 'Relation', icon: Users, color: 'from-green-500 to-emerald-500', description: 'Build strong connections' },
    { letter: 'N', word: 'Negotiation', icon: Handshake, color: 'from-yellow-500 to-amber-500', description: 'Find mutual agreements' },
    { letter: 'I', word: 'Innovation', icon: Lightbulb, color: 'from-indigo-500 to-purple-500', description: 'Create and implement new ideas' },
    { letter: 'N', word: 'Nurture', icon: Sprout, color: 'from-teal-500 to-green-500', description: 'Develop and cultivate growth' },
    { letter: 'G', word: 'Goal', icon: Flag, color: 'from-pink-500 to-rose-500', description: 'Set and achieve objectives' },
    { letter: 'N', word: 'Needful', icon: CheckCircle, color: 'from-cyan-500 to-blue-500', description: 'Focus on essentials' },
    { letter: 'E', word: 'Essential', icon: Star, color: 'from-orange-500 to-red-500', description: 'Core fundamentals' },
    { letter: 'E', word: 'Expectational', icon: TrendingUp, color: 'from-violet-500 to-purple-500', description: 'Meet and exceed standards' },
    { letter: 'D', word: 'Development', icon: TrendingUp, color: 'from-emerald-500 to-teal-500', description: 'Continuous improvement' },
    { letter: 'S', word: 'Service', icon: Briefcase, color: 'from-amber-500 to-yellow-500', description: 'Deliver value to others' },
  ];

  // Organize items in dome layers
  const layers = [
    [learningItems[0]], // Top - Leadership
    [learningItems[1], learningItems[2]], // Second layer
    [learningItems[3], learningItems[4], learningItems[5]], // Third layer
    [learningItems[6], learningItems[7], learningItems[8], learningItems[9]], // Fourth layer
    [learningItems[10], learningItems[11], learningItems[12]], // Base layer
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50 to-orange-100 relative overflow-hidden">
      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-red-600 to-cyan-600 mb-2 sm:mb-4 sparkle-text">
              Learning Needs Traits
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl px-4">
              Building excellence from foundation to leadership
            </p>
          </div>

          {/* Dome Structure */}
          <div className="relative max-w-6xl mx-auto">
            {/* Background dome glow */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-100 via-pink-50 to-transparent blur-3xl opacity-50"></div>

            {/* Layers */}
            <div className="relative space-y-4 sm:space-y-6 md:space-y-8">
              {layers.map((layer, layerIndex) => {
                const itemCount = layer.length;
                const isSingleItem = itemCount === 1;

                return (
                  <div key={layerIndex} className="relative">
                    {/* Connecting lines for hierarchy */}
                    {layerIndex < layers.length - 1 && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-purple-400/50 to-transparent"></div>
                    )}

                    <div className={`
                      flex items-stretch justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6
                      ${isSingleItem ? '' : 'flex-wrap'}
                      px-2 sm:px-4
                    `}>
                      {layer.map((item, itemIndex) => {
                        const Icon = item.icon;
                        const globalIndex = learningItems.indexOf(item);

                        return (
                          <div
                            key={itemIndex}
                            onMouseEnter={() => setHoveredItem(globalIndex)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`
                              relative
                              ${isSingleItem ? 'w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg' :
                                'w-28 xs:w-32 sm:w-36 md:w-44 lg:w-52'}
                            `}
                          >
                            {/* Connection line to parent */}
                            {layerIndex > 0 && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-4 sm:h-6 md:h-8 bg-gradient-to-t from-purple-400/50 to-transparent"></div>
                            )}

                            <div
                              className={`
                                bg-gradient-to-br ${item.color} p-0.5 sm:p-1 rounded-xl sm:rounded-2xl
                                transform transition-all duration-300 cursor-pointer
                                ${hoveredItem === globalIndex ? 'scale-105 shadow-2xl shadow-purple-300/50' : 'scale-100 shadow-lg'}
                                h-full
                              `}
                            >
                              <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 h-full flex flex-row">
                                <div
                                  className={`
    flex flex-1
    ${isSingleItem
                                      ? 'flex-row items-center gap-3 sm:gap-4' /* Leadership → row on all screens including mobile */
                                      : 'flex-col items-center text-center gap-2 sm:gap-3'
                                    }
  `}
                                >

                                  {/* Letter Circle */}
                                  <div className={`
                                    ${isSingleItem ? 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20' :
                                      'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14'}
                                    rounded-full bg-gradient-to-br ${item.color}
                                    flex items-center justify-center flex-shrink-0
                                    shadow-lg
                                  `}>
                                    <span className={`text-white font-bold ${isSingleItem ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' : 'text-base sm:text-lg md:text-xl lg:text-2xl'}`}>
                                      {item.letter}
                                    </span>
                                  </div>

                                  {/* Text Content */}
                                  <div className="flex-1 min-w-0">
                                    <h3 className={`text-gray-800 font-bold ${isSingleItem ? 'text-base sm:text-lg md:text-xl lg:text-2xl' : 'text-xs sm:text-sm md:text-base lg:text-lg'} mb-0.5 sm:mb-1`}>
                                      {item.word}
                                    </h3>
                                    <p className={`
                                      text-gray-600 transition-all duration-300
                                      ${isSingleItem ? 'text-xs sm:text-sm md:text-base' : 'text-[10px] sm:text-xs md:text-sm'}
                                      ${hoveredItem === globalIndex ? 'opacity-100' : 'opacity-70'}
                                    `}>
                                      {item.description}
                                    </p>
                                  </div>
                                </div>

                                {/* Icon - Fixed at bottom */}
                                <div className={`
                                  flex justify-center mt-2 sm:mt-3
                                  transform transition-all duration-300
                                  ${hoveredItem === globalIndex ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
                                `}>
                                  <Icon className={`${isSingleItem ? 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10' : 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7'} text-gray-700`} />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Base platform */}

          </div>


        </div>
      </div>
    </div>
  );
};

export default LearningNeedsTree;