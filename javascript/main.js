const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
  }),
  methods: {
    addItem: function (event) {
      if (this.newItem === "") return;
      let todo = {
        item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);

      // タスクの入力完了後に入力欄を空にする動作の追加
      this.newItem = "";
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
app.mount("#app");
