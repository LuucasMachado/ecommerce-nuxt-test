<template>
  <div>
    <h2>Carrinho</h2>
    <div class="content-empty">
      <img :src="require('@/assets/cart-icon.svg')" class="shopping-cart-image--empty">
      <p>Até o momento, o seu carrinho está vazio</p>
    </div>
  </div>
</template>

<style>
  .content-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }

  h2 {
    margin: 0px 0px 20px 0px;
  }
</style>