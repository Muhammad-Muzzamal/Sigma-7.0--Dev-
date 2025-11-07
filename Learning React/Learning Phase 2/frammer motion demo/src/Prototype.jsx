import React, { useState } from "react";

// SyncBoard Prototype - Single-file React component (Default export)
// How to use: Create a React app (Vite or CRA), add Tailwind, then replace App.jsx with this file.
// This prototype demonstrates: boards list, board view, lists, tasks, drag & drop, and simple modals.

export default function SyncBoardPrototype() {
  const initial = [
    {
      id: "board-1",
      title: "Website Redesign",
      lists: [
        {
          id: "list-1",
          title: "To Do",
          tasks: [
            { id: "t1", title: "Header fixes", assignee: "Ali", priority: "High" },
            { id: "t2", title: "Landing hero copy", assignee: "Sara", priority: "Medium" },
          ],
        },
        {
          id: "list-2",
          title: "In Progress",
          tasks: [
            { id: "t3", title: "Setup analytics", assignee: "Muzzamil", priority: "Low" },
          ],
        },
        {
          id: "list-3",
          title: "Done",
          tasks: [
            { id: "t4", title: "Wireframes", assignee: "Ali", priority: "Low" },
          ],
        },
      ],
    },
    {
      id: "board-2",
      title: "Mobile App",
      lists: [
        { id: "l4", title: "Backlog", tasks: [{ id: "t5", title: "Auth flow" }] },
      ],
    },
  ];

  const [boards, setBoards] = useState(initial);
  const [activeBoardId, setActiveBoardId] = useState(boards[0].id);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskListId, setNewTaskListId] = useState(boards[0].lists[0].id);

  const activeBoard = boards.find((b) => b.id === activeBoardId);

  // Drag & Drop handlers (HTML5)
  function onDragStart(e, taskId, fromListId) {
    e.dataTransfer.setData("text/plain", JSON.stringify({ taskId, fromListId }));
  }

  function onDrop(e, toListId) {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const { taskId, fromListId } = data;

    if (fromListId === toListId) return; // no-op

    setBoards((prev) =>
      prev.map((board) => {
        if (board.id !== activeBoardId) return board;
        const lists = board.lists.map((list) => {
          // remove task from source
          if (list.id === fromListId) {
            return { ...list, tasks: list.tasks.filter((t) => t.id !== taskId) };
          }
          // add task to target
          if (list.id === toListId) {
            const draggedTask = board.lists
              .flatMap((l) => l.tasks)
              .find((t) => t.id === taskId);
            return { ...list, tasks: [draggedTask, ...list.tasks] };
          }
          return list;
        });
        return { ...board, lists };
      })
    );
  }

  function allowDrop(e) {
    e.preventDefault();
  }

  function addTask() {
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: "t" + Math.random().toString(36).slice(2, 9),
      title: newTaskTitle,
      assignee: "Unassigned",
      priority: "Medium",
    };

    setBoards((prev) =>
      prev.map((b) => {
        if (b.id !== activeBoardId) return b;
        return {
          ...b,
          lists: b.lists.map((l) => (l.id === newTaskListId ? { ...l, tasks: [newTask, ...l.tasks] } : l)),
        };
      })
    );

    setNewTaskTitle("");
    setShowAddTask(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-white">SB</div>
            <h1 className="text-xl font-semibold">SyncBoard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">Muzzamil</div>
            <button className="px-3 py-1 bg-amber-600 text-white rounded">New Board</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar: Boards */}
          <aside className="w-64 bg-white rounded p-4 shadow-sm">
            <h2 className="text-sm font-semibold mb-3">Your Boards</h2>
            <ul className="space-y-2">
              {boards.map((b) => (
                <li
                  key={b.id}
                  onClick={() => setActiveBoardId(b.id)}
                  className={`p-2 rounded cursor-pointer hover:bg-gray-50 ${b.id === activeBoardId ? "bg-amber-50 border-l-2 border-amber-500" : ""}`}
                >
                  {b.title}
                </li>
              ))}
            </ul>
          </aside>

          {/* Board View */}
          <section className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">{activeBoard.title}</h2>
              <div className="flex items-center gap-3">
                <button onClick={() => setShowAddTask(true)} className="px-3 py-2 bg-amber-600 text-white rounded">+ Add Task</button>
                <button className="px-3 py-2 border rounded">Share</button>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4">
              {activeBoard.lists.map((list) => (
                <div key={list.id} className="min-w-[300px] bg-white rounded p-3 shadow-sm">
                  <h3 className="font-semibold mb-3">{list.title}</h3>
                  <div onDragOver={allowDrop} onDrop={(e) => onDrop(e, list.id)} className="space-y-3 min-h-[120px]">
                    {list.tasks.map((task) => (
                      <div
                        key={task.id}
                        draggable
                        onDragStart={(e) => onDragStart(e, task.id, list.id)}
                        className="p-3 bg-gray-50 rounded border cursor-grab"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-semibold">{task.title}</div>
                            <div className="text-xs text-gray-500">{task.assignee} • {task.priority}</div>
                          </div>
                          <div className="text-xs text-gray-400">•••</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Activity / Analytics Placeholder */}
            <div className="mt-6 bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold mb-2">Activity</h4>
              <div className="text-sm text-gray-600">Recent activity will appear here (e.g., "Ali moved Header fixes to In Progress").</div>
            </div>
          </section>
        </div>
      </main>

      {/* Modal: Add Task */}
      {showAddTask && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded max-w-md w-full p-6">
            <h3 className="font-semibold mb-3">Add Task</h3>
            <input value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} placeholder="Task title" className="w-full border p-2 rounded mb-3" />
            <label className="text-sm text-gray-600">Choose List</label>
            <select className="w-full border p-2 rounded mt-1 mb-4" value={newTaskListId} onChange={(e) => setNewTaskListId(e.target.value)}>
              {activeBoard.lists.map((l) => (
                <option value={l.id} key={l.id}>{l.title}</option>
              ))}
            </select>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowAddTask(false)} className="px-3 py-2 border rounded">Cancel</button>
              <button onClick={addTask} className="px-3 py-2 bg-amber-600 text-white rounded">Add</button>
            </div>
          </div>
        </div>
      )}

      <footer className="text-center text-xs text-gray-500 p-4">SyncBoard Prototype • Built by Muzzamil</footer>
    </div>
  );
}
