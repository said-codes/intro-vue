<template>
    <div class="my-component">
        <h1 v-bind:class="{highlighted : isHighLighted}" >{{title }}</h1>
        <h1 v-if="isVisible" >{{ message }}</h1>
        <button @click="toggleVisibility">Togle button</button>
        <button @click="toggleHighLigh">Togle highlighed</button>
        <input v-model="message">
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.text }}</li>
        </ul>

    </div>
</template>

<script>
export default {
    name : 'MyComponent',
    data(){
        return{
            message : 'Hello world with vue',
            title : 'This is a title',
            isHighLighted: false,
            isVisible : true,
            list : [
                {id: 1, text : "first item"},
                {id:2, text: "second item"},
                {id:3 , text: "third item"},
            ]
        }
    },

    methods:{
        toggleVisibility(){
            this.isVisible = !this.isVisible;
        },
        toggleHighLigh(){
            this.isHighLighted = !this.isHighLighted;
        },
        sayHelo(){
            alert("Hello");
        }
    }

}
</script>


<style scoped>
.highlighted{
    color: gold;
}
</style>