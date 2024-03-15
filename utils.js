
// function getRandomInt(value){
//     return Math.random() < (value /100)
// }

const getRandomInt = value => Math.random() < (value /100)


const showinfo = function(){
    const message = `HP у ${this.name} ${this.hp}`
    // const message = `HP у ${this.hp === 1000 ? 'Hero' : 'Dragon'} => ${this.hp}`
    console.log(message);
    console.log('==============================');

}

const modifyHealth = function(){

    const damage = this.str + this.weapon - Dragon.defense
    Dragon.hp -= damage;
    const message = `Герой попал по дракону, урон => ${damage}`
    console.log(message);

}

const getRandomIntDragon = value => Math.random() > ( value /100)

// function getRandomIntDragon(){
//     if(Math.random() > (Math.random() * 100 /100)){
//         return true
//     }
//     else return false
// }

const modifyHealthDragon = function(){

    const damage = this.str + this.weapon - Hero.defense
    Hero.hp -= damage;
    const message = `Дракон попал по герою, урон => ${damage}`
    console.log(message);

}