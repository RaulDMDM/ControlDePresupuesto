const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(cors());
app.use(bodyParser.json())

const port = 3000;
let incomeList = [];
let expensesList = [];

app.get('/getIncome', function (req, res){
    res.json(incomeList);
})

app.get('/getExpenses', function (req, res){
    res.json(expensesList);
})

app.listen(port, (error)=>{
    if(error){
        throw error
    }else{
        console.log('server running in port ' + port)
    }
})


app.post('/setIncome', function(req, res){
    const newIncome = req.body;
    incomeList.push(newIncome);
    res.json({
        dataAdded: incomeList});
})

app.post('/setExpenses', function(req, res){
    const newExpenses = req.body;
    expensesList.push(newExpenses);
    res.json({
        dataAdded: expensesList});
})

/*
app.delete('/deleteTask/:id',function (req,res){
    const id = req.params.id;
    const i = taskList.findIndex(task => task.id === parseInt(id))
    taskList.splice(i, 1);
    res.json({
        message: 'Task deleted successfully',
        updatedTaskList: taskList
    });

})

app.put('/updateTask/:id', function(req,res){
    const {id, status} = req.body
    const i = taskList.findIndex(task => task.id === parseInt(id));
    taskList[i].status = status;

    res.json({
        message: 'Task status updated successfully',
        updatedTaskList: taskList
    });
})

*/
