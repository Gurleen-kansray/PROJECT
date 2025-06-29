import React from 'react';
import { Plus, UserPlus, Calendar, FileText, Settings } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'Add Student',
      description: 'Register a new student',
      icon: UserPlus,
      color: 'blue',
      href: '/students'
    },
    {
      title: 'Mark Attendance',
      description: 'Record class attendance',
      icon: Calendar,
      color: 'green',
      href: '/attendance'
    },
    {
      title: 'Generate Report',
      description: 'Create progress reports',
      icon: FileText,
      color: 'purple',
      href: '/progress'
    },
    {
      title: 'System Settings',
      description: 'Configure application',
      icon: Settings,
      color: 'gray',
      href: '#'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500 hover:bg-blue-600',
      green: 'bg-green-500 hover:bg-green-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      gray: 'bg-gray-500 hover:bg-gray-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
          >
            <div className={`p-2 rounded-lg text-white ${getColorClasses(action.color)} group-hover:scale-110 transition-transform`}>
              <action.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{action.title}</p>
              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;