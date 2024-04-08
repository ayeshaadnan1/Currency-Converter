import inquirer from 'inquirer';
const currency : any = {
    USD:1,
    AUD:1.52,
    EUR:0.91,
    GBP:0.79,
    INR:83.28,
    SAR:3.75,
    AED:3.67,
    CAD:1.36,
    CNY:7.23,
    TRY:32,
    IRR:42,
    PKR:280
};
let user_ans = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: 'list',
        choices: ['USD', 'AUD','EUR','GBP','INR','SAR','AED','CAD','CNY','TRY','IRR','PKR']
    },
    {
        name: 'to',
        message: "Enter to currency",
        type: 'list',
        choices: ['USD', 'AUD','EUR','GBP','INR','SAR','AED','CAD','CNY','TRY','IRR','PKR']
    
    },
    {
        name: 'amount',
        message: "Enter your amount",
        type: 'number',
    }
]);
let userFromCurrency = user_ans.from;
let userToCurrency = user_ans.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let amount = user_ans.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.round(convertedAmount*100)/100);
