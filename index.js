function receivesAFunction (spy){
    console.log(spy())
}
receivesAFunction;

function returnsANamedFunction(){
  return function name (){
    console.log("string")
  };
};


function returnsAnAnonymousFunction(){
    return function(){};
};