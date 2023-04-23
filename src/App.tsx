import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { useState } from 'react';

import './global.css';

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    })
    setTasks(newTasks);
  }

  /**
   * Abaixo temos a estrutura da aplicação, com os componentes Header.tsx e Tasks.tsx sendo renderizados.
   * 
   * Na chamada do componente Header, passamos com o nome de onAddTask a função addTask presente no App.tsx.
   * Essa função trabalha com os estados da constante tasks, onde por meio da função setTasks nós podemos 
   * adicionar novas tasks no array de tarefas.
   * 
   * Já no componente Tasks.tsx, passamos duas funções: 
   * 
   * A primeira altera o estado da propriedade isCompleted, com o intuito de marcamos a tarefa como concluida.
   * A segunda atribui ao array de tarefas um novo valor, sendo este o array de tarefas, mas tendo removido o
   * item cujo Id correspondeu na busca.
   * 
   * E por último, passamos também a constante tasks que contém o array com as tarefas.
   */

  return (
    <div>
      <Header
        onAddTask={addTask}
      />

      <Tasks
        onComplete={toggleTaskCompletedById}
        onDelete={deleteTaskById}
        tasks={tasks}
      />
    </div>
  )
}