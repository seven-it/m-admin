<template>
  <div class="app-main-wrapper">
    <el-scrollbar class="app-main-scroll">
      <section class="app-main-container">
        <transition name="page" mode="out-in">
          <router-view />
        </transition>
        
      </section>
    </el-scrollbar>
  </div>
</template>
