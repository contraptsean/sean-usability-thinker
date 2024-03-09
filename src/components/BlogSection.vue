<template>
  <div class="blog section" id="blog-section">
    <h2 class="mb-5 text-center">Blog</h2>
    <div class="container">
      <div class="mt-5 pt-5 d-flex justify-content-center" v-if="loading">
        <div class="dots-bars-9"></div>
      </div>
      <div v-else>
    <div class="blog-container row justify-content-center">
      
      <div class="col-lg-10 mb-3 border border-dark px-0" v-for="article in articleList" :key="article._id">
        <div class="row">
          <div class="col-lg-4">

              <img :src="article.node.coverImage.url" class="card-img-top" alt="...">
          </div>
          <div class="col-lg-8">

            <h4 class="pt-3">{{article.node.title}}</h4>
            
            <p class="card-text text-muted">{{article.node.publishedAt}}</p>
            
            <!-- <p class="card-text mb-auto">{{article.brief}}</p> -->

            <router-link class="btn btn-outline-dark" :to="{ name: 'BlogContent', params: { slug: article.node.slug }, props: true}">Read More</router-link>
<!--             <a class="btn btn-outline-dark" :href="article.node.url">Read More</a>
 -->          </div>
          

          </div><!--contentrow.-->
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
    const data = await fetch('https://gql.hashnode.com', {
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
query Publication {
  publication(host: "waxalchemical.hashnode.dev/") {
    isTeam
    title
    posts(first: 10) {
      edges {
        node {
          title
          brief
          url
          publishedAt
          slug
          coverImage {
      url
    }
        }
      }
    }
  }
}
`;

gql(GET_USER_ARTICLES, { page: 0 })
    .then(result => {
        const articles = result.data.publication.posts;
        console.log(articles);
        let container = document.createElement('div');
        articles.edges.forEach(article => {
          article.node.publishedAt = article.node.publishedAt.split("T")[0].split("-");
          article.node.publishedAt = article.node.publishedAt[1] + "." + article.node.publishedAt[2] + "." + article.node.publishedAt[0];
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
