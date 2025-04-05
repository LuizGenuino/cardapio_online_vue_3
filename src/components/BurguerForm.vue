<template>
    <div>
        <p>Componente de mensagem</p>
        <div>
            <form id="burguer-form">
                <div class="input-container">
                    <label for="name">Nome do Cliente:</label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu Nome">
                </div>
                <div class="input-container">
                    <label for="bread">Escolha o Pão:</label>
                    <select id="bread" name="bread" v-model="bread">
                        <option value="">Selecione o tipo de pão...</option>
                        <option value="">pão</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="meat">Escolha a carne:</label>
                    <select id="meat" name="meat" v-model="meat">
                        <option value="">Selecione o tipo de carne...</option>
                        <option value="">carne</option>
                    </select>
                </div>
                <div class="input-container" id="options-container">
                    <label id="options-title" for="options">Selecione os Opcionais:</label>
                    <div class="checkbox-container">
                        <input type="checkbox" name="options" id="options" v-model="options" value="">
                        <span>op</span>
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" name="options" id="options" v-model="options" value="">
                        <span>op</span>
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" name="options" id="options" v-model="options" value="">
                        <span>op</span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu Pedido">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "BurguerForm"
}
</script>

<style scoped>
    #burguer-form{
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #fcba03;
    }

    input, select    {
        padding: 10px 15px;
        width: 400px;
    }

    #options-title{ 
        width: 100%;
    }

    #options-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .checkbox-container{
        display: flex;
        justify-content: flex-start;
        width: 50%;
    }

    .checkbox-container span, 
    .checkbox-container input {
        width: auto;
    }

    .checkbox-container span{
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn {
        width: 300px;
        background: #222;
        color: #fcba03;
        font-weight: bold;
        font-size: 16px;
        border: 2px solid #222;
        padding: 10px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover{
        background: transparent;
        color: #222;
    }

</style>