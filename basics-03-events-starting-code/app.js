const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      sumBtnClicked: 0,
    };
  },
  methods: {
    addCount(e) {
      let value = +e.target.dataset.step || 1;
      this.sumBtnClicked++;
      return (this.counter += value);
    },
    reduceCount() {
      this.sumBtnClicked++;
      this.counter > 0 ? (this.counter -= 1) : (this.counter = 0);
    },
    zeroCount() {
      this.counter = 0;
      this.sumBtnClicked = 0;
    },
  },
});

app.mount("#events");
