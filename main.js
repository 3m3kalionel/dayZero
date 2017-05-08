'use strict';

module.exports = {

getPrimes: function(num) {
	    //takes in one number and returns an array of prime numbers 4rm 0-num
	    var res =[];
	    function isPrime(n) { 
	        var sqrtn = n ** 0.5;
	        if (n == 2 || n == 3) {return true;}
	        else {
	            for(var i = 2; i <= sqrtn; i++) {
	                if(n % i == 0) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }
	    for(var i = 2; i <= num; i++) {
	        if( isPrime(i) == true ) {
	            res.push(i);
	        }
	    }
	    return res;    
	}
}
