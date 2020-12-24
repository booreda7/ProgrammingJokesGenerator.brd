const todos=[
    {
        id:1,
        text:"take ou the trash",
        isCompleted:true,
    },   {
        id:2,
        text:"meeting with boss",
        isCompleted:true,
    },{
        id:3,
        text:"dentist appt",
        isCompleted:false,
    },
];


console.log(todos[2].text);

const todoJSON = JSON.stringify(todos);

console.log(todoJSON);


todos.forEach(todo => {
    
});


