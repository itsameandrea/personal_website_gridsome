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
          <v-flex v-for="(project, index) in $page.projects.edges" :key="index" xs12 md4>
            <v-card class="mx-3" hover :to="project.node.path">
              <v-img :src="project.node.thumbnail.src" aspect-ratio="2.75"></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{ project.node.client }}</h3>
                  <!-- <div>{{ project.what }}</div> -->
                </div>
              </v-card-title>
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
        thumbnail
      }
    }
  }
}
</page-query>