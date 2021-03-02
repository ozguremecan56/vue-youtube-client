<template>

    <div>
     <input v-on:input="onInput"/>
    </div>

</template>

<script>



export default {
    name:'SearchBar',
    methods: {
        onInput:(event)=>{
            this.$emit('termChange', event.target.value) //dollar sign isnt special. vue makers just wanted to call that function $emit
        }
    }
}
</script>

<style>

</style>