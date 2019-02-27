<template>
  <v-app>
    <v-toolbar class="elevation-0 py-3" color="transparent">
      <v-toolbar-items v-if="$route.name !== 'home'" style="position: absolute">
        <v-btn flat icon to="/">
          <v-icon>fas fa-home</v-icon>
        </v-btn>
        <v-btn flat icon @click="$router.go(-1)">
          <v-icon>fas fa-chevron-left</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title absolute>
        <g-link to="/">
          <img class="brand-img" height="100" src="/assets/images/logo.png" alt="logo" />
        </g-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <transition name="fade" appear>
      <v-content>
        <slot/>
      </v-content>
    </transition>
    <v-footer dark height="auto">
      <v-card class="flex" flat tile>
        <v-card-actions class="grey darken-3 justify-center">
          &copy; ilrock
          <v-spacer></v-spacer>

          <v-btn
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="mx-3"
            dark
            icon>
            <v-icon size="24px">{{ social.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      socials: [
        {
          name: 'Twitter',
          icon: 'fab fa-twitter',
          url: 'https://twitter.com/ilrock__'
        },
        {
          name: 'GitHub',
          icon: 'fab fa-github',
          url: 'https://github.com/ilrock'
        },
        {
          name: 'BitBucket',
          icon: 'fab fa-bitbucket',
          url: 'https://bitbucket.org/ilrock'
        }
      ]
    }
  }
}
</script>

<style>
.fade-enter-active {
  transition: all .30s ease-out;
}

.fade-enter {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
