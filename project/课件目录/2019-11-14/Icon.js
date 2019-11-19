Vue.component("Icon",{
    props:{
        name:{
            type:String,
            required:true
        },
        color:{
            type:String,
            default:"#000"
        },
        size:{
            type:Number,
            default:14,
            validator(value){
                if(value>100){
                    return false
                }else if(value<10){
                    return false
                }
                return true
            }
        }
    },
    computed:{
        fontSize(){
            return this.size + "px"
        }
    },
    template:`
    <span
      v-if="name"
      :style="{
          color,
          fontSize
      }"
      :class="'glyphicon glyphicon-'+name"
    >
    
    </span>
    `
})