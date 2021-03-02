<template>

    <div>
     <input v-on:input="onInput"/>
    </div>

</template>

<script>



export default {
    name:'SearchBar',
    methods: {
        onInput(event){ //emit event to pass info to parent component. termChange is the name, second parameter is the data it sends
            this.$emit('termChange', event.target.value) //dollar sign isnt special. vue makers just wanted to call that function $emit
        } //ARROW FUNCTIONS DONT WORK! 
    }
}
</script>

<style scoped>
input{
    width:75%;
}

div{
    text-align:center;
    margin: 20px;
}
</style>