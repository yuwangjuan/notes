<template>
  <div class="hello">
    <excel-export :sheet="sheet" :bookType="bookType" :filename="filename">
   <div>导出</div>
</excel-export>
  </div>
</template>

<script>
import {ExcelExport} from 'pikaz-excel-js'
export default {
  name: 'HelloWorld',
     components: {
            ExcelExport,
        },
        data () {
          return {
              bookType: 'xlsx',
              filename: '百得招聘',
            sheet:[
              {
               
                // title:"水果的味道",
                tHeader:["荔枝","柠檬"],
                table:[{litchi:"甜",lemon:"酸"}],
                keys:["litchi","lemon"],
                sheetName:"水果的味道"
              }
            ]
          }
        }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
