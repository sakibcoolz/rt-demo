import React, { useState } from 'react';
import { Data } from '../../model/model';
import ShowList from './showlist';

const TaskForm: React.FC = () => {
    let datas: Array<Data> = [];
    const [formState, setFormState] = useState<Data>({
        task: '',
        status: 'pending'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formState);
        // Add your form submission logic here
        datas.push({ status: formState.status, task: formState.task });
        console.log(datas);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task">Task:</label>
                    <textarea
                        id="task"
                        name="task"
                        value={formState.task}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        name="status"
                        value={formState.status}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <br />
            <div>
                <ShowList list={datas}/>
            </div>
        </div>
    );
};

export default TaskForm;
