// You are doing shopping and already have some items in your shopping cart.
// You need to make sure that you don't buy the same item many times.
// So, if you already have that item in shopping, card, don't add it
// If you don't have it, return 'I am adding <ITEM> to my shopping cart'.
// Create a function that will get shoppingCart and item as an argument and if the item is not
// in shoppingCart, return 'I am adding <ITEM> to my shopping cart'.

const shoppingCart = ['Milk', 'Bread', 'Butter', 'Cheese', 'Apple', 'Book', 'Ice Cream'];
const myKorb = [
    {
        name: 'Milk',
    }, 
    {
       name: 'Bread',
    },
    {
        name: 'Butter',
    },
    {
        name: 'Cheese',
    },
    {
        name: 'Apple',
    },
    {
         name: 'Book',
    },
    {
        name: 'Ice Cream',
    },
];
 
const myKorbName = 'Milk';
function checkItem(num){
    if(num === 1){
        return 'Dont add it!';
    } else if(num === 2){
        return 'I am adding <ITEM> to my shopping cart';
    } 
};
console.log(checkItem(1));