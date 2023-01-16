function submit() {
    var a = parseInt(document.getElementById("inputA").value);
    var b = parseInt(document.getElementById("inputB").value);
    const isPrime = (n) => {
        let flag = 1;
        if(n<2){
            return flag = 0;
        } else{
        for(let i=2 ;i<n;i++){
            if(n%i === 0){
                 flag=0;
                 break;
                }}
        return flag;
    }}

    let m=a+1, check=0, output ="", sum=0;
    while (m<b){
        check = isPrime(m);
        if( check == 1 ) {
            output += m + " + "; 
            sum+=m;
        }
        m++;
    }
    let outputEnd = output.slice(0,-3)
    console.log(outputEnd)
    let tongSoNguyenTo = (outputEnd + " = " + sum) ;
    document.getElementById("output").innerHTML = tongSoNguyenTo
}
