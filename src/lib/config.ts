let inDevEnv
process && process.env.NODE_ENV === "development"
  ? (inDevEnv = true)
  : (inDevEnv = false)

export const dev = inDevEnv

// IGNORE ABOVE THIS

type NavLink = { text: string; path: string; newWindow?: boolean }
export const navLinks: NavLink[] = [
  { text: "Home", path: "/" },
  { text: "Blog", path: "/blog" },
  { text: "Categories", path: "/blog/categories" },
  // { text: "Feed", path: "/rss.xml", newWindow: true },
]

// General Settings
export const deployedUrl = "https://inquisit.blog"
export const url = !dev ? deployedUrl : "http://localhost:3000"
export const logoText = "Inquisit" // Shows in the Navigation & Footer

// NEEDS TO BE REMOVED
export const author = "Darshan" // Shows in the page's metadata
export const twitterUsername = "" // Shows in the page's metadata. Helps when the page is shared on Twitter. If it's empty no issues, it won't be shown.

// Footer
export const footerTagline = "Some sort of tagline?"
export const email = "inquisit.blog@gmail.com"

// Home Page
export const title = "Inquisit"
export const description =
  "Inquisit is a project about igniting curiosity and exploring diverse academic adventures. I hope you find value in this blog as a source of inspiration and a platform for showcasing your own interdisciplinary pursuits."
export const heroTagline =
  "A project about igniting curiosity and exploring diverse academic adventures. I hope you find value in this blog as a source of inspiration and a platform for showcasing your own interdisciplinary pursuits."
export const aboutBlog = [
  "Science and philosophy have been like two peas in a pod throughout history. Back in the day, those bearded Greek pioneers didn't bother with drawing lines. They were suckers for knowledge from every angle possible.",
  "Fast forward to the past three centuries, and science got chopped up into all these restrictive disciplines. Sure, each field is making strides, but we're missing out on the broader perspective.",
  "We're here to shake things up and tap into that holistic approach to inquiry. This is where science meets philosophy and everything in between.",
]

export const people = [
  {
    name: "Darshan",
    about:
      "Hi, I’m Darshan, a gap-year student just having bid farewell to Sahyadri School. I’m interested in studying AI and Cognitive Science through an array of interdisciplinary lenses.",
    avatar: "shan-edge.png",
  },
  {
    name: "Neesh",
    // about: "Hey, I'm Neesh! Also still recovering from Sahyadri Separation Syndrome. Bringing my knack for killer UI/UX Design to life exploring the frustrating, yet fulfilling world of Web Development.",
    about:
      "Hey, I'm Neesh! Also still recovering from Sahyadri Separation Syndrome. Bringing my knack for killer design to life exploring the frustrating, yet fulfilling world that is learning to code.",
    avatar: "neesh-edge.png",
  },
]

// Blog Page
export const blogTitle = "Blog" // Shows as "this | {title}" => Blog | Inquisit
export const blogDescription = "Check out the latest articles on Inquisit."
