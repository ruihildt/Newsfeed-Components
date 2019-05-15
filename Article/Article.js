// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

const articles = document.querySelectorAll('.article');

articles.forEach((article) => {
  new Article(article);
});

// Articles to add

const newArticles = [{
    heading: 'Super Nice Article',
    date: 'Nov 5th, 2019',
    paragraphs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \r Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.    ',
  },
  {
    heading: 'You won\'t want to read this',
    date: 'Nov 5th, 2019',
    paragraphs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },
  {
    heading: 'This is Boring Stuff',
    date: 'Nov 36th, 2019',
    paragraphs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },
];

// Generate the articles from our object

class ArticleGenerator {
  constructor(article, data) {
    this.article = article;
    this.data = data;

    this.createHeading();
    this.createDate();
    this.createParagraphs();
  } 

  createHeading() {
    const heading = document.createElement('h2');
    heading.textContent = this.data.heading;
    this.article.append(heading);
  }

}