<template>
    <div id="Address-com" class="flex">
        <div id="choose-item" class="flex relative">
            <div class="relative">
                <input type="radio" :checked="customer.selected == true" id="select">
                <label @click="radioChecker" :class="{radioSelected: customer.selected == true}"
                    class="select-radio pointer" for="select"></label>
            </div>
        </div>
        <section class="txt-normal">
            <div class="flex space-between-dir">
                <span>به: {{customer.name}}</span>
                <button class="btn-edit">
                    <img src="@/assets/img/edit.svg" alt="Edit button action">
                </button>
            </div>
            <p @click="radioChecker">{{customer.address}}</p>
        </section>
    </div>
</template>

<script>
    export default {
        name: "address-com",
        props: {
            customer: {
                required: true,
            },
        },
        methods: {
            radioChecker() { // Check the address of the user selected
                return this.$store.commit('radioChecker', this.customer.id);
            }
        },
    }
</script>

<style>
    #Address-com {
        padding: 8px 16px;
        border-bottom: 1px solid var(--silvergray);
    }

    .btn-edit {
        width: 32px;
        height: 32px;
        display: flex;
        background-color: var(--silvergray);
        justify-content: center;
        align-items: center;
    }

    span {
        font-weight: 700;
    }

    #choose-item {
        width: 80px;
        height: 100px;
        align-items: center;
    }

    p {
        margin: 8px 0px;
        cursor: pointer;
    }
</style>