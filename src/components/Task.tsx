import { Trash, CheckCircle } from 'phosphor-react';
import { TaskProps } from '../App';
import styles from './Task.module.css';

// Recebemos a task e as funções enviadas de Tasks.tsx
interface Props {
    task: TaskProps;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Task( {task, onDelete, onComplete}: Props ) {
    /**
     * Neste componente, temos apenas a estrutura das tarefas que irão compor o array de tasks.
     * 
     * Primeiro temos o botão que informa se a tarefa foi concluída ou não. Ao haver um
     * click neste elemento nós chamamos a função onComplete que muda o estado da propriedade
     * isCompleted. E por meio desta propriedade nós apresentaremos na tela o checked ou a
     * checkbox vazia.
     * 
     * Na tag p nós temos apenas o conteúdo da tarefa que é guardado em task.title
     * 
     * E por último nós temos o botão que servirá para excluir a tarefa do array.
     * Ao receber um click, este elemento chama a função onDelete que removerá do 
     * array a tarefa que corresponder ao id passado como parâmetro.
    */
    return (
        <div className={styles.task}>
            <button 
                className={styles.checkContainer} 
                onClick={() => onComplete(task.id)}
            > 
                {task.isCompleted ? <CheckCircle weight="fill"/> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}> 
                <Trash size={24}/>
            </button>
        </div>
    )
}