const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Finish vue and have 6 digits job offer!',
            viewLink: 'https://www.vuejs.org'
        }
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return 'Oh lala';
            }else{
                return  'lalamove';
            }
        }
    }
});


app.mount('#user-goal');