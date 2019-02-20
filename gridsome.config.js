// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "MeetAndreaRocca",
  siteUrl: "https://meetandrearocca.com",
  transformers: {
    remark: {}
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/*.md",
        typeName: "Post",
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/*.md",
        typeName: "Project",
      }
    }
  ]
}