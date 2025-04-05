//------------------------------    CONSTANT    ------------------------------   


//1.  Constant is only one type that is "const" Keyword. 

//2.  const cannot be redeclared.
        const fname = "moon"
        const fname;
        console.log(fname); //error
        
//3.    const cannot be reassigned(value).
        const fullName = "mars"
        fullName = "sun"
        console.log(fullName); //error

//4.  Block scope is supported which means block scope is ignored.
        const fulln = "venus"
        {const fulln = "saturn"}
        console.log(fulln);
        

//------------------------------    VARIABLES   ------------------------------

//Variables are of 2 types var and let.

//------------------------------    Var    ------------------------------ 

//1.    var can be redeclared.
        var edf = 23
        var edf;
        console.log(edf);

//2.    var can be reassigned.
        var wf = "hy"
        wf = "hello"
        console.log(wf);

//3.    var does not supports block scope variables.
        var abc = 1234
        {var abc = 'hello'}
        console.log(abc);

//------------------------------    Let     ------------------------------ 

//1.    let can not be redeclared.
        let name = 123
        let name;
        console.log(name)

//2.    let can be reassigned.
        let name1 = 123
        name1 = 25
        console.log(name1)

//3.    let supports block scope variables.
        let priyu=25
        {let priyu=20}
        console.log(priyu)




