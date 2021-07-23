// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]'; 
var b = [1, 2, 3, 4]; 
//TODO
		var x1;
		var y1;

		x = Array.isArray(a);
		y = Array.isArray(b);

		if (x == true){
			x1 = 'YES';
		}
		else{
			x1='NO';
		}

		if (y == true){
			y1 = 'YES';
		}
		else{
			y1='NO';
		}

		console.log(x1);
		console.log(y1);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
		var output1 = "";
		for(let i=0; i<a.length; i++){
   			 a[i]*=2;
   			 output1 += a[i] + (i<(a.length-1)?',':null);
		}
		console.log("[" + output1 + "]");


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
		var output ="";
		for(let i=0; i<colors.length; i++)
		{
 			output+=colors[i];

 		if(i<colors.length-1)
		{
			output+=" ";
		}
		}
		console.log("case1: "+ "'" +output + "'");
		output=output.replaceAll(" ", "+");
		console.log("case2: "+ "'"+ output + "'");
		output=output.replaceAll("+", ",");
		console.log("case3: "+ "'" + output + "'");

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
		console.log(a.sort(function(a, b){return b-a}));


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
		var counter1 = 1;
		var counter2 = 0;
		var output;
		for (let i=0; i<a.length; i++)
		{
  	      for (let j=i; j<a.length; j++)
   		     {
                if (a[i] == a[j])
                 counter2++;
                if (counter1<counter2)
                {
                  counter1=counter2; 
                  output = a[i];
                }
       		}
        		counter2=0;
		}
		console.log("'"+output+"'") ;