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
 function getdays(num) {
    for(let i = 0; i < num.length; i++) [
        console.log(num[i].name + ' has ' + num[i].days + ' days.')
    ];
};
getdays(months);