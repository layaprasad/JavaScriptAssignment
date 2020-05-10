function numberPrime(){
   
    let arr = [4,2,3,4,5,6,7,8,9,10];
    document.write("Numbers : " , arr);
    document.write('<br>');
    if(arr[0] == 2){      
        document.write( arr[0] , "is a prime number");    
    }
    else if((arr[0] % 2) == 0){
        document.write( arr[0] , "is not a prime number");
    }
    else{
        document.write(arr[0] , "is a prime number");    
    }

}

function frequentItem(){

    var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    var mf = 1;
    var m = 0;
    var item;

    for (var i = 0; i < arr1.length; i++) {
        for (var j = i; j < arr1.length; j++) {
            if (arr1[i] == arr1[j]) m++;
                if (mf < m) {
                mf = m;
                item = arr1[i];
                }
        }
        m = 0;
    }
    document.write("The most frequent item :<br> " + item + "<br>" + mf + "  times ");

}
function swapCase(){
    var str = 'The Quick Brown Fox';
    // var upper = str.toUpperCase();
    // var lower = str.toLowerCase();
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
        for(var x=0; x<str.length; x++)
        {
            if(UPPER.indexOf(str[x]) !== -1)
            {
                result.push(str[x].toLowerCase());
            }
            else if(LOWER.indexOf(str[x]) !== -1)
            {
                result.push(str[x].toUpperCase());
            }
            else 
            {
                result.push(str[x]);
            }
        }
      // console.log(result.join(''));
      document.write(result.join(''));        

}

function squareSum(){
    var array = [ 4, 2, 3 ];
    document.write("Numbers :" + array +  '<br>'); 
    // var b = [];
    // var p = a.length;
    // var sum ;
    // for(var i=0 ; i<p ; i++){
        
    //     b[i] = a[i]*a[i];
    //     // b[i] += Math.pow(a[i] ,2);
    //     document.write(b[i]);
    // }
    // for( var j=0 ; j<(b.length) ; j++){
        
    //     sum =sum+b[j];
    //     alert("hai");
    // }
    // document.write(sum);
    
    var sum = 0, i = array.length;
        while (i--) {
        sum += Math.pow(array[i], 2);
        }
        document.write("Sum of Squares of numbers in the array:" + sum);

}


function oddEven(){

    for(var x=0 ;x<=15 ;x++){
        if( x==0){
            document.write( x + " -> Even Number <br>");
        }
        else if(x%2 == 0){
            document.write(x + "-> Even Number <br>");
        }
        else{
            document.write(x + "-> Odd Number <br>");
        }
    }
}
function stringTruncate(){
    
    var length = 4;
    var str = "JAVASCRIPT";
    var mytruncatedstring = str.substring(0,length);
    var truncatestr = str.substring(2, length);

       
                
            document.write(mytruncatedstring , '<br>');
    document.write(truncatestr);

}
function findLarge(){
    
        var num1, num2;
        num1 = window.prompt("Input the First integer", "0");
        num2 = window.prompt("Input the second integer", "0");
                                                        
        if(parseInt(num1, 10) > parseInt(num2, 10)) { 
        document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
        }   
        else if(parseInt(num2, 10) > parseInt(num1, 10)) {
        document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
        }                  
        else{
        document.write("The values "+ num1+ " and "+num2+ " are equal.");
        }
    }   
function sortArray(){
    var speed = {
        car: 300, 
        bike: 60, 
        motorbike: 200, 
        airplane: 1000,
        helicopter: 400, 
        rocket: 500000
    };
    var sortarray = [];
    for (var vehicle in speed) {       
        sortarray.push([vehicle, speed[vehicle]]);
    }
      sortarray.sort();

      //code for sorting based on value

            // sortarray.sort(function(a, b) {
            //     return a[1] - b[1];
            //  });

    document.write('<br>', sortarray , '<br');
}

function stringPattern(){    
   const str ="javascript";
    var c = [];
    for ( const value of str){
        c+= value ;
        document.write(c , '<br>');               
    }            
}

function star(){
    var len = window.prompt("enter the length", "");
    for(var i=0 ; i<len ; i++){
        for(var j=0 ;j<=i ; j++){
            document.write( "*");
        }
      document.write('<br>')  ;
    }
}




