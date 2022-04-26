var app = new Vue({
    el: '#app',
    data: {
        title: 'ToDo App',
        showForm: true,
        addList: '',
        toDoLists: []
    },
    methods: {
        addItem: function () {
            this.toDoLists.push(this.addList);
            this.addList = "";
        },
        deleteItem(index) {
            this.toDoLists.splice(index, 1);
        }
    }
})