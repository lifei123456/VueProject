<template>
  <div id="course">
    <navtop></navtop>
    <h3>{{user.username}}的课表</h3>
    <table>
      <thead>
      <th>时间</th>
      <th>星期一</th>
      <th>星期二</th>
      <th>星期三</th>
      <th>星期四</th>
      <th>星期五</th>
      <th>星期六</th>
      <th>星期日</th>
      </thead>
      <tbody class="course_container">
      <tr>
        <td>7:40-8:00</td>
        <td colspan="7">早读</td>
      </tr>
      <tr>
        <td>8:00-8:45</td>
        <td v-for="item in first">{{item}}</td>
      </tr>
      <tr>
        <td>8:55-9:40</td>
        <td v-for="item in second">{{item}}</td>
      </tr>
      <tr>
        <td>9:40-10:10</td>
        <td colspan="7">课堂操</td>
      </tr>
      <tr>
        <td>10:00-10:45</td>
        <td v-for="item in third">{{item}}</td>
      </tr>
      <tr>
        <td>10:45-11:05</td>
        <td colspan="7">眼保健操</td>
      </tr>
      <tr>
        <td>11:05-11:50</td>
        <td v-for="item in fourth">{{item}}</td>
      </tr>
      <tr>
        <td>11:50-14:00</td>
        <td colspan="7">午休</td>
      </tr>
      <tr>
        <td>14:00-14:45</td>
        <td v-for="item in fifth">{{item}}</td>
      </tr>
      <tr>
        <td>14:55-15:40</td>
        <td v-for="item in sixth">{{item}}</td>
      </tr>
      <tr>
        <td>15:50-16:35</td>
        <td v-for="item in seventh">{{item}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import resCourse from '@/api/index'

  export default {
    name: 'course',
    data: function () {
      return {
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: [],
        sixth: [],
        seventh: [],
      }
    },
    computed: {
      user() {
        //因为在main.js中已经全局注册了store，所以这里直接用this.$直接使用。
        return this.$store.state.user
      }
    },
    mounted() {
      //do something
      let thisSelf = this;
      resCourse.getRes('/course', "课程表").then(
        function (result) {
          if (result !== "") {
            for (let j = 0; j <= 6; j++) {
              thisSelf.$set(thisSelf.first, j, result.data[j].course[1].subject);
              thisSelf.$set(thisSelf.second, j, result.data[j].course[2].subject);
              thisSelf.$set(thisSelf.third, j, result.data[j].course[4].subject);
              thisSelf.$set(thisSelf.fourth, j, result.data[j].course[6].subject);
              thisSelf.$set(thisSelf.fifth, j, result.data[j].course[8].subject);
              thisSelf.$set(thisSelf.sixth, j, result.data[j].course[9].subject);
              thisSelf.$set(thisSelf.seventh, j, result.data[j].course[10].subject)
            }
          } else {
            for (let j = 0; j <= 6; j++) {
              thisSelf.$set(thisSelf.first, j, '--');
              thisSelf.$set(thisSelf.second, j, '--');
              thisSelf.$set(thisSelf.third, j, '--');
              thisSelf.$set(thisSelf.fourth, j, '--');
              thisSelf.$set(thisSelf.fifth, j, '--');
              thisSelf.$set(thisSelf.sixth, j, '--');
              thisSelf.$set(thisSelf.seventh, j, '--')
            }
          }
        })
    }
  }
</script>
<style>

  #course {
    height: 100%;
    width: 100%;
    background: #cac2c2;
    color: #000;
    text-align: center;
    background: -moz-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
    background: -webkit-linear-gradient(top, #fff, rgba(8, 143, 255, 0.6));
  }

  table {
    width: 100%;
    margin-top: 20px;
    border: 2px solid #fff;
    background: #fff;
  }

  th {
    color: #fff;
    background: #000;
    border: 2px solid #fff;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-family: LiSu;
  }

  td {
    color: #000;
    background: #f2f2f2;
    border: 2px solid #fff;
    height: 30px;
    line-height: 30px
  }

  h3 {
    margin-top: 0;
    padding-top: 20px;
    text-shadow: 5px -5px black, 4px -4px white;
    font-weight: bold;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text
  }
</style>
