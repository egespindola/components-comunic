import Vue from 'vue'

export default new Vue({
    methods: {
        updateName(name) {
            this.$emit('fnUpdateName', name)
            // console.log(`bus.updateName = ${name}`)
        },
        onUpdate (callback) {
            this.$on('fnUpdateName', callback)
        }
    }
}) 

