<template >
  <div class="grid grid-cols-1 h-screen text-center place-content-center bg-cyan-900  p-2">
      <div class="container flex justify-center items-center mx-auto  box-border lg:w-96 h-74 sm:w-32 md:w-80 small:w-80 rounded-lg bg-cyan-700 ">
        <div class="min-w-full  font-extrabold p-5 flex flex-col justify-center items-center ">
        <heading :advice="advice"/>
        <quotes :advice="advice"/>
        <dividers/>
        <dice @loadQuotes="loadQoutes"/>
      </div>
    </div>
  </div>
  <footer class="bg-emerald-100 p-5 fixed inset-x-0
             bottom-0">
      <div class="flex justify-center items-center text-sm">
        Challenge by <a class="text-rose-700" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#" >  <span class="text-rose-700"> Mary Njoroge </span></a>.
      </div>
  </footer>
</template>

<script>
import Quotes from './components/Quotes.vue'
import Heading from './components/Heading.vue'
import Dividers from './components/Dividers.vue'
import Dice from './components/Dice.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Quotes,
    Heading,
    Dividers,
    Dice
  },
  data() {
    return {
      advice: {
        content: 'Identify sources of happiness.',
        advices: [],
        heading: 'ADVICE',
        id: '217',
       },
    }
  },
 
  methods: {
    async loadQoutes(){
       try {
          let response = await axios.get('https://api.adviceslip.com/advice');
          this.advice.content = response.data.slip.advice;
          this.advice.id = response.data.slip.id;
  } catch (error) {
    console.error(error);
  }
}
}
}
</script>
    

<style>
.container {
  font-family: 'Manrope', Mono;
}

.bg-circle {
  background: linear-gradient(90deg, hsl(151, 100%, 66%), hsl(151, 92%, 60%));
  transition: 0.3s;
}
.bg-circle:hover {
  background: linear-gradient(45deg, hsl(150, 100%, 60%));
  box-shadow:0 3px 15px 5px hsl(151, 100%, 66%);
}
</style>
