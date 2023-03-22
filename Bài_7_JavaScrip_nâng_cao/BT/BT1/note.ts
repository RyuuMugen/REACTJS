class Note {
    title: string;
    content: string;
    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
    }
  
    addNote(): void {
      const noteList = new NoteList();
      noteList.addNoteToList(this);
    }
  }
  class NoteList {
    notes: Note[] = [];
    addNoteToList(note: Note): void {
      this.notes.push(note);
    }
  }

  const noteList = new NoteList();
    noteList.addNoteToList(new Note('Note 1', 'Content 1'));
    noteList.addNoteToList(new Note('Note 2', 'Content 2'));
    noteList.addNoteToList(new Note('Note 3', 'Content 3'));

    

    // In ra danh sách các note
    console.log(noteList);