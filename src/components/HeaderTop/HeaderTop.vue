<template>
  <div class="header">
      <slot name="left"></slot>

      <span class="header-title">
          <span class="header-title-text">{{title}}</span>
      </span>

      <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    name: 'HeaderTop',
    props:{
      title:String
    }

  }
</script>

<style scoped>
  /*头部*/
  .header{
    height: 30px;
    background: skyblue;

  }
  .header span{display: inline-block;background: sandybrown;text-align: center;height: 30px;line-height: 30px;float: left;}

 .header-title{width: 50%;text-align: center;display: inline-block}
</style>
