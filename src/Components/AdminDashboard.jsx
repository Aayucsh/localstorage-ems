import React, { useEffect, useState } from "react";

const AdminDashboard = ({ data, handleLogOut }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogOut}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Log out
          </button>
        </header>

        <form className="bg-white rounded-lg shadow p-6 mb-8" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Create New Task
          </h2>
          <div className=" flex gap-10 justify-evenly ">
            <div className="flex flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Task Title"
                required
                onChange={(e) => setTaskTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Assign To"
                required
                onChange={(e) => setAssignTo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <input
                type="text"
                placeholder="Category"
                required
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <input
                type="date"
                placeholder="Deadline"
                required
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div className="flex flex-col gap-4 w-full justify-between">
              <textarea
                placeholder="Task Description"
                rows="4"
                required
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>

        <div className="bg-blue-50 rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-5 bg-blue-200 border-b border-gray-200">
            <div className="p-4 font-semibold text-gray-700 text-center">
              Employee Name
            </div>
            <div className="p-4 font-semibold text-gray-700 text-center">
              New Task
            </div>
            <div className="p-4 font-semibold text-gray-700 text-center">
              Active Task
            </div>
            <div className="p-4 font-semibold text-gray-700 text-center">
              Completed Task
            </div>
            <div className="p-4 font-semibold text-gray-700 text-center">
              Failed Task
            </div>
          </div>
          {
            data.map((items, index)=>{
              return <div key={index} className="grid grid-cols-5 hover:bg-gray-50 border-y-[0.5px] transition-colors">
              <div className="p-4 text-gray-600 text-center">{items.firstName}</div>
              <div className="p-4 text-gray-600 text-center">{items.taskCounts.newTask}</div>
              <div className="p-4 text-gray-600 text-center">{items.taskCounts.active}</div>
              <div className="p-4 text-gray-600 text-center">{items.taskCounts.completed}</div>
              <div className="p-4 text-gray-600 text-center">{items.taskCounts.failed}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
