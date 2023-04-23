import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import styles from './Header.module.css';

import todoLogo from '../assets/todo-logo.svg';

// Criamos a interface para receber a função enviada pelo componente App.tsx
interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header( {onAddTask}: Props ) {
    const [title, setTitle] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle('');
    }

    function onChangeTitle(event: ChangeEvent<HTMLTextAreaElement>) {
        setTitle(event.target.value);
    }

    /** 
     * Logo abaixo teremos o retorno da função, onde iremos ter basicamente duas seções principais.
     * 
     * Header: Nessa div nós temos o logo e o título principal da aplicação.
     * 
     * Form: Neste formulário é onde recebemos os valores que irão compor a lista de tarefas e temos
     * também o botão que apertaremos para adicionar esse valor na lista.
     * 
     * Na textarea nós atribuiremos o valor que está em tempo real nesta caixa de texto para a constante
     * title, e fazemos isso através no método onChange. Assim, sempre que o valor for alterado, title
     * sempre guardará o valor mais atualizado.
    */

    return (
        <div>
            <header className={styles.header}>
                <img src={todoLogo} alt="Logotipo da ToDo List" />

                <div className={styles.textLogo}>
                    <span>to</span>
                    <span>do</span>
                </div>
            </header>

            <form className={styles.taskForm} onSubmit={handleSubmit}>
                <textarea
                    onChange={onChangeTitle}
                    value={title}
                    placeholder='Adicione uma nova tarefa'
                />

                <footer>
                    <button type='submit'>
                        Criar
                        <PlusCircle size={16} />
                    </button>
                </footer>
            </form>
        </div>
    )
}