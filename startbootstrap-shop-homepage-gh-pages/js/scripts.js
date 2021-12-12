const userName= "admin";
const userPassword= "admin";

var vrf = false ;

function verif (userName, userPassword){
    var vrf = false ;

    var username= prompt("User Name");
    console.log(username);
    var password= prompt("donner votre mdp");
    console.log(password);

    if (userName==username && userPassword==password){
        vrf= true ;
     }else{
         vrf = false ;
    } 
    return vrf;
}
while (vrf !== false){
    verif(userName, userPassword, vrf);
}
