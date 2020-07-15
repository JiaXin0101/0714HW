var leftBtn = document.getElementById("left-btn");
var rightBtn = document.getElementById("right-btn");
var imgContent = document.getElementById("content");
var pageNumber = document.getElementById("pageNum");
var pageLength = 0;
var page = 0;
var arr = [];

function Init() {
  axios
    .get("https://run.mocky.io/v3/08c763ab-5bb2-46b7-a504-b9f28a8ba050")
    .then(function (res) {
      // handle success
      pageLength = res.data.img.length - 1;
      // console.log(pageLength);
      arr = res.data.img;
      ChangePage(arr);
    });
}

function ChangePage(imgArr) {
  var html = "";
  html += '<img src="' + imgArr[page] + '" alt=""/>';
  imgContent.innerHTML = html;
  pageNumber.innerHTML = "<h1>" + (page + 1) + "/" + (pageLength + 1) + "</h1>";
  // console.log(html);
}

leftBtn.addEventListener("click", function () {
  page--;

  if (page < 0) {
    page = 7;
  }
  // console.log(page);
  ChangePage(arr);
});
rightBtn.addEventListener("click", function () {
  page++;

  if (page > pageLength) {
    page = 0;
  }
  // console.log(page);
  ChangePage(arr);
});
Init();
