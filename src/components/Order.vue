<template>
  <section class="order">
    <h2>Подтверждение заказа</h2>
    <form
      @submit.prevent="submit"
    >
      <OrderTable
        :pizza="pizza"
        :headers-table="headersTable"
        :inputs-options="inputsOptions"
      />
      <OrderForm
        :user-form="userForm"
      />

      <button class="button" type="submit">
        Подтвердить
      </button>
    </form>
  </section>
</template>

<script>
import OrderTable from "./OrderTable";
import OrderForm from "./OrderForm";

import {pizza} from "../static/pizza";
import {headersTable, inputsOptions, userForm} from "../modules/orderModule";

export default {
  name: "Order",
  components: {
    OrderTable,
    OrderForm,
  },

  data() {
    return {
      pizza,
      headersTable,
      inputsOptions,
      userForm,
    }
  },

  methods: {
    submit() {
      alert('Форма отправлена')
    }
  }
}
</script>

<style lang="scss" scoped>
  .order {
    text-align: left;
  }
</style>