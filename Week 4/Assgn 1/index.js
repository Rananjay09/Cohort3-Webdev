//Create a CLI to read the number of words in the file
//Code:

const fs = require("fs"); //We imported fs library 
const { Command } = require("commander"); // we are using command class(class matlab blueprint of object(aur yaha object CLI hai)) from commander package/library
const program = new Command(); // we're creating a object "program" jo command class ke upar bana hai, aur command class ke saare methods use kar sakta hai 

program //we will give description of our program which is also a object cum cli 
    .name("fs_cli")
    .description('file reading cli')
    .version('0.0.9')

program.command("fs_cli") //we are making subcommand here, which comes under "program CLI" 
    .description("To count number of words") //description of the subcommand
    .argument("<file>", "file to be acted on") //argument needed to run this command
    .action((file) => { //here we have our main logic for reading the word
        fs.readFile(file, "utf-8", function(err,data){
            if (err){
                console.log(err);
            }
            else{
                const words = data.split(' ').length;
                console.log(`There are ${words} words in the ${file}`);
            }
                
                
        } )
    })

program.parse() //this reads user input command, checks with our given command and runs the actions of the cli
