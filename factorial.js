//3. Calculate the factorial of a number using recursion

let factorial = function factorialDeUnNumero(n){
    if(n==0){
        return 1;
    }
        else {
            return n* factorialDeUnNumero(n-1);
        }
        
    }


   // console.log("El factorial es de : ",factorial(4));

 module.exports = factorial;


