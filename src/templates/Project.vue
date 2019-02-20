<template>
  <Layout>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12 v-html="$page.project.content">
          
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <div v-html="$page.project.content"/> -->
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  }
}
</script>