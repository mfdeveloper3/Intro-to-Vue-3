app.component('product-details', {
    
    props: {
        details: {
            type: String
        }
    },

    template: 
    /*html*/
    `<li>{{ details }}</li>`,


})