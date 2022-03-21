<template>
  <div >
      <h1 class="header text-green-400 p-4 pb-2 text-center text-xl text-[20px] tracking-widest">
         {{ advice.heading}}  #{{ advice.id}}
      </h1>
      </div>
</template>

<script>
export default {
name: 'Heading',
props: ['advice'],
}

</script>

<style>
.header{
    color: hsl(151, 100%, 66%);
}
</style>