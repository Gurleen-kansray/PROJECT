import React from 'react';
import { Users, Calendar, TrendingUp, Award, BookOpen, Clock } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import RecentActivity from '../components/RecentActivity';
import QuickActions from '../components/QuickActions';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Present Today',
      value: '1,156',
      change: '+5%',
      changeType: 'positive' as const,
      icon: Calendar,
      color: 'green'
    },
    {
      title: 'Average Grade',
      value: '85.4%',
      change: '+2.1%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Achievements',
      value: '342',
      change: '+18%',
      changeType: 'positive' as const,
      icon: Award,
      color: 'yellow'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Your Dashboard
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Monitor student progress, track attendance, and manage your educational institution with ease.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>

          {/* Quick Actions */}
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Additional Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {[
                { title: 'Parent-Teacher Meeting', date: 'Dec 20, 2024', time: '10:00 AM' },
                { title: 'Science Fair', date: 'Dec 22, 2024', time: '2:00 PM' },
                { title: 'Winter Break Begins', date: 'Dec 25, 2024', time: 'All Day' }
              ].map((event, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{event.title}</p>
                    <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
              <BookOpen className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active Courses</span>
                <span className="font-semibold text-gray-900">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Teachers</span>
                <span className="font-semibold text-gray-900">48</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Departments</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Graduation Rate</span>
                <span className="font-semibold text-green-600">94.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;