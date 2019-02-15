<template>
  <div class="panel-card-contains">
    <div class="panel-card-body">
      <div class="items" v-for="(card,index) in cards" :key="index">
        <div :class="['items-icon','element-icons', card.icon]" :style="{backgroundColor:card.bgColor}"></div>
        <div class="items-data">
          <span class="title">{{ card.title }}</span>
          <ICountUp 
            class="number" 
            :startVal="0"
            :endVal="card.number"
          >
          </ICountUp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  components: {
    ICountUp
  },
  data() {
    return {
      cards: [
        {
          icon: "el-icon-user",
          bgColor: "rgb(45, 140, 240)",
          number: 84652,
          title: "New Visits"
        },
        {
          icon: "el-icon-msg",
          bgColor: "rgb(25, 190, 107)",
          number: 5463,
          title: "Messages"
        },
        {
          icon: "el-icon-qian",
          bgColor: "rgb(255, 153, 0)",
          number: 645,
          title: "Shoppings"
        },
        {
          icon: "el-icon-icozhuanhuan",
          bgColor: "rgb(237, 63, 20)",
          number: 55486,
          title: "Purchases"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.panel-card-body {
  height: 100px;
  display: flex;
  justify-content: space-around;
}
.items {
  display: flex;
  justify-content: space-between;
  width: 20%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
}
.items-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  font-size: 30px;
  color: #fff;
}
.items-data {
  width: 70%;
  margin: 20px auto 0px;
  span {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  & > .title {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.45);
    margin-bottom: 10px;
  }
  & > .number {
    font-size: 30px;
    color: #666;
    font-weight: bold;
  }
}
</style>
