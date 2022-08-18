const app = Vue.createApp({
    data(){
        return {
            courseGoalA: 'Finish vue and have 6 digits job offer!',
            courseGoalB: 'Master Vue and make Carlene proud',
            viewLink: 'https://www.vuejs.org'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return  this.courseGoalB;
            }
        }
    }
});


app.mount('#user-goal');