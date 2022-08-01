const blogTitle = document.getElementById("weblogTitle");
const blogTags = document.getElementById("weblogTags");
const blogText = document.getElementById("weblogText");
const blogAthor = document.getElementById("weblogAthor");
const blogImg = document.querySelector("#weblogImg");
const submitBtn = document.getElementById("submit");
const mainUl = document.querySelector("ul");
let blogLists = [];
function addBlogFunction() {
  var numbers = 0;
  const blogObject = {
    title: blogTitle.value,
    tags: blogTags.value,
    text: blogText.value,
    athour: blogAthor.value,
    img: blogImg.value,
    likes: numbers || 0,
  };
  const blogLi = document.createElement("li");
  const title = document.createElement("h1");
  title.innerHTML = blogObject.title;
  const tags = document.createElement("a");
  tags.innerHTML = blogObject.tags;
  const text = document.createElement("p");
  text.innerHTML = blogObject.text;
  const athour = document.createElement("h5");
  athour.innerHTML = blogObject.athour;
  const image = document.createElement("img");
  image.innerHTML = blogObject.img;
  blogLi.appendChild(title);
  blogLi.appendChild(tags);
  blogLi.appendChild(text);
  blogLi.appendChild(athour);
  blogLi.appendChild(image);
  mainUl.appendChild(blogLi);
  blogLists.push(blogObject);
  const imageToShow = document.createElement("img");
  if(blogObject.img){
    imageToShow.setAttribute("src",`${blogObject.img}`)
 /* imageToShow.innerHTML="    "
  imageToShow.style.width="70%"
  imageToShow.style.height="30%"
  imageToShow.style.backgroundImage = `url(${blogObject.img})`;
  blogLi.appendChild(imageToShow);*/

  }
  /*if (blogObject.img) {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      readImage.reader.result;
      const imageToShow = document.createElement("div");
      imageToShow.style.width = "25%";
      imageToShow.style.height = "25%";
      imageToShow.style.backgroundImage = `url(${blogObject.img})`;
      blogLi.appendChild(imageToShow);
      console.log(imageToShow)
    });
    reader.readAsDataURL(this.files[0]);
  }*/
  const likebtn = document.createElement("button");
  likebtn.innerHTML = "like";
  const likeNumber = document.createElement("span");
  blogLi.append(likebtn);
  blogLi.append(likeNumber);
  likebtn.addEventListener("click", () => {
    blogObject.likes += 1;
    numbers = blogObject.likes;
    likeNumber.innerHTML = blogObject.likes;
  });
  localStorage.setItem("blogsInfo", JSON.stringify(blogLists));
}
submitBtn.addEventListener("click", addBlogFunction);
