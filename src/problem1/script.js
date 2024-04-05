var sum_to_n_a = function(n){
  let sum=0;
  for(let i=1;i<=n;i++){
    sum += i;
  }
  return sum;
};
var sum_to_n_b = function(n){
  var sum=0;
  sum = ((n+1)*n)/2;
  return sum;
};
var sum_to_n_c = function(n){
  let sum=0;
  let i=1
  while(i<=n){
    sum += i;
    i++;
  }
  return sum;
};
console.log(sum_to_n_a(5))
console.log(sum_to_n_b(6))
console.log(sum_to_n_c(4))