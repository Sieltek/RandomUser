Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
  })
  
  new Vue({
    el: '#todo-list-example',
    data: {
      newTodoText: '',
      todos: [],
      nextTodoId: 0,
      rand: "",
    },
    methods: {
      addNewTodo: function () {
          if(this.newTodoText != ""){
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
              })
              this.newTodoText = ''
          }
      },
      random: function () {
          if (this.todos.length > 0){
            this.rand = this.todos[Math.floor(Math.random() * this.todos.length)].title
          } else {
            this.rand = ""
          }
      }
    }
  })