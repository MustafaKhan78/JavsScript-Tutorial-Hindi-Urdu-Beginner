// que => Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

function greeting(name) {
    switch (true) {
        case(name == "Mubashir"):
            return "hello, my love!"
            break;
    
        default:
            return "hello," + name + "!";
            break;
    };

};

console.log(greeting("Matt"));

console.log(greeting("Helen"));

console.log(greeting("Mubashir"));