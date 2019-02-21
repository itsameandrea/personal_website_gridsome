<template>
  <Layout>
    <v-container fluid grid-list-xs class="mt-5 px-4">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-carousel 
            height="300"
            hide-delimiters 
            :hide-controls="$page.project.galleryImages.length <= 1"
            prev-icon="fas fa-arrow-left"
            next-icon="fas fa-arrow-right">
            <v-carousel-item
              v-for="(image,i) in $page.project.galleryImages"
              :key="i"
              :src="image"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-spacer />
        <v-flex xs12 md5>
          <v-layout row wrap>
            <v-flex xs12>
              <h1> {{ $page.project.client }} </h1>
            </v-flex>
            <v-flex xs12 v-html="$page.project.content">
              
            </v-flex>
            <v-flex xs12>
              <v-chip 
                v-for="(tag, index) in $page.project.tags" 
                :key="index" 
                color="secondary" 
                text-color="white">
                  {{ tag.split('/')[tag.split('/').length - 1] }}
              </v-chip>
            </v-flex>
            <v-flex xs12>
              <v-btn :href="$page.project.link" target="_blank" color="accent"> check it out </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <div v-html="$page.project.content"/> -->
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    client
    tags
    link
    logo
    galleryImages
    content
  }
}
</page-query>

<script>
export default {
  computed: {
    project () {
      return this.$page.project
    }
  },
  metaInfo() {
    return {
      title: this.$page.project.title
    }
  }
}
</script>