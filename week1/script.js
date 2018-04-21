let myBooks = ["ben_hur", "twilight", "moby_dick", "the_great_gatsby", "hamlet", "war_and_peace", "madame_bovari", "lolita", "anna_karenina", "heart_of_darkness"];
console.log(myBooks);
/*
// making a ul without for loop
var ul = document.createElement("UL");
		document.getElementById("list").appendChild(ul);
 
		myBooks.forEach(function(name){
			var li = document.createElement("li");
			ul.appendChild(li);
			li.innerHTML += name;
        });
    
    
    //making a ul for loop    
      function list(){  var ul = document.createElement("ul");
document.body.appendChild(ul);

for (var i =0; i < myBooks.length; i++)
{
    var li = document.createElement("li"); 
    li.innerHTML = myBooks[i];
    ul.appendChild(li);
}
      }

      console.log(list())
     */



//(making an info object for the books


let bookList = [{ id: "ben_hur", title: "Ben Hur", language: "written in english", author: "Lewis Wallace" },
{ id: "twilight", title: "Twilight", language: "written in english", author: "Stephenie Meyer" },
{ id: "moby_dick", title: "Moby Dick", language: "written in english", author: "Herman Melville" },
{ id: "the_great_gatsby", title: "The great Gatsby", language: "written in english", author: "F. Scott Fitzgerald" },
{ id: "hamlet", title: "Hamlet", language: "written in english", author: "William Shakespeare" },
{ id: "war_and_peace", title: "War and peace", language: "written in russian", author: "Leo Tolstoy" },
{ id: "madame_bovari", title: "Madame Bovari", language: "written in french", author: "Gustave Flaubert" },
{ id: "lolita", title: "Lolita", language: "written in english", author: "Vladimir Nabokov" },
{ id: "anna_karenina", title: "Anna Karenina", language: "written in russian", author: "Leo Tolstoy" },
{ id: "heart_of_darkness", title: "Heart of darkness", language: "written in english", author: "Joseph Conrad" }
]
// the images in an array
let bookCovers = ["./img/benhur.jpg", "./img/twilight.jpg", "./img/mobydick.jpg", "./img/thegreatgatsby.jpg", "./img/hamlet.jpg",
      "./img/warandpeace.jpg", "./img/madamebovari.jpg", "./img/lolita.jpg", "./img/annakarenina.jpg", "./img/heartofdarkness.jpg"]

console.log(bookCovers);



//function  for loop to get each book
function bookInfo() {
      var ul = document.createElement("ul");
      document.body.appendChild(ul);

      for (var i = 0; i < bookList.length; i++) {
            var li = document.createElement("li");
            var h2 = document.createElement("h2");
            h2.innerHTML = bookList[i].title;
            var h3 = document.createElement("h3");
            h3.innerText = bookList[i].author;
            var p = document.createElement("p");
            p.innerHTML = bookList[i].language;
            //now adding the image
            var img = document.createElement("IMG");
            img.setAttribute("src", bookCovers[i]);
            img.setAttribute("width", "304");
            img.setAttribute("height", "450");
            li.appendChild(img);
            li.appendChild(h2);
            li.appendChild(h3);
            li.appendChild(p);
            ul.appendChild(li);
            //this is adding the id to each li
            var att = document.createAttribute("id");
            att.value = bookList[i].id;
            li.setAttributeNode(att);


      }
}
console.log(bookInfo())
