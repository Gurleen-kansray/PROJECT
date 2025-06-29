import React from 'react';
import { User, Calendar, Award, BookOpen } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'student',
      icon: User,
      title: 'New student enrolled',
      description: 'Sarah Johnson joined Computer Science program',
      time: '2 hours ago',
      color: 'blue'
    },
    {
      id: 2,
      type: 'attendance',
      icon: Calendar,
      title: 'Attendance recorded',
      description: 'Mathematics class - 28/30 students present',
      time: '4 hours ago',
      color: 'green'
    },
    {
      id: 3,
      type: 'achievement',
      icon: Award,
      title: 'Achievement unlocked',
      description: 'Alex Chen earned "Perfect Attendance" badge',
      time: '6 hours ago',
      color: 'yellow'
    },
    {
      id: 4,
      type: 'course',
      icon: BookOpen,
      title: 'Course completed',
      description: 'Introduction to Physics - 15 students graduated',
      time: '1 day ago',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      yellow: 'bg-yellow-50 text-yellow-600',
      purple: 'bg-purple-50 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`p-2 rounded-full ${getColorClasses(activity.color)}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-2">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;