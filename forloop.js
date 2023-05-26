function sumDigits(n)
{
    var s = n.toString();
    var sum = 0;

    for(var char of s)
    {
        var digit = parseInt(char);
        sum += digit;
        
    }
    return sum;
}
var sum = sumDigits(1738);
// println is used in Java, JS version is Console.log
 console.log("Sum: ", sum);

 //Canva Presentation:
 https://www.canva.com/design/DAFhUHrfdGc/DExcUmrYpVg8wQVv7CT0Ow/edit?utm_content=DAFhUHrfdGc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
 

