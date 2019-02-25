<template>
  <Layout>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="msg">
            Hello reader. 
          </h1>
          <h3 class="font-weight-thin py-5 text-xs-center display-1">
            This is where I write about some of my thoughts.
          </h3>
        </v-flex>
      </v-layout>
      <v-layout row wrap pa-5>
        <v-flex v-for="(post, index) in $page.posts.edges" :key="index" xs12 sm4>
          <!-- <g-link :to="post.node.path"> -->
            <v-card :to="post.node.path" hover class="ma-3">
              <v-img :src="post.node.thumbnail.src" aspect-ratio="1.75"></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ post.node.title }}</h3>
                  <!-- <div>{{ post.summary }}</div> -->
                </div>
              </v-card-title>
            </v-card>
          <!-- </g-link> -->
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>
