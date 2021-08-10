<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout:'admin',
    components:{
        AdminPostForm
    },
    data(){
        return{
            loadedPost:{
                author:'Amanuel Abay',
                title:'Post Test',
                content:'The first loaded post content',
                thumbnailLink:'https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg'
            }
        }
    }
}
</script>

<style scoped>
.update-form{
    width:90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .update-form{
        width: 500px;
    }
}
</style>