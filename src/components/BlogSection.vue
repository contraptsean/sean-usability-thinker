<template>
  <div class="blog section" id="blog-section">
    <h2 class="mb-5 text-center">Blog</h2>
    <div class="container">
      <div class="mt-5 pt-5 d-flex justify-content-center" v-if="loading">
        <div class="dots-bars-9"></div>
      </div>
      <div v-else>
    <div class="blog-container row row-cols-1 row-cols-lg-3 g-5">
      
      <div class="col-lg-4" v-for="article in articleList" :key="article._id">
      <div class="card h-100">
  <img :src="article.coverImage" class="card-img-top mb-2" alt="...">
  <div class="card-body px-4 d-flex flex-column">
    <h4 class="card-title">{{article.title}}</h4>
    <p class="card-text text-muted">{{article.dateAdded}}</p>
    <p class="card-text mb-auto">{{article.brief}}</p>
    <router-link class="btn btn-outline-dark" :to="{ name: 'BlogContent', params: { slug: article.slug }, props: true}">Read More</router-link>

  </div>
</div>
      </div><!--/col-->
      </div> <!--row-->
      </div><!--else-->
    </div><!--containt-->
  </div><!--section-->
</template>

<script setup>
import { ref } from "vue"
const articleList = ref([])
const loading = ref(true)
async function gql(query, variables={}) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "contraptsean") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                    dateAdded
                    _id
                }
            }
        }
    }
`;

gql(GET_USER_ARTICLES, { page: 0 })
    .then(result => {
        const articles = result.data.user.publication.posts;
        let container = document.createElement('div');
        articles.forEach(article => {
          article.dateAdded = article.dateAdded.split("T")[0].split("-");
          article.dateAdded = article.dateAdded[1] + "." + article.dateAdded[2] + "." + article.dateAdded[0];
          articleList.value.push(article);
          loading.value = false;
        })

    });
</script>

<style>
.card,
.btn {
  border-radius: 0px;;
}

.dots-bars-9 {
  width: 40px;
  height: 40px;
  --c: linear-gradient(#00BFA6 0 0);
  background: 
    var(--c) 0    0,
    var(--c) 0    100%, 
    var(--c) 50%  0,  
    var(--c) 50%  100%, 
    var(--c) 100% 0, 
    var(--c) 100% 100%;
  background-size: 8px 50%;
  background-repeat: no-repeat;
  animation: db9-0 2s infinite;
  position: relative;
  overflow: hidden;
}
.dots-bars-9:before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  top:calc(50% - 4px);
  left:-8px;
  animation:inherit;
  animation-name:db9-1;
}

@keyframes db9-0 {
 16.67% {background-size:8px 30%, 8px 30%, 8px 50%, 8px 50%, 8px 50%, 8px 50%}
 33.33% {background-size:8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
 50%    {background-size:8px 30%, 8px 30%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
 66.67% {background-size:8px 50%, 8px 50%, 8px 30%, 8px 30%, 8px 50%, 8px 50%}
 83.33% {background-size:8px 50%, 8px 50%, 8px 50%, 8px 50%, 8px 50%, 8px 50%}
}

@keyframes db9-1 {
 20%     {left:0px}
 40%,70% {left:calc(50% - 4px)}
 80%,85% {left:8px;top:calc(50% - 4px)}
 100%    {left:8px;top:-8px}
}

</style>
