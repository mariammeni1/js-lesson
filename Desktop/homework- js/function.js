const months = [
    {
        name:'January',
        days: 31
    },
    {
        name:'February',
        days: 28
        
    },
    {
        name:'March',
        days: 31
    },
    {
        name:'April',
        days: 30
    },
    {
        name:'May',
        days: 31
    },
    {
        name:'June',
        days: 30
    },
    {
        name:'July',
        days: 31
    },
    {
        name:'August',
        days: 30
    },
    {
        name:'September',
        days: 30
    },
    {
        name:'October',
        days: 31
    },
    {
        name:'November',
        days: 30
    },
    {
        name:'Dectember',
        days: 31
    },
];

function tellDays(arr){
    for(let i = 0; i < arr.length; i++){   
     console.log(arr[i].name + ' has ' + arr[i].days + ' days.');
    }
};

tellDays(months);
// console.log(months[0].name);
// console.log(months[11].name);