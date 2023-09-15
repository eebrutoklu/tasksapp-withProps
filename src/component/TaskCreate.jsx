import { useState } from "react";
import TaskList from "./TaskList";

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };
  return (
    <>
      {taskFormUpdate ? (
        <div className="taskUpdateCreate">
          <h3>Lütfen Görevi Düzenleyiniz</h3>
          <form className="taskForm">
            <label>Bsşlık</label>
            <input value={title} onChange={handleChange} />
            <label>Görev Açıklaması</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} />
            <button onClick={handleSubmit}>Düzenle</button>
          </form>
        </div>
      ) : (
        <div className="taskCreate">
          <h3>Lütfen Görev Giriniz.</h3>
          <form className="taskForm">
            <label>Başlık</label>
            <input value={title} onChange={handleChange} />
            <label>Görev Açıklaması</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} />
            <button onClick={handleSubmit}>Oluştur</button>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskCreate;
