const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
  }),
  methods: {
    addItem: function (event) {
      let todo = {
        item: this.newItem,
      };
      this.todos.push(todo);

      // タスクの入力完了後に入力欄を空にする動作の追加
      this.newItem = "";
    },
  },
});
app.mount("#app");
