import React from 'react';
import { Award, Trophy, Star, Medal, Crown, Target, Zap, BookOpen } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  category: string;
  earnedBy: number;
  totalStudents: number;
  recentEarners: string[];
}

const Achievements = () => {
  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Perfect Attendance',
      description: 'Attend all classes for a full month',
      icon: Trophy,
      color: 'gold',
      category: 'Attendance',
      earnedBy: 89,
      totalStudents: 1234,
      recentEarners: ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez']
    },
    {
      id: '2',
      title: 'Academic Excellence',
      description: 'Maintain A+ grade for 3 consecutive months',
      icon: Crown,
      color: 'purple',
      category: 'Academic',
      earnedBy: 45,
      totalStudents: 1234,
      recentEarners: ['David Kim', 'Lisa Wang', 'Alex Thompson']
    },
    {
      id: '3',
      title: 'Quick Learner',
      description: 'Complete 5 courses ahead of schedule',
      icon: Zap,
      color: 'blue',
      category: 'Learning',
      earnedBy: 67,
      totalStudents: 1234,
      recentEarners: ['Maria Garcia', 'James Wilson', 'Sophie Brown']
    },
    {
      id: '4',
      title: 'Knowledge Seeker',
      description: 'Read 20 additional books this semester',
      icon: BookOpen,
      color: 'green',
      category: 'Reading',
      earnedBy: 123,
      totalStudents: 1234,
      recentEarners: ['Oliver Davis', 'Emma Martinez', 'Noah Johnson']
    },
    {
      id: '5',
      title: 'Team Player',
      description: 'Participate in 10 group projects',
      icon: Star,
      color: 'orange',
      category: 'Collaboration',
      earnedBy: 156,
      totalStudents: 1234,
      recentEarners: ['Ava Wilson', 'Liam Brown', 'Isabella Garcia']
    },
    {
      id: '6',
      title: 'Goal Achiever',
      description: 'Complete all personal learning goals',
      icon: Target,
      color: 'red',
      category: 'Goals',
      earnedBy: 78,
      totalStudents: 1234,
      recentEarners: ['Ethan Davis', 'Mia Rodriguez', 'Lucas Martinez']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      gold: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconBgColor = (color: string) => {
    const colors = {
      gold: 'bg-yellow-500',
      purple: 'bg-purple-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      orange: 'bg-orange-500',
      red: 'bg-red-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const categories = ['All', 'Academic', 'Attendance', 'Learning', 'Reading', 'Collaboration', 'Goals'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAchievements = selectedCategory === 'All' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Student Achievements</h1>
                <p className="text-sm text-gray-600">Celebrate success and recognize outstanding performance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4 text-yellow-500" />
                <span>342 Total</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-purple-500" />
                <span>89 This Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">342</p>
            <p className="text-sm text-gray-600">Total Achievements</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">89</p>
            <p className="text-sm text-gray-600">This Month</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">67%</p>
            <p className="text-sm text-gray-600">Participation Rate</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-100">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Medal className="h-6 w-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">156</p>
            <p className="text-sm text-gray-600">Top Achievers</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => (
            <div key={achievement.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
              {/* Achievement Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconBgColor(achievement.color)}`}>
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getColorClasses(achievement.color)}`}>
                    {achievement.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{achievement.earnedBy}/{achievement.totalStudents}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${getIconBgColor(achievement.color)}`}
                    style={{ width: `${(achievement.earnedBy / achievement.totalStudents) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {Math.round((achievement.earnedBy / achievement.totalStudents) * 100)}% of students earned this
                </p>
              </div>

              {/* Recent Earners */}
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">Recent Earners</p>
                <div className="space-y-1">
                  {achievement.recentEarners.map((earner, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">
                          {earner.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">{earner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Achievement Leaderboard</h3>
          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', achievements: 12, rank: 1, avatar: 'SJ' },
              { name: 'Michael Chen', achievements: 11, rank: 2, avatar: 'MC' },
              { name: 'Emily Rodriguez', achievements: 10, rank: 3, avatar: 'ER' },
              { name: 'David Kim', achievements: 9, rank: 4, avatar: 'DK' },
              { name: 'Lisa Wang', achievements: 8, rank: 5, avatar: 'LW' },
            ].map((student, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    student.rank === 1 ? 'bg-yellow-500' :
                    student.rank === 2 ? 'bg-gray-400' :
                    student.rank === 3 ? 'bg-orange-600' : 'bg-blue-500'
                  }`}>
                    {student.rank}
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{student.avatar}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.achievements} achievements earned</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-gray-900">{student.achievements}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;