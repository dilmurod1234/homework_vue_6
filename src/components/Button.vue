<template>
  <div>
    <button>
        <slot></slot>
    </button>
  </div>
</template>

<script setup>


</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button{
  padding: 15px 40px;
  margin: 30px;
  border: none;
  border-radius: 10px;
  background-color: crimson;
  color: #fff;
}
</style>