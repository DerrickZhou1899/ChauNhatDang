function sum_to_n_a(n: number): number{
	let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
};
function sum_to_n_b(n: number): number{
    return ((n+1)*n)/2;
};
function sum_to_n_c(n: number): number{
	let sum=0;
    let i=1;
    while(i<=n){
        sum+=i;
        i++;
    }
    return sum;
};
console.log(sum_to_n_a(100));
console.log(sum_to_n_b(100));
console.log(sum_to_n_c(100));