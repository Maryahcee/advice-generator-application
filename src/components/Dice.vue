<template>
<div class="relative">
  <div class=" pt-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
     <button @click="showQoutes" class="bg-circle  w-12 h-12  flex justify-center items-center align-middle cursor-pointer  rounded-full ">
         <img  class=" dice flex  m-auto "  src="../assets/images/icon-dice.svg" alt="">
          <slot></slot>
     </button>
  </div>
       
</div>
</template>

<script>
export default {
name: 'Dice',
props: [],
methods: {
   showQoutes() {
     this.$emit('loadQuotes')
   }
 }
}
</script>

