// const div = document.createElement('div')

// // console.log(div);
// div.classList.add('wrapper')

// const body = document.body
// body.appendChild(div)
// console.log(div)

// const header = document.createElement('h1')

// header.textContent = 'DOM(Document Object Model)'
// // console.log(header);

// div.insertAdjacentElement('beforebegin',header)

// const ul = `
//     <ul>
//         <li>Один</li>
//         <li>Два</li>
//         <li>Три</li>
//     </ul>
// `

// div.innerHTML = ul

// const img = document.createElement('img')

// img.src = 'https://picsum.photos/240'

// img.width = 240
// img.classList = 'super'
// div.appendChild(img)
// console.log(img);


// console.log(getRandomInt(50));

const Dragon = {
    name : 'Dragon',
    hp: 2000, // Жизненная энергия
    defense: 120, // Защита
    str: 150, // Сила
    weapon: 0, // Оружие
    showinfo: showinfo ,
    modifyHealthDragon : modifyHealthDragon,
    attack_1 (){
        // const damage = this.str + this.weapon - Dragon.defense
        if(getRandomIntDragon(70)){
            
            const message = `Дракон не стал атаковать героя =(\n==============================)`
            console.log(message);
        }
        // Dragon.hp -= damage
        
        // const message = `Герой попал по дракону, урон => ${damage}`
        // console.log(message);
        else{
            
            this.modifyHealthDragon()
            Hero.showinfo()
        }
    }
}
const Hero = {
    name :'Hero',
    hp: 1000,
    defense: 100,
    str: 120,
    weapon: 250,
    shield: 150, // Щит
    showinfo:showinfo,
    modifyHealth : modifyHealth,
    attack (){
        // const damage = this.str + this.weapon - Dragon.defense
        if (getRandomInt(75)){
            this.modifyHealth()
            // Dragon.hp -= damage;
            
            // const message = `Герой попал по дракону, урон => ${damage}`
            // console.log(message);
            Dragon.showinfo()
        }
        else{
            const message = `Герой промахнулся =(\n==============================)`
            console.log(message);
        }
    }  
};
// while(Dragon.hp >= 0){
//     let actions = prompt(`${'выберите действия для героя:'}\n${'введите 1 если хотите атаковать'}\n${'введите 0 если хотите атаковать'}\n${'введите -1 если хотите атаковать'}`)
// }





// Hero.attack()
// console.log(Hero.attack());
// Dragon.showinfo()
// Hero.showinfo()

