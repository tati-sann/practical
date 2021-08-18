<template>
  <section class="contacts">
    <p class="contacts__text">
      <i class="contacts__address">ул. Пекарная д. 1</i>
      <span class="contacts__phone">
        тел.
        <a class="contacts__phone-link" href="tel:88469131415">
          <b-icon icon="telephone" />
          8(846)913-14-15
        </a>,
        <a class="contacts__phone-link" href="tel:88469131313">
          <b-icon icon="telephone" />
          8(846)913-13-13
        </a>
      </span>
    </p>
  </section>
</template>

<script>
export default {
  name: "Address"
}
</script>

<style lang="scss" scoped>
  .contacts {
    &__text {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    &__phone-link {
      text-decoration: none;
      color: $primary;

      &:focus,
      &:hover {
        color: $secondary;
      }
    }
  }
</style>