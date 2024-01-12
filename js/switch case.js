const day = 2;

switch (day) {
    case 1:
        console.log("sunday");
        break;
        case 2:
            console.log("monday");
            break;
         case 3:
             console.log("tuesday");
             break;
         case 4:
              console.log("wednesday");
              break;
         case 5:
              console.log("thuerday");
                break; 
         case 6:
                 console.log(" to day is friday");
                 break;
         case 7:
                 console.log("saturday");
                 break;

    default:
        console.log("please add velid day");
        break;
}



const age = prompt("enter your age");

switch (true) {
    case(age >= 40 && age <= 50):
        console.log("old");
        break;
    case( age >= 30 && age < 40):
            console.log("adoult");
            break;
    case(  age <= 10):
            console.log("child");
            break;
            case(  age <= 20):
            console.log("teen ager");
            break;
    default:
         console.log("please add velid age");
                break;
}

const a = 10;
// if(a === 10){
//     return true
// }else {
//     return false
// };

// switch (a) {
//     case a === 10:
//         console.log(true)
//         break;

//     default:
//         console.log(false)
//         break;
// }