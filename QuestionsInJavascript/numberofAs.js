function NumberOfAs(str) {

    let totalAs = 0;
     
    for(var i = 0; i < str.length; i++) {
            if('a'=== str[i]) {
                totalAs += 1
            } 
     }

         return totalAs
}

console.log(NumberOfAs('banana'))