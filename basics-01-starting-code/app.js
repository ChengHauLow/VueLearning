const app = Vue.createApp({
  data() {
    let currentDate = new Date();
    return {
      courseGoal_1: "Learn VUE.js Basics",
      courseGoal_2: "Use VUE.js build web app",
      courseGoal_3: "<h1>Use VUE.js build mobile app</h1>",
      vueLink: "https://vuejs.org/guide/",
      currentYear: currentDate.getFullYear(),
      goalNow: false,
    };
  },
  methods: {
    changeCourseGoal() {
      this.goalNow = !this.goalNow;
      // return (this.goalNow = this.goalNow
      //   ? this.courseGoal_1
      //   : this.courseGoal_2);
      // return Math.random() < 0.5 ? this.courseGoal_1 : this.courseGoal_2;
    },
  },
});
app.mount("#user-goal");
