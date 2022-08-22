var app = new Vue ({
    el: '#app',
    data:{
        Emails : [],
        done : false
    },

    mounted(){
        for(let i=0 ; i<10 ; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(answer => {
                let Email = answer.data.response;
                this.Emails.push(Email);
            });
        };
        this.done = true;
    }

})