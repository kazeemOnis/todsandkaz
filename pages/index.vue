<template>
  <main class="page">
    <div class="page__left">
      <video :poster="src" loop>
        <source :src="src">
      </video>
    </div>
    <div class="page__right">
      <div class="page__body">
        <div class="page__heading">
          <img src="@/assets/img/hearts.svg" alt="Heart">
          <h1>Tods and Kaz</h1>
          <img src="@/assets/img/hearts.svg" alt="Heart">
        </div>
        <p class="page__text">
          Happy Anniversary my love, my one and only Ife. Thank you for one of the 
          best years I’ve experienced and I attest that to our relationship, and the 
          growth we’ve been able to achieve together, you’re amazing, you’re my 
          star girl Todimu. Thank you for your patience with my annoying ass,
          I love your annoying ass too. I pray for many more anniversaries and 
          celebrations with you my baby.
        </p>
        <h2>Weve been together for</h2>
        <div class="page__days">
          <img src="@/assets/img/balloons.svg" alt="Balloons">
          <div class="date">
            <div class="line"/>
            <h2>3</h2>
          </div>
          <div class="date">
            <div class="line"/>
            <h2>6</h2>
          </div>
          <div class="date">
            <div class="line"/>
            <h2>5</h2>
          </div>
          <img src="@/assets/img/balloons.svg" alt="Balloons">
        </div>
        <h2>Days</h2>
        <div class="mb-4">
          <Card v-for="option in cards" :key="option.id" :card="option" />
        </div>
        <p class="page__text mb-4">
          As we celebrate one year together, I take this opportunity to recommit to
          our relationship, to continue to work on our flaws, continue to grow and
          learn together. To many more of this together, I choose you and will
          continue to choose you. I love you Todimu Sola-Idowu.
        </p>
        <div class="page__heading mb-4">
          <img src="@/assets/img/hearts.svg" alt="Heart">
          <h2>Love Kazeem</h2>
          <img src="@/assets/img/hearts.svg" alt="Heart">
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import IsPhone from '@/mixins/IsPhone';

export default {
  mixins: [IsPhone],
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Our First Kiss',
          subtitle: '“It was awkward at first”',
          date: '27th, June 2020',
          text: 'Lmaooo noone will tell you transitioning from being friends for years to being a couple is easy, especially in a “panoramic”. But hey look at us now.',
          img: require('@/assets/img/todskaz1.png'),
          icon: require('@/assets/img/kiss.svg'),
        },
        {
          id: 2,
          title: 'Tods and Kaz',
          subtitle: '“Are you not my friend?”',
          date: '14th, July 2020',
          text: 'Looool what started of as me calling you my friend, ended up being the day we decided to uno be officially more than friends. But forreal tho aren’t you my friend?',
          img: require('@/assets/img/todskaz2.png'),
          icon: require('@/assets/img/infinity.svg'),
        },
        {
          id: 3,
          title: 'Assistant Birthday Girl',
          subtitle: '“Best birthday ever”',
          date: '3rd, Oct 2020',
          text: 'I’m the type to take birthdays as just another reflection point of what I’ve been able to achieve, but you showed me what it feels like to celebrated and loved and I appreciate you for that.',
          img: require('@/assets/img/todskaz3.png'),
          icon: require('@/assets/img/cake.svg'),
        },
        {
          id: 4,
          title: 'Big Mummys Bitrhday',
          subtitle: '“Big Mummy’s birthday”',
          date: '6th, Jan 2021',
          text: 'I genuinely hope I was able to reciprocate a beautiful birthday experience for you as well. I hope to celebrate more birthdays with you, love being by your side and watching you grow.',
          img: require('@/assets/img/todskaz4.png'),
        },
      ],
    };
  },
  computed: {
    src() {
      return !this.isPhone ? require('@/assets/img/todskaz.gif') : require('@/assets/img/todskazmob.gif')
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/style.scss';
</style>