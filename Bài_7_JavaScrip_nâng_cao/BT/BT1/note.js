var Note = /** @class */ (function () {
    function Note(title, content) {
        this.title = title;
        this.content = content;
    }
    Note.prototype.addNote = function () {
        var noteList = new NoteList();
        noteList.addNoteToList(this);
    };
    return Note;
}());
var NoteList = /** @class */ (function () {
    function NoteList() {
        this.notes = [];
    }
    NoteList.prototype.addNoteToList = function (note) {
        this.notes.push(note);
    };
    return NoteList;
}());
var note1 = new Note('Title 1', 'Content 1');
note1.addNote();
var note2 = new Note('Title 2', 'Content 2');
note2.addNote();
var noteList = new NoteList();
console.log(noteList.notes);
