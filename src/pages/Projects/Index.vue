<template>
  <layout>
    <v-container fluid grid-list-xs pa-0>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="msg">
            Hello there. 
          </h1>
          <h3 class="font-weight-thin py-5 text-xs-center display-1">
            This is some of the work I've done for my clients as well as myself
          </h3>
        </v-flex>
      </v-layout>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex v-for="(project, index) in $page.projects.edges" :key="index" xs12 md5>
            <v-card class="mx-3" hover :to="project.node.path">
              <v-img :src="project.node.galleryImages[0]" aspect-ratio="2.75"></v-img>
              <v-card-title class="pa-3" primary-title>
                <div>
                  <h4 class="title mb-0">{{ project.node.client }}</h4>

                  <!-- <div>{{ project.what }}</div> -->
                </div>
              </v-card-title>
              <v-card-text class="pt-0">
                <v-chip 
                  v-for="(tag, index) in project.node.tags" 
                  :key="index" 
                  color="secondary" 
                  text-color="white">
                    {{ tag.split('/')[tag.split('/').length - 1] }}
                </v-chip>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </layout>
</template>

<page-query>
query Project {
  projects: allProject {
    edges {
      node {
        title
        path
        client
        tags
        galleryImages
      }
    }
  }
}
</page-query>