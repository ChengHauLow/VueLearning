const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addCount(e) {
      let value = +e.target.dataset.step || 1;
      return (this.counter += value);
    },
    reduceCount() {
      this.counter > 0 ? (this.counter -= 1) : (this.counter = 0);
    },
    zeroCount() {
      this.counter = 0;
    },
  },
});

app.mount("#events");
