const taskControllers = require('../controllers/task');

module.exports = [
    {
        method: 'GET',
        path: '/tasks',
        options: {
            auth: 'jwt',
            cors: true,
            description: 'Get all tasks stored in db'
        },
        handler: (request, h) => {
            return taskControllers.getAllTasks(request, h);
        }
    },
    {
        method: 'GET',
        path: '/tasks-by-todo-id/{id}',
        options: {
            auth: 'jwt',
            cors: true,
            description: 'Get all tasks with the following todo id stored in db'
        },
        handler: (request, h) => {
            return taskControllers.getAllTasksByTodoId(request, h);
        }
    },
    {
        method: 'GET',
        path: '/task/{id}',
        options: {
            auth: 'jwt',
            cors: true,
            description: 'Get task by id',
        },
        handler: (request, h) => {
            return taskControllers.getTask(request, h);
        }
    },
    {
        method: 'POST',
        path: '/task',
        options: {
            auth: 'jwt',
            cors: true,
            description: 'Add task in db',
        },
        handler: (request, h) => {
            return taskControllers.postTask(request, h);
        }
    },
    {
        method: 'PUT',
        path: '/task/{id}',
        options: {
            auth: 'jwt',
            cors: true,
            description: 'Update task by id',
        },
        handler: (request, h) => {
            return taskControllers.putTask(request, h);
        }
    },
    {
        method: 'DELETE',
        path: '/task/{id}',
        options: {
            auth: 'jwt',
            cors: true,
            description: 'Delete task by id',
        },
        handler: (request, h) => {
            return taskControllers.delTask(request, h);
        }
    }
];
