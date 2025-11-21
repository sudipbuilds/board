import { DeleteArea } from "./delete-area";
import { KanbanBoard } from "./kanban-board";
import { useTasks } from "@/hooks/useTasks";

export const Board = () => {
  const { tasks, clearAllTasks, moveTask, clearColumn, moveAllTasks, addTask, deleteTask } = useTasks();

  const handleShowLanding = () => {
    try {
      localStorage.removeItem("board-landing-page-visited");
      window.location.reload();
    } catch (error) {
      console.warn("Failed to reset landing page state:", error);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full p-6 w-full overflow-hidden">
      <DeleteArea
        tasks={tasks}
        onClearAll={clearAllTasks}
        onDeleteTask={deleteTask}
        onShowLanding={handleShowLanding}
      />
      <KanbanBoard 
        tasks={tasks}
        moveTask={moveTask}
        clearColumn={clearColumn}
        moveAllTasks={moveAllTasks}
        addTask={addTask}
      />
    </div>
  );
};
