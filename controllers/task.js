const taskServices = require('../services/task');

const controllers = {};

const getAllTasksController = async (request, h) => {
    let ret = await taskServices.getAllTasks();
    if(Object.keys(ret).length)
        return h.response({Tasks: ret});
    else
        return h.response({Tasks: []});
};

const getAllTasksByTodoIdController = async (request, h) => {
    let ret = await taskServices.getAllTasksByTodoId(request.params.id);
    if(Object.keys(ret).length)
        return h.response({Tasks: ret});
    else
        return h.response({Tasks: []});
};

const getTaskController = async (request, h) => {
    let ret = await taskServices.getTaskById(request.params.id);
    if(ret != null)
        return h.response(ret);
    else
        return h.response({error: "Can't find the Task with the id " + request.params.id}).code(403);
};

const postTaskController = async (request, h) => {
    let ret = await taskServices.postTask(request.payload);

    if (ret) {
        return h.response({message: "Task created !"});
    } else {
        return h.response({error: "no modification done"}).code(403);
    }
};

const putTaskController = async (request, h) => {
    let ret = await taskServices.putTask(request.params.id, request.payload);
    if(ret)
        return h.response({message: "modification done"});
    else
        return h.response({error: "no modification done"}).code(403);
};

const deleteTaskController = async (request, h) => {
    let ret = await taskServices.delTask(request.params.id);
    if(ret)
        return h.response({message: "Task deleted"});
    else
        return h.response({error: "no deletion, can't find the Task"}).code(403);
};

controllers.getAllTasks = getAllTasksController;
controllers.getAllTasksByTodoId = getAllTasksByTodoIdController;
controllers.getTask = getTaskController;
controllers.postTask = postTaskController;
controllers.putTask = putTaskController;
controllers.delTask = deleteTaskController;

module.exports = controllers;
