import axios from 'axios';

const axiosInstance = axios.create();

interface Itodo {
    id: number,
    label: string,
    complete: boolean
}

interface ITodoWithOutId {
    label: string,
    complete: boolean
}

export const TodoAPI = {
    async getAll() {
        const response = await axiosInstance.get('/api/todos');

        return response.data.todos as Itodo;
    },

    async create(data: ITodoWithOutId) {
        const response = await axiosInstance.post('/api/todos', data)

        return response.data.todos as Itodo
    },

    async updateById(id: number, data: Partial<ITodoWithOutId>) {
        await axiosInstance.put(`/api/todos/${id}`, data);

        return
    },

    async deleteById(id: number) {
        await axiosInstance.delete(`/api/todos/${id}`)
    },

}