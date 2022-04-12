function receivesAFunction(callback)
{

    return callback()
    
}

function returnsANamedFunction()
{
    let innerFunction = ()=> console.log("Hello World");
    return innerFunction 
    

}

function returnsAnAnonymousFunction()
{
    return ()=>{}
}