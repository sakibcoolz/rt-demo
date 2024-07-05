import React, { useState } from 'react';
import { Data } from '../../model/model';

const TaskForm: React.FC = () => {
    let datas: Data[];
    const [formState, setFormState] = useState<Data>({
        task: '',
        status: 'pending'
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        datas.push(formState);
        console.log(datas);
        setFormState({
            status: "",
            task: ""
        });

    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task">Task:</label>
                <textarea
                    id="task"
                    name="tasks"
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
    );
};

export default TaskForm;
