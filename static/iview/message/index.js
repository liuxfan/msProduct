let timmer = null;

Component({
    externalClasses: ['i-class'],

    data: {
        visible: false,
        content: '',
        duration: 2,
        type: 'default'
    },

    methods: {
        handleShow (options) {
            this.setData({
                duration: 2,
                type: 'default',
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
                duration: 2,
                type: 'default'
            });
        }
    }
});