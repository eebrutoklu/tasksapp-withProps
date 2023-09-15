import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit); //true de yazılabilir.
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false); //düzenleme bittiğinde ekranın değşmesi
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  console.log(task);
  return (
    <>
      <div className="taskShow">
        {showEdit ? (
          <TaskCreate
            task={task}
            taskFormUpdate={true}
            onUpdate={handleSubmit}
          />
        ) : (
          <div>
            <h3>Göreviniz</h3>
            <p>{task.title}</p>
            <h3>Yapılacaklar</h3>
            <p className="tasktextarea">{task.taskDesc}</p>
            <div>
              <button className="deleteButton" onClick={handleDeleteClick}>
                Sil
              </button>
              <button className="updateButton" onClick={handleEditClick}>
                Düzenle
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TaskShow;
