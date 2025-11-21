import { Column } from "./column";
import type { Task } from "@/hooks/useTasks";

interface KanbanBoardProps {
  tasks: Task[];
  moveTask: (taskId: string, column: string, beforeId?: string) => void;
  clearColumn: (column: string) => void;
  moveAllTasks: (fromColumn: string, toColumn: string) => void;
  addTask: (title: string, column: string) => void;
}

export const KanbanBoard = ({
  tasks,
  moveTask,
  clearColumn,
  moveAllTasks,
  addTask,
}: KanbanBoardProps) => {
  return (
    <div className="flex-1 flex h-full w-full gap-6 overflow-x-auto pb-4">
      <Column
        title="BACKLOG"
        column="backlog"
        headingColor="text-muted-foreground"
        tasks={tasks}
        onMoveTask={moveTask}
        onClearColumn={clearColumn}
        onMoveAllTasks={moveAllTasks}
        onAddTask={addTask}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-warning"
        tasks={tasks}
        onMoveTask={moveTask}
        onClearColumn={clearColumn}
        onMoveAllTasks={moveAllTasks}
        onAddTask={addTask}
      />
      <Column
        title="IN PROGRESS"
        column="doing"
        headingColor="text-success"
        tasks={tasks}
        onMoveTask={moveTask}
        onClearColumn={clearColumn}
        onMoveAllTasks={moveAllTasks}
        onAddTask={addTask}
      />
      <Column
        title="DONE"
        column="done"
        headingColor="text-primary"
        tasks={tasks}
        onMoveTask={moveTask}
        onClearColumn={clearColumn}
        onMoveAllTasks={moveAllTasks}
        onAddTask={addTask}
      />
    </div>
  );
};
