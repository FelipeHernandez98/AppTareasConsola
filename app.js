const { inquirerMenu, pausa } = require('./helpers/inquirer');

require('colors');




const main = async()=>{
    console.clear();

    let opt = '';

    do {
       opt = await inquirerMenu();
       console.log({opt})

       if(opt !== '0') await pausa();
       
    } while (opt != '0');
    
}

main();