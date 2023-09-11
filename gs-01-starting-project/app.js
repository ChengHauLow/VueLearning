// const addBtn = document.querySelector('.addBtn');
// const goalList = document.querySelector('.goalList');
// const inputEl = document.getElementById('goal');

// const addGoal = (e)=>{
//     e.preventDefault();
//     const listItem = document.createElement('li');
//     listItem.textContent = inputEl.value;
//     goalList.appendChild(listItem);
//     // goalList.innerHTML = `${goalList.innerHTML}<li>${inputEl.value}</li>`;
//     inputEl.value = '';
// }
// addBtn.addEventListener('click', addGoal);

Vue.createApp({

    data(){
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue = ''
        }
    }
}).mount('#app');