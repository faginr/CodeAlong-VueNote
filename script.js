const app = new Vue({
    el: '.app',
    data: {
        notes: [],
        currentNote: null
    },
    methods: {
        createNote(){
            const newNote = {title: "New Note", contents: ""};
            this.notes.push(newNote);
            this.currentNote = newNote;
            this.$nextTick(function(){this.$refs.noteTitle.focus();});
        }
    }
});