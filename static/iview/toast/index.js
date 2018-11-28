// const default_data = {
//    // default || success || warning || error || loading
// };

let timmer = null;

Component({
    externalClasses: ['i-class'],

    data: {
        visible: false,
        content: '',
        icon: '',
        image: '',
        duration: 2,
        mask: true,
        type: 'default',
    },

    methods: {
        handleShow (options) {
            // const { type = 'default', duration = 2 } = options;

            this.setData({
                // ...options,
                type:'default',
                duration:2,
                visible: true
            });

            const d = this.data.duration * 1000;

            if (timmer) clearTimeout(timmer);
            if (d !== 0) {
                timmer = setTimeout(() => {
                    this.handleHide();
                    timmer = null;
                }, d);
            }
        },

        handleHide () {
            this.setData({
                visible: false,
                content: '',
                icon: '',
                image: '',
                duration: 2,
                mask: true,
                type: 'default'
            });
        }
    }
});
