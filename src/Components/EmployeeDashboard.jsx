import React from 'react'

const EmployeeDashboard = ({data, handleLogOut}) => {

  if(!data){
    return <h1>Loading...</h1>
  }
 
  const {firstName, taskCounts, tasks} = data
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-12">
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between rounded-xl pb-4 ">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">Hello, {firstName} 👋</h1>
          <p className="text-gray-500">Welcome to your dashboard</p>
        </div>
        <button onClick={handleLogOut} className="mt-4 md:mt-0 px-4 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center gap-2">
          Log Out
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-blue-500">
          <h2 className="text-gray-600 font-medium mb-2">New Tasks</h2>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold text-blue-700">{taskCounts.newTask}</p>
            <span className="text-blue-500 text-sm">pending</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-green-500">
          <h2 className="text-gray-600 font-medium mb-2">Completed</h2>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold text-green-700">{taskCounts.completed}</p>
            <span className="text-green-500 text-sm">done</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-yellow-500">
          <h2 className="text-gray-600 font-medium mb-2">Active Tasks</h2>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold text-yellow-700">{taskCounts.active}</p>
            <span className="text-yellow-500 text-sm">in progress</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-red-500">
          <h2 className="text-gray-600 font-medium mb-2">Failed Tasks</h2>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold text-red-700">{taskCounts.failed}</p>
            <span className="text-red-500 text-sm">failed</span>
          </div>
        </div>
      </div>

      
      <div className="grid md:grid-cols-2 gap-6">
        {tasks.map((items, index)=>{
          return <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {items.category}
                </span>
                <span className="text-gray-400 text-sm">{items.taskDate}</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">{items.taskTitle}</h1>
              <p className="text-gray-600">{items.taskDescription}</p>
              <div className="flex gap-4 mt-4">
                <button className="px-2  py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                  Mark as Completed
                </button>
                <button className="px-2 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                  Mark as Failed
                </button>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default EmployeeDashboard;