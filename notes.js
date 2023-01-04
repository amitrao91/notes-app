// const { default: chalk } = require('chalk');
// const fs = require('fs');

// const getNotes = function(){
//     return 'Your notes...'
// }

// const addNote = function(title, body){
//     const notes = loadNotes();

//     const duplicates = notes.filter(function(note){
//         return note.title === title;
//     })

//     if(duplicates.length===0){
//         notes.push({     //pushing the object
//             title:title,//right hand sidt title coming from the function
//             body:body
//         })
//         saveNotes(notes);
//         console.log(chalk.green.inverse('New note added'));
//     }else{
//         console.log(chalk.red.inverse('Notes title taken!'));
//     }
// }

// const saveNotes = function(notes){//function taking the array
//     const dataJSON = JSON.stringify(notes);
//     fs.writeFileSync('notes.json', dataJSON);
// }

// const loadNotes = function(){ 
//     try {
//         const dataBuffer = fs.readFileSync('notes.json');
//         const dataJSON = dataBuffer.toString();
//         return JSON.parse(dataJSON);
//     } catch (e) {
//         return []
//     }
// }

// const removeNote = function(title){
//     // console.log(title);
//     const notes = loadNotes();
//     const notesToKeep = notes.filter(function(note){//this function gets called one time for each note
//         return note.title!== title;  //return true if want to keep it or remove if you dont want
//     })
//     if(notes.length > notesToKeep.length){
//         console.log(chalk.green.inverse('Note removed'));
//         saveNotes(notesToKeep);
//     }else{
//         console.log(chalk.red.inverse('Note not found'));
//     }
    
    
// }

// module.exports = {
//     getNotes:getNotes,
//     addNote:addNote,
//     removeNote:removeNote
// }


// ***********************************************************************************
// 4.9. REFACTORING TO USE ARROW FUNCTION
const { default: chalk } = require('chalk');
const fs = require('fs');

const getNotes = ()=>{
    return 'Your notes...'
}

const addNote = (title, body)=>{
    const notes = loadNotes();

    // const duplicates = notes.filter((note)=> note.title ===title);
    const duplicate = notes.find((note)=> note.title ===title);



    // if(duplicates.length===0){
    if(!duplicate){
        notes.push({     //pushing the object
            title:title,//right hand sidt title coming from the function
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    }else{
        console.log(chalk.red.inverse('Notes title taken!'));
    }
}

const saveNotes = (notes)=>{//function taking the array
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = ()=>{ 
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}



const removeNote = (title)=>{
    // console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>note.title!== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse('Note not found'));
    }
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach((note)=>{
        console.log(note.title);
    }) 
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}