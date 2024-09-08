
export const calculateBalance=(transactions)=>{
    const balances={
        Rajneesh:0,
        Harshit:0,
        Nistha:0,
        Ankesh:0
    };

    transactions.forEach(transaction=>{
        const {paidBy,amount,splitAmong}=transaction;
        const splitAmount=amount/splitAmong.length;

        splitAmong.forEach(person=>{

            
            if(person!==paidBy){
                balances[person]-=splitAmount;
            }
        });
        balances[paidBy]+=amount-splitAmount;
    });

    return Object.keys(balances).map(person=>({
        person,
        amount:balances[person]
    }));
};