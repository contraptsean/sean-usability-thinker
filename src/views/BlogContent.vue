<template>
  <div class="blog article">
      <div class="mt-5 pt-5 d-flex justify-content-center" v-if="loading">
        <div class="dots-bars-9"></div>
      </div>
      <div v-show="!loading">
    <div class="container mt-5">
      <div class="row justify-content-center pt-5">
        <div class="col-lg-10">
          <img src="" class="card-img-top" alt="..." id="cover-image">
          <header>
          <h1 class="mb-5 display-1" id="title"></h1>
          </header>

    <div class="blog-container">
        <p ></p>
        <div id="content"></div>

      </div>
  </div>

        </div>
      </div>
      </div><!--else-->
    </div>
</template>

<script setup>
import { ref } from "vue"
import {marked} from 'marked'
const loading = ref(true)
const props = defineProps(['slug'])
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
    query GetUserArticles($slug: String!, $hostname: String!) {
        post(
        slug: $slug
        hostname: $hostname
        ) {  
            title
            coverImage
            contentMarkdown
        }
        }
`;

gql(GET_USER_ARTICLES, { slug: props.slug, hostname: "https://api.hashnode.com/" })
    .then(result => 
    {
        document.getElementById('title').innerText = result.data.post.title;
        document.getElementById('cover-image').src = result.data.post.coverImage;
        document.getElementById('content').innerHTML = marked(result.data.post.contentMarkdown);
        loading.value = false;

        //console.log($refs.article)
        // const articleData = result.data.post;
        // console.log(articleData)
        // $vm.article = { ...articleData };
        
}
);

</script>

<style>
.card,
.btn {
  border-radius: 0px;;
}
img {
  width: 80%;
}
h2 {
    text-decoration: underline;
    margin-top:3rem;
}
h3 {
    font-size:1.25rem;
    margin-top:2rem;
}
img {
    border: 1px solid #ccc;
    margin-bottom:3rem;
}
p {
    font-size:1.1rem;
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
