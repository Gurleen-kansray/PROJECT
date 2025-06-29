import React, { useEffect, useRef } from 'react';
import { TrendingUp, BarChart3, PieChart, Users, BookOpen, Target } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Progress = () => {
  // Grade Distribution Chart Data
  const gradeDistributionData = {
    labels: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F'],
    datasets: [
      {
        label: 'Number of Students',
        data: [45, 78, 92, 156, 134, 89, 34, 12],
        backgroundColor: [
          '#10B981',
          '#34D399',
          '#60A5FA',
          '#3B82F6',
          '#8B5CF6',
          '#A855F7',
          '#F59E0B',
          '#EF4444',
        ],
        borderWidth: 0,
        borderRadius: 8,
      },
    ],
  };

  // Performance Trend Chart Data
  const performanceTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Average Grade (%)',
        data: [78, 82, 85, 83, 87, 89, 91, 88, 92, 94, 90, 93],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  // Subject Performance Data
  const subjectPerformanceData = {
    labels: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'],
    datasets: [
      {
        data: [92, 88, 85, 90, 87, 83],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
          '#06B6D4',
        ],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Academic Progress</h1>
                <p className="text-sm text-gray-600">Track student performance and academic trends</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>87.4% Avg</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-blue-500" />
                <span>1,234 Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Average</p>
                <p className="text-2xl font-bold text-blue-600">87.4%</p>
                <p className="text-xs text-green-600 mt-1">+2.3% from last month</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Top Performers</p>
                <p className="text-2xl font-bold text-green-600">123</p>
                <p className="text-xs text-gray-500 mt-1">Students with A grade</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Improvement Rate</p>
                <p className="text-2xl font-bold text-purple-600">78%</p>
                <p className="text-xs text-gray-500 mt-1">Students improving</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                <p className="text-2xl font-bold text-orange-600">94.2%</p>
                <p className="text-xs text-gray-500 mt-1">Assignment completion</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Grade Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Grade Distribution</h3>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-80">
              <Bar data={gradeDistributionData} options={chartOptions} />
            </div>
          </div>

          {/* Performance Trend */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Performance Trend</h3>
              <TrendingUp className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-80">
              <Line data={performanceTrendData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Subject Performance and Top Students */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Subject Performance */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Subject Performance</h3>
              <PieChart className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-80">
              <Doughnut data={subjectPerformanceData} options={doughnutOptions} />
            </div>
          </div>

          {/* Top Performing Students */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Top Performing Students</h3>
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {[
                { name: 'Sarah Johnson', grade: '98.5%', subject: 'Mathematics', rank: 1 },
                { name: 'Michael Chen', grade: '97.2%', subject: 'Physics', rank: 2 },
                { name: 'Emily Rodriguez', grade: '96.8%', subject: 'Chemistry', rank: 3 },
                { name: 'David Kim', grade: '95.9%', subject: 'Biology', rank: 4 },
                { name: 'Lisa Wang', grade: '95.1%', subject: 'English', rank: 5 },
              ].map((student, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      student.rank === 1 ? 'bg-yellow-500' :
                      student.rank === 2 ? 'bg-gray-400' :
                      student.rank === 3 ? 'bg-orange-600' : 'bg-blue-500'
                    }`}>
                      {student.rank}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{student.name}</p>
                      <p className="text-sm text-gray-500">{student.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-600">{student.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Progress Updates */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Progress Updates</h3>
          <div className="space-y-4">
            {[
              {
                student: 'Alex Thompson',
                update: 'Improved from B+ to A- in Mathematics',
                time: '2 hours ago',
                type: 'improvement'
              },
              {
                student: 'Maria Garcia',
                update: 'Completed Advanced Physics project with distinction',
                time: '5 hours ago',
                type: 'achievement'
              },
              {
                student: 'James Wilson',
                update: 'Needs attention in Chemistry - grade dropped to C+',
                time: '1 day ago',
                type: 'concern'
              },
              {
                student: 'Sophie Brown',
                update: 'Perfect attendance for the month',
                time: '2 days ago',
                type: 'achievement'
              }
            ].map((update, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  update.type === 'improvement' ? 'bg-blue-500' :
                  update.type === 'achievement' ? 'bg-green-500' : 'bg-yellow-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{update.student}</p>
                  <p className="text-sm text-gray-600 mt-1">{update.update}</p>
                  <p className="text-xs text-gray-400 mt-2">{update.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;