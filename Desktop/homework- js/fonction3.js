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
 function findByDayNumber(arr,num) {
    let foundItem;
        for(let i= 0; i < arr.length; i ++) {
            if(arr[i].days === num) { 
                console.log(arr[i].name + ' has' + arr[i].days + 'days.');
                foundItem = arr[i];
            }
 }
    if (foundItem === undefined) {
        console.log ('There is no such month or day');
    };
    };
    
        findByDayNumber(months, 20);