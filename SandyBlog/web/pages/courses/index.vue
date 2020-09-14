<template>
  <div class="pa-3">
    <h3>热门课程</h3>
    <v-row>
      <v-col md="4" v-for="(item,index) in courses" :key="index">
       <v-card :to="`/courses/${item._id}`" class="mx-auto"  max-width="344" >
    <v-img
      :src="item.cover"
      height="200px"
    ></v-img>

    <v-card-title>
      {{item.name}}
    </v-card-title>

    <v-card-subtitle>
     {{item.updatedAt}}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn text>Share</v-btn>
      <v-btn color="purple" text >
        Explore
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn   icon  @click="show = !show" >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const courses=await $axios.$get(`/courses`)
    console.log(courses)
    return{
      courses:courses.data
    }
    
  },
   data() {
    return { show: false }
  },
}
</script>

<style></style>
