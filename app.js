

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");  // To ignore dashes and lowercase uppercase problems while comparing string
const homeStartingContent = "Welcome to my blog! I'm Anshuman Singh, a passionate and dedicated Computer Science student at Jaypee Institute of Information Technology. With an unwavering curiosity and a drive for continuous learning, I'm on a journey to become a proficient full-stack developer. This blog is my platform to share my coding experiences, insights, and discoveries as I explore the vast world of programming and web developmentJoin me on this exciting adventure as we delve into various programming languages, frameworks, and tools. Together, we'll explore the art of crafting dynamic and interactive web applications, while also embracing the challenges and triumphs that come with being a coder.Whether you're a fellow coding enthusiast or just someone curious about the world of technology, I hope you find inspiration and valuable information here. Let's learn, grow, and connect in this thriving community of developers. Thank you for visiting, and I look forward to embarking on this coding journey with you!";
const aboutContent = "Hello there! I'm Anshuman Singh, a dedicated Computer Science student at Jaypee Institute of Information Technology with a profound love for coding and all things tech. I'm thrilled to have you here on this coding journey with me.";
const contactContent = "Let's Connect! :Thank you for visiting . Your support and engagement mean the world to me. If you have any questions, ideas, or just want to say hello, feel free to reach out through the contact form or find me on social media. Let's connect and embark on this journey of exploration, growth, and connection together!";
const aboutContent1 ="A Journey of Curiosity and Creation : From a young age, I've been captivated by the world of programming and web development. Driven by an insatiable curiosity, I'm constantly seeking new challenges and opportunities to expand my knowledge and skills. I take immense pleasure in exploring the intricacies of code, finding innovative solutions, and transforming ideas into reality";
const aboutContent2 ="Embracing the Full Stack: As a striving coder, my goal is to become a proficient full-stack developer. My journey has led me to embrace the art of crafting dynamic and interactive web applications, from the captivating frontend design to the robust backend infrastructure. I'm passionate about creating seamless user experiences and building web solutions that leave a lasting impact.";
const aboutContent3 ="Empowering through Knowledge: Through this blog, I aspire to empower others on their coding journeys. I believe in the power of knowledge sharing and its potential to transform lives. With a focus on clarity and simplicity, I aim to provide valuable content that helps aspiring coders grasp complex concepts with ease and confidence.";
const aboutContent4 ="Skills and Attributes: Hard work and dedication have always been at the core of my approach. I am driven by an unwavering determination to overcome challenges and achieve my goals. Additionally, my strong team coordination skills enable me to collaborate effectively with others, leveraging diverse perspectives to deliver exceptional results.";
const app = express();
let posts=[];
app.set('view engine', 'ejs');       // Setting up ejs

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {                                                 // rendering root page through home.ejs
  res.render("home", { 
    StartingContent: homeStartingContent,
       posts:posts                              
  });
})
app.get("/about", function (req, res) {                                       // rendering about page through about.ejs
  res.render("about", { aboutContent: aboutContent,
  aboutContent1:aboutContent1,aboutContent2:aboutContent2,aboutContent3:aboutContent3,aboutContent4:aboutContent4
 });
})
app.get("/contact", function (req, res) {                                            // rendering contact page through contact.ejs
  res.render("contact", { contactContent: contactContent });
})
app.get("/compose", function (req, res) {                                            // rendering contact page through contact.ejs
  res.render("compose");
})
app.post("/compose", function (req, res) {                                  // post request to get the title and body entered by user in compose page 
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };
posts.push(post);
res.redirect("/");
})
app.get("/posts/:postName",function(req,res){
  const requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach(function(post){
    const storedtitle=_.lowerCase(post.title);
    if(requestedTitle===storedtitle)
    {
          res.render("post",{
            title:post.title,
            content:post.content
          });
    }
  });
});










app.listen(3000, function () {
  console.log("Server started on port 3000");
});
