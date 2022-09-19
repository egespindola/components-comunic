<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <label>
            Altera no comp irmão a partir de bus event
            <input type="text" v-model="name">
        </label>
    </div>
</template>

<script>
import bus from '@/bus.js'    

export default {
    // components: { bus },
    data(){
        return {
            name: ''
        }
    },
    updated(){
        // bus.$emit('fnUpdateName', this.name)
        bus.updateName(this.name)
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
