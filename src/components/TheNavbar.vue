<template>
  <header class="navbar">
    <h3>Freelance</h3>
    <ul class="navbar-menu">
      <li>
        <router-link custom to="/Tasks" v-slot="{ navigate, isActive }">
          <a href="#" @click="navigate" :class="{active : isActive}">Все задачи</a>
        </router-link>
      </li>
      <li>
        <router-link custom to="/New" v-slot="{ navigate, isActive }">
          <a href="#" @click="navigate" :class="{active : isActive}">Создать</a>
        </router-link>
      </li>
    </ul>
  </header>
</template>


