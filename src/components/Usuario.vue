<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Name: <strong>{{ name }}</strong></p>
        <label>
            Altera no pai e no primeiro filho ao press 'Enter'
            <input type="text" @keydown.enter="name = $event.target.value">
        </label>
        <hr>
        <div class="componentes">
            <app-usuario-info :name="name" />
            <app-usuario-editar />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data(){
        return {
            name: 'Ekatherina Ivanovna',
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
