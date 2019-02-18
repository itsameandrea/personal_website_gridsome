<template>
  <v-app>
    <v-toolbar class="elevation-0 py-1" color="transparent">
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <g-link to="/">
          <img class="brand-img" height="50" src="/assets/images/logo.png" alt="logo" />
        </g-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <slot/>
    </v-content>
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
        }
      ]
    }
  }
}
</script>
