const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

//Create add command
yargs.command({
    command:'add',
    describe:'Add new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,   
            type:'string'
        },
        body:{
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
        notes.getNotes();
    }
})


//Create remove command
yargs.command({
    command:'remove',
    describe:'remove new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,   
            type:'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse();