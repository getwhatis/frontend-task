import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col space-y-20">
        <div className="text-4xl">TODO List</div>
        <Todo />
      </div>
    </div>
  );
}

const todos = [
  {
    name: "Learn React",
    isComplete: false,
  },
  {
    name: "Learn Redux",
    isComplete: false,
  },
  {
    name: "Build an app",
    isComplete: false,
  },
];

const Todo = () => {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="flex space-x-4 items-center">
        <div>
          <input
            type="text"
            className="border-blue-200 border-2 rounded-lg p-2"
          />
        </div>
        <div>
          <button className="p-2 bg-blue-200 hover:bg-blue-400 hover:text-white rounded-lg border-2 border-blue-200 hover:border-blue-400">
            Add task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-48">
        <div className="flex flex-col space-y-4">
          <div>
            <h1 className="text-xl font-semibold">Tasks TODO</h1>
          </div>
          <div className="flex flex-col space-y-2 items-center">
            {todos
              .filter((task) => !task.isComplete)
              .map((task) => (
                <div className="flex space-x-4">
                  <div>{task.name}</div>
                  <div>
                    <input type="checkbox" checked={false} />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h1 className="text-xl font-semibold">Tasks Done</h1>
          </div>
          No tasks done yet
        </div>
      </div>
    </div>
  );
};

export default App;
