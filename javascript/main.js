const app = Vue.createApp({
  data: () => ({
    message: "hello vue.js!",
    userInput: "",
  }),
  computed: {
    reverse: function () {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    buttonClickAction: function () {
      this.message = this.message.split("").reverse().join();
    },
  },
});

app.mount("#app");
