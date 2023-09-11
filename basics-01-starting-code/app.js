const app = Vue.createApp({
  data() {
    let currentDate = new Date();
    return {
      courseGoal: "Welcome to Vue!",
      vueLink: "https://vuejs.org/guide/",
      currentYear: currentDate.getFullYear(),
      goalNow: false,
    };
  },
  methods: {
    changeCourseGoal() {
      this.goalNow = !this.goalNow;
      return this.goalNow ? "Learn Vue!" : "Master Vue!";
    },
  },
});
app.mount("#user-goal");
