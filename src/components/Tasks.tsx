import { Task } from './Task';
import { TaskProps } from '../App';
import { ClipboardText } from 'phosphor-react';
import styles from './Tasks.module.css';

//Recebemos as funçoes e o array enviados pelo App.tsx
interface Props {
    tasks: TaskProps[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks( {tasks, onDelete, onComplete} : Props) {
    //Guarda a quantidade de tarefas no array
    const tasksQuantity = tasks.length;

    //Guarda a quantidade de tarefas que possuem a propriedade isCompleted
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    /**
     * No retorno da função, teremos a seção tasks, que estará por volta de tudo
     * e utilizaremos esta para alinhar tudo ao centro.
     * 
     * No header desta seção, apresentaremos as tarefas criadas e as tarefas concluidas,
     * isso por meio das constantes que temos acima que guardam este valor.
     * 
     * Já na classe list nós teremos a listagem de tarefas que temos no array tasks que
     * foi recebido de App.tsx.
     * 
     * Chamamos o método map, e com este, para cada tarefa no array tasks, renderizamos
     * o componente task, passando sua key, as suas propriedades e suas funções de 
     * deletar e marcar como concluído.
     * 
     * Por último temos apenas uma validação, que renderizará uma mensagem diferente
     * caso não tenha nenhuma tarefa no array tasks.
    */
    
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>

                <div className={styles.createdTasks}>
                    <p> Tarefas Criadas </p>
                    <span> {tasksQuantity} </span>
                </div>

                <div className={styles.completedTasks}>
                    <p> Concluídas </p>
                    <span> {completedTasks} de {tasksQuantity} </span>
                </div>

            </header>

            <div className={styles.list}>
                {tasks.map(task => (
                    <Task 
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}

                { tasks.length <= 0 && ( // && serve como "Faça isso se isso for verdade"
                    <section className={styles.tasksListEmpty}>
                        <ClipboardText size={56}/>
                        <div>
                            <p> Você ainda não tem tarefas cadastradas </p>
                            <span> Crie tarefas e organize seus itens a fazer </span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}