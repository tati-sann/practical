<template>
  <div class="order-form">
    <label class="order-form__input">
      Фамилия Имя Отчество
      <input
        v-model="userForm.fullName"
        type="text"
        maxlength="50"
        placeholder="Иванов Иван Иванович"
        required
      >
    </label>
    <label class="order-form__input">
      Телефон
      <input
        v-model="userForm.phone"
        type="text"
        v-mask="'79##-#######'"
        placeholder="7900-0000000"
        required
      >
    </label>
    <label class="order-form__input">
      Адрес эл.почты
      <input
        v-model="userForm.email"
        type="text"
        placeholder="pizza@pizza.com"
        required
      >
    </label>
    <label class="order-form__input">
      Адрес доставки
      <input
        v-model="userForm.address"
        type="text"
        required
      >
    </label>
    <label class="order-form__input">
      Время доставки
      <input
        v-model="userForm.dateTime"
        type="datetime-local"
        required
      >
    </label>
    <label class="order-form__input order-form__input--textarea">
      Дополнительная информация
      <textarea
        style="resize: none"
        v-model="userForm.info"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "OrderForm",
  props: {
    userForm: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
 .order-form {
   padding: 30px;
   margin: 0 auto;
   width: 80%;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;

   &__input {
     padding: 10px;

     &--textarea {
       display: flex;
       flex-direction: column;
       flex-wrap: wrap;
     }
   }

   input,
   textarea {
     padding: 5px;
     min-height: 17px;
     width: 550px;
     border: 0.5px solid $primary;

     &:hover,
     &:focus {
       border-color: $secondary;
     }
   }

  textarea {
    width: 670px;
    min-height: 200px;
  }
 }
</style>