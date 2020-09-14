<template>
    <div>
        <h3>{{isCreate ?'创建':'编辑'}}课程</h3>
        <ele-form
      v-model="formData"
      :form-desc="formDesc"
      :rules="rules"
      :request-fn="save"
    ></ele-form>

    </div>
</template>

<script lang="ts">
import { Vue,Component, Prop } from 'vue-property-decorator'

@Component({})

export default class Course extends Vue{
    @Prop(String) id!:string

    formData= {}
      formDesc={
        name: {
          type: 'input',
          label: '课程标题'
        },
        cover: {
          type: 'input',
          label: '课程封面',
          required: true // 必填简写
        },
        
      }

    get isCreate(){
        console.log("id:"+this.id)
        return !this.id;
    }
    async save(data){
        const url= this.isCreate ? 'courses' :`courses/${this.id}`
        const method=this.isCreate ? 'post' : 'put'
        const res=await this.$http[method](url,data)
        console.log(res.data)
        this.$message.success('保存成功')
        this.$router.go(-1)
    }
    rules= {
        title: { required: true, type: 'string', message: '请填写课程标题' },
        // label: { required: true, message: '请填写标题' }
      }
    async fetch(){
        const res=await this.$http.get(`courses/${this.id}`);
        this.formData=res.data
        console.log(res.data)
    }
    created () {
        !this.isCreate && this.fetch()
    }
}

</script>