<template>
 <div>
     <div>
         <span class=" pt-6 quotes text-2xl text-center text-slate-100">
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

