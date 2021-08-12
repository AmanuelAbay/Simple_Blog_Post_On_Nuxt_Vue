<template>
    <div class="posts-page">
       <PostList :posts="loadedPost" />
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
    components:{
        PostList
    },
    computed:{
        loadedPost(){
            return this.$store.getters.loadedPost
        }
    }
};
</script>

<style scoped>

.posts-page{
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>