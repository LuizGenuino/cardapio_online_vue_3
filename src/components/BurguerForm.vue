<template>
    <div>
        <Message :msg="msg" v-show="msg" />
        <div>
            <form id="burger-form" @submit="createBurger">
                <div class="input-container">
                    <label for="name">Nome do Cliente:</label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu Nome">
                </div>
                <div class="input-container">
                    <label for="bread">Escolha o Pão:</label>
                    <select id="bread" name="bread" v-model="bread">
                        <option selected value="">Selecione o tipo de pão...</option>
                        <option v-for="item in breadsList" :key="item.id" :value="item.tipo">{{ item.tipo }}</option>
                    </select>
                </div>
                <div class="input-container">
                    <label for="meat">Escolha a carne:</label>
                    <select id="meat" name="meat" v-model="meat">
                        <option value="">Selecione o tipo de carne...</option>
                        <option v-for="item in meatsList" :key="item.id" :value="item.tipo">{{ item.tipo }}</option>
                    </select>
                </div>
                <div class="input-container" id="options-container">
                    <label id="options-title" for="options">Selecione os Opcionais:</label>
                    <div class="checkbox-container" v-for="item in optionsList" :key="item.id">
                        <input type="checkbox" name="options" id="options" v-model="options" :value="item.tipo">
                        <span>{{ item.tipo }}</span>
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
import Message from './Message.vue';

export default {
    name: "BurguerForm",
    components: {
        Message
    },
    data() {
        return {
            breadsList: null,
            meatsList: null,
            optionsList: null,
            name: null,
            bread: null,
            meat: null,
            options: [],
            msg: null,
        }
    },

    methods: {
        async getIngredientes() {
            const req = await fetch("http://localhost:3000/ingredientes");
            const data = await req.json()

            this.breadsList = data.paes;
            this.meatsList = data.carnes;
            this.optionsList = data.opcionais;
        },

        async createBurger(e) {
            e.preventDefault();

            const data = {
                nome: this.name,
                carne: this.meat,
                pao: this.bread,
                opcionais: Array.from(this.options),
                status: "Solicitado",
            }
            
            const dataJson = JSON.stringify(data)

            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            })
            
            const resp = await req.json()

            this.msg = `Pedido Nº ${resp.id} Realizado com Sucesso!`

            setTimeout(()=> {  this.msg = null }, 3000)


            this.name = null;
            this.bread = null;
            this.meat = null;
            this.options = null;
            
        },
    },

    mounted(){
        this.getIngredientes()
    }
}
</script>

<style scoped>
#burger-form {
    max-width: 400px;
    margin: 0 auto;
}

.input-container {
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

input,
select {
    padding: 10px 15px;
    width: 100%;
    max-width: 400px;
}

#options-title {
    width: 100%;
}

#options-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.checkbox-container {
    display: flex;
    justify-content: flex-start;
    width: 50%;
}

.checkbox-container span,
.checkbox-container input {
    width: auto;
}

.checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
}

.submit-btn {
    width: 90%;
    max-width: 300px;
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

.submit-btn:hover {
    background: transparent;
    color: #222;
}
</style>