<template>
 <div>
     <div>
         <span class=" pt-6 quotes text-2xl text-center">
            "{{ advice.content }}"
         </span>
         
     </div>
     
  </div>
</template>

<script>
export default {
name: 'Quotes',
props: ['advice'],
}
</script>

<style>
.quotes{
    color: hsl(193, 38%, 86%)
}
 </style>