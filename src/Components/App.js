export default function App() {
  return (
    <div>
      <div>
        <h2>To-do List</h2>
        <div>
          <ol>
            <li>
              <div>
                <label>Learn CSS</label>
                <button>Edit</button>
                <button>Mark as complete</button>
                <button>Delete</button>
              </div>
            </li>
            <li>
              <div>
                <label>Learn React</label>
                <button>Edit</button>
                <button>Mark as complete</button>
                <button>Delete</button>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div>
        <h2>Completed List</h2>
        <div>
          <ol>
            <li>
              <div>
                <label>Learn HTML</label>
                <button>Mark as not complete</button>
                <button>Delete</button>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
