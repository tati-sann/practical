<template>
  <table class="order-table">
    <thead>
      <tr>
        <th
          class="order-table__cell"
          v-for="header in headersTable"
          :key="header.name"
          :align="header.align"
        >
          {{header.name}}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in pizza"
        :key="item.name"
      >
        <td
          class="order-table__cell"
        >
          <div class="pizza">
            <span>
              {{item.name}}
            </span>

            <img
              v-if="item.img"
              height="50"
              width="50"
              :src="item.img"
            >
          </div>

        </td>
        <td
          class="order-table__cell"
          v-if="item.isConstructor"
        >
          <div>
            <p>Тесто:</p>
            <label
              v-for="dought in inputsOptions.typeDough"
              :key="dought.text"
            >
              <input
                v-model="item.dought"
                type="radio"
                :value="dought.value"
              >
              {{ dought.text }}
            </label>
          </div>

          <div>
            <p>Соус:</p>
            <select
              class="input"
              v-model="item.sauce"
            >
              <option
                v-for="option in inputsOptions.sauceSelectOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
          </div>

          <div>
            <p>Сыр:</p>
            <select
                class="input"
                v-model="item.cheese"
            >
              <option
                v-for="option in inputsOptions.cheeseSelectOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
          </div>

          <div>
            <p>Дополнительные ингредиенты:</p>
            <select
              class="input"
              v-model="item.additionalIngredients"
              multiple
            >
              <option
                  v-for="option in inputsOptions.additionalIngredientsSelectOptions"
                  :key="option.value"
                  :value="option.value"
                  :selected="option.value === 1 || option.value === 2"
              >
                {{ option.text }}
              </option>
            </select>
          </div>
        </td>
        <td
          class="order-table__cell"
          v-else
        >
          {{item.composition}}
        </td>
        <td
          class="order-table__cell"
          align="center"
        >
          <input
            class="input input--number"
            v-model="item.value"
            type="number"
            min="0"
            max="10"
            step="1"
          >
        </td>
        <td
          class="order-table__cell"
          align="center"
        >
          <select
            class="input"
            v-model="item.size"
          >
            <option
              v-for="option in inputsOptions.sizeSelectOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </td>
        <td
          class="order-table__cell"
        >
          {{ getPrice(item) }}
        </td>
      </tr>

    <tr>
      <td
        class="order-table__cell"
        colspan="4"
      >
        Итого
      </td>
      <td
        class="order-table__cell"
      >
        {{ totalPrice }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "OrderTable",
  computed: {
    totalPrice: function () {
      let sum = 0;
      this.pizza.forEach(item => {
        sum += item.price * item.value;
      });
      return sum;
    }
  },
  props: {
    pizza: {
      type: Array,
      required: true,
    },
    headersTable: {
      type: Array,
      default: [],
    },
    inputsOptions: {
      type: Object,
      required: true,
    }
  },

  methods: {
    getPrice(item) {
      return item.price * item.value;
    }
  }
}
</script>

<style lang="scss" scoped>
 .order-table {
   margin: 0 auto;
   width: 80%;
   border-collapse: collapse;

   &__cell {
     padding: 5px;
     height: 40px;
     border: 1px solid black;
   }
 }

 .pizza {
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
 }
</style>