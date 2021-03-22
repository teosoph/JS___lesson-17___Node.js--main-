import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  element.style.display = "     inline-block ";
  element.style.width = "  300px ";
  element.style.border = "  4px double black";
  element.style.backgroundColor = "yellow";

  return element;
}

const childElementRef = document.querySelector(".gallery");
const parentDiv = childElementRef.parentNode;
parentDiv.insertBefore(component(), childElementRef);

const imgList = [
  {
    original:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    preview:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    alt: "photo1",
  },
  {
    original:
      "http://thecatandthedog.com/wp-content/uploads/2020/11/kitten-440379-768x432.jpg",
    preview:
      "http://thecatandthedog.com/wp-content/uploads/2020/11/kitten-440379-768x432.jpg",
    alt: "photo2",
  },
  {
    original:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.759xh;0,0&resize=980:*",
    preview:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1543599392.jpg?crop=1.00xw:0.759xh;0,0&resize=980:*",
    alt: "photo3",
  },
];

const nextBtnRef = document.querySelector(".next");
const prevBtnRef = document.querySelector(".prev");
const imgRef = document.querySelector(".img ");
let currentIndex = 0;

const goToNextImg = () => {
  if (currentIndex === imgList.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  showImg();
};
const goToPrevImg = () => {
  if (currentIndex === 0) {
    currentIndex = imgList.length - 1;
  } else {
    currentIndex -= 1;
  }
  showImg();
};

const showImg = () => {
  const activeImg = imgList[currentIndex];
  imgRef.src = activeImg.original;
  imgRef.alt = activeImg.alt;
};

showImg();

nextBtnRef.addEventListener("click", goToNextImg);
prevBtnRef.addEventListener("click", goToPrevImg);
