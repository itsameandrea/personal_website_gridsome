<template>
  <Layout>
    <v-container fluid grid-list-xs class="about" pa-0>
      <v-layout row wrap justify-center d-flex class="pb-4 pa-5 px-5 grey lighten-3">
        <v-flex xs12 md6 class="summary px-3">
          <h2> TL;DR </h2>

          Hiya! My name is Andrea and I am a full-stack developer. I’ve worked in a number of different roles, industries and companies. This can and will add plenty value to your organization. This is especially true because I don’t want to be “a freelancer”. I love to also help my clients with inputs and suggestions, acting a lot like a business partner with a genuine interest in seeing you succeed.
        </v-flex>
        <v-flex xs12 sm6 class="skills px-3">
          <v-layout row wrap v-for="(skill, index) in skills" :key="index">
            <v-flex xs12 class="subheading">
              {{ skill.name }}
            </v-flex>
            <v-flex xs12>
              <v-progress-linear
                color="accent"
                height="20"
                class="mt-0"
                :value="skill.value"
              ></v-progress-linear>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="pa-4 px-5">
        <v-flex xs12 class="body px-5">
          <h2> About </h2>

          <p style="white-space: pre-line"> 
            I believe that writing my very own about page is as difficult as it gets.

            I do like to make things a bit more personal. This is because I want my clients to actually know me to understand whether or not I'm the right fit for their project and/or organization.

            This is not going to be your classic about page. You won't find what you can already to check on my LinkedIn profile. It's going to be more of a story. My story.

            My name is Andrea and I come from Catanzaro, Calabria. Catanzaro is located in the very south of Italy and it's a bloody gorgeous place. When I was young I went through several "what shall I do when I'll be older" moments. Football player, inventor, speaker. You name it.

            Growing up I've sort of dipped my toes in each of them and I found out that I did enjoy a lot being an "inventor" and a speaker. More than an inventor, I do like to think of myself as a maker. I indeed love to scratch my own itch and make products that help me and others make their lives a little bit better. Surprisingly, I also found out how being an effective communicator (read speaker) is actually a key skill in order to succeed in this world.

            My curiosity naturally led me to several career switches. I started things off working as web developer. I then moved onto logistics, product management, digital advertising and, eventually, freelance development. Basically, it took me a few years to understand that I wanted to do what I actually started with.

            My curiosity led me to several career switches as I wanted to find the place where I could really bring value. I started as a web developer, then I worked in logistics, product management, digital advertising and eventually as a freelance developer.

            While working as a freelance developer, I had the chance to work together with many brilliant individuals on terrific projects. Who knew that I could work on a platform to help terminal diseases researchers. And what about that other platform that is bringing digital knowledge to people in Italy.

            Although I started off as a back-end developer, I now like to mess around with the the full stack. Especially since I got into Vue.js. My favorite stack at the moment includes Ruby on Rails on the server end and Vue.js (Nuxt) on the client. In the last 6 months, I’ve also started digging into serverless architectures and, I’ve got to say I’ve been enjoying the ride and have launched a couple of products as well.

            Of course, I’m not always working. I take my personal life very seriously. I love being a freelance also because it allows me to work from anywhere in the world, bringing together two big parts of who I am today; a maker and a traveler. While writing this about, I’m in beautiful Bali, working with my feet in the sand looking at the ocean. It just cannot get any better.

            I’m also fairly big on food and coffee. I indeed happen to be a pretty decent cook and barista. Let me tell you a secret; according to my evil master plan, I will end up running my own cafe serving great food and beautiful specialty coffee.

            Of course, I need to burn all the calories I get with my eating, this is why I also love bouldering and playing football.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        {
          name: 'Ruby on Rails',
          value: 95
        },
        {
          name: 'Vue.js',
          value: 90
        },
        {
          name: 'HTML/CSS',
          value: 90
        },
        {
          name: 'Node.js',
          value: 80
        },
        {
          name: 'Serverless Architecture',
          value: 80
        },
      ]
    }
  }
}
</script>
