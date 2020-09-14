<template>
    <div class="pa-3">
        <h3>课程详情 </h3>
        <h3>{{course.name}}</h3>
        <div>
           <v-select v-model="currentIndex" 
          :items="course.episodes.map((v,i)=>({text:v.name,value:i}))"
           label="课时列表" 
        ></v-select>
        <!-- {{episodes}} -->
        </div>
        <video :src="episodes.file" width="100%" controls></video>
    </div>
</template>

<script>
export default {
    async asyncData({params,$axios}){
        const {id}=params
        const course=await $axios.$get(`courses/${id}`,{
            params:{
                query:{populate:'episodes'}
            }
        })
        // console.log(course.episodes)
        return{
            course,
        }
    },
    data () {
        return {
            currentIndex:0
        }
    },
    computed: {
        episodes(){
            // console.log("currentIndex:"+this.currentIndex)
            return this.course.episodes[this.currentIndex]
        }
    }

}
</script>
