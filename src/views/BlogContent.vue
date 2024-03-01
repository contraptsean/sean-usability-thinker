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
          <main id="main-content">
          <header>
          <h1 class="mb-5 display-1" id="title"></h1>
          </header>

    <div class="blog-container">
        <p ></p>
        <article id="content"></article>

      </div><!--=blog-contain-->
          </main>
  </div><!--col-->

        </div><!--row_-->
      </div><!--contain-->
      </div><!--else-->
    </div>
</template>

<script setup>
import { ref } from "vue"
import {marked} from 'marked'
const loading = ref(true)
const props = defineProps(['slug'])
async function gql(query, variables={}) {
    const data = await fetch('https://waxalchemical.hashnode.dev/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'allow',
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
  publication(host: "https://waxalchemical.hashnode.dev/") {
    isTeam
    title
    post(slug: $slug) {
      title
      content {
        markdown
        html
      }
    }
  }
}
`;

gql(GET_USER_ARTICLES, { slug: props.slug, hostname: "https://waxalchemical.hashnode.dev/" })
    .then(result => 
    {
        document.getElementById('title').innerText = result.data.post.title;
        document.getElementById('cover-image').src = result.data.post.coverImage;
        document.getElementById('content').innerHTML = marked(result.data.post.contentMarkdown);
        loading.value = false;

        
}
);

</script>

