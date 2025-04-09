<template>
    <div id="burger-table">
        <div>
            <Message :msg="msg" v-show="msg" />
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>CLiente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Ações:</div>
            </div>
            <div id="burger-table-rows">
                <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
                    <div class="order-number">{{ burger.id }}</div>
                    <div>{{ burger.nome }}</div>
                    <div>{{ burger.pao }}</div>
                    <div>{{ burger.cane }}</div>
                    <div>
                        <ul>
                            <li v-for="(item, index) in burger.opcionais" :key="index">{{ item }}</li>
                        </ul>
                    </div>
                    <div>
                        <select name="status" class="satus" @change="updateBurguer($event, burger.id)">
                            <option v-for="item in status" :key="item.id" :value="item.tipo"
                                :selected="burger.status == item.tipo">{{ item.tipo }}</option>
                        </select>
                        <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Message from './Message.vue';
export default {
    components: { Message },
    name: "Dashboard",
    data() {
        return {
            burgers: null,
            burger_id: null,
            status: [],
            msg: null,
        }
    },

    methods: {
        async getPedidos() {
            const req = await fetch("http://localhost:3000/burgers");
            const data = await req.json();
            this.burgers = data;
        },

        async getStatus() {
            const req = await fetch("http://localhost:3000/status");
            const data = await req.json();
            this.status = data;
        },

        async deleteBurger(id) {
            console.log(id);

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "DELETE"
            });
            const resp = await req.json();

            this.getPedidos()

            this.msg = `Pedido Nº ${resp.id} Removido com Sucesso!`

            setTimeout(() => { this.msg = null }, 3000)
        },

        async updateBurguer(event, id) {
            const option = event.target.value;

            const datJson = JSON.stringify({ status: option });

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: datJson
            })

            const resp = await req.json()

            this.msg = `Pedido Nº ${resp.id} Atualizado com Sucesso!`

            setTimeout(() => { this.msg = null }, 3000)
        }
    },

    mounted() {
        this.getPedidos()
        this.getStatus()
    }
}
</script>
<style scoped>
#burger-table {
    max-width: 1200px;
    margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
    display: flex;
    flex-wrap: wrap;
}

#burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
}

#burger-table-heading div,
.burger-table-row div {
    width: 19%;
}

.burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
    width: 5%;
}

select {
    padding: 12px 6px;
    margin-right: 12px;
}

.delete-btn {
    background: #222;
    color: #fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}

.delete-btn:hover {
    background: transparent;
    color: #222;
}
</style>