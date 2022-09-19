<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Reversed Name: {{ reverse }}</p>
    </div>
</template>

<script>
import bus from '@/bus.js'

export default {
    props: {
        name: {
            type: String,
            required: true,
            default: 'Anony'
        }
    },
    computed: {
        reverse(){
            return this.name.split('').reverse().join('').toUpperCase()
        }
    },
    created(){
        // bus.$on('fnUpdateName', name => {this.name = name})
        bus.onUpdate(name => {this.name = name})
    }
    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
