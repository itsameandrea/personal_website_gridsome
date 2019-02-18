<template>
  <layout>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="msg">
            <typewriter
              :speed="200"
              :full-erase="true"
              :start-delay="600"
              :words='["Developer","Maker", "Barista"]'
              :erase-delay="600">
              Hello, I'm Andrea! I am a
            </typewriter>
          </div>
        </v-flex>
      </v-layout>
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12 text-xs-center display-1 class="font-weight-thin py-5">
            Welcome to my virtual home
          </v-flex>
          <v-flex xs12 text-xs-center headline class="font-weight-thin pb-5">
            Where do you want to go next?
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 md3 text-xs-center>
            <v-btn flat large to="/about">about</v-btn>
          </v-flex>
          <v-flex xs12 md3 text-xs-center>
            <v-btn flat large to="/projects">projects</v-btn>
          </v-flex>
          <v-flex xs12 md3 text-xs-center>
            <v-btn flat large to="/blog">blog</v-btn>
          </v-flex>
          <v-flex xs12 md3 text-xs-center>
            <v-btn href="mailto:hello@meetandrearocca.com?Subject=Hello Andrea! I have a project for you!" target="_blank" large class="accent">contact</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </layout>
</template>
<script>
export default {
  name: 'Homepage',
}
</script>