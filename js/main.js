var app = new Vue ({
    el: '#app',
    data:{
        Emails : [],
    },

    mounted(){
        for(let i=0 ; i<10 ; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(answer => {
                let Email = answer.data.response;
                this.Emails.push(Email);
            })
        }
        console.log(this.Emails);
    }

})