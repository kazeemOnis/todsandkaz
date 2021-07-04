<template>
  <div>
    <div class="card">
      <div class="card__content">
        <div class="card__content--heading">
          <h3>{{ card.title }}</h3>
          <p>{{ card.subtitle }}</p>
        </div>
        <div class="date">
          <span>{{ card.date }}</span>
        </div>
        <div class="text">
          <p>{{ card.text }}</p>
        </div>
      </div>
      <div class="card__img">
        <img :src="card.img" alt="Tods & Kaz">
      </div>
    </div>
    <div class="line" v-if="card.icon">
      <div class="circle">
        <img :src="card.icon" alt="Icon" class="icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  }
}
</script>

<style>

</style>