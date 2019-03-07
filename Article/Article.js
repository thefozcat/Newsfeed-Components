// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'Expand';

    // Add Collapse Button
    this.collapseButton = this.domElement.querySelector('.collapseButton');
    this.collapseButton.textContent = 'Collapse';
    this.collapseButton.addEventListener('click', () => this.expandArticle());
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    this.expandButton.classList.toggle('hide-btn');
    // Add Collapse Button
    this.collapseButton.classList.toggle('hide-btn');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(function(article) {
  return new Article(article);
});

// Add Article Constructor

class NewArticle {
  constructor(content) {
    this.title = content.title;
    this.date = content.date;
    this.paragraph1 = content.paragraph1;
    this.paragraph2 = content.paragraph2;
    this.paragraph3 = content.paragraph3;
  }

  write() {
    const parentDiv = document.querySelector('.articles');
    const newDiv = document.createElement('div');
    const newTitle = document.createElement('h2');
    const newDate = document.createElement('p');
    const newParagraph1 = document.createElement('p');
    const newParagraph2 = document.createElement('p');
    const newParagraph3 = document.createElement('p');
    const newOpenBtn = document.createElement('span');
    const newCloseBtn = document.createElement('span');
    
    newDiv.classList.add('article');
    newDate.classList.add('date');
    newOpenBtn.classList.add('expandButton');
    newCloseBtn.classList.add('collapseButton');
    newCloseBtn.classList.add('hide-btn');

    parentDiv.appendChild(newDiv);
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newDate);
    newDiv.appendChild(newParagraph1);
    newDiv.appendChild(newParagraph2);
    newDiv.appendChild(newParagraph3);
    newDiv.appendChild(newOpenBtn);
    newDiv.appendChild(newCloseBtn);

    newTitle.textContent = `${this.title}`;
    newDate.textContent = `${this.date}`;
    newParagraph1.textContent = `${this.paragraph1}`;
    newParagraph2.textContent = `${this.paragraph2}`;
    newParagraph3.textContent = `${this.paragraph3}`;


    newOpenBtn.textContent = 'Expand';
    newOpenBtn.addEventListener('click', () => this.expandArticle(newDiv, newOpenBtn, newCloseBtn));

    newCloseBtn.textContent = 'Collapse';
    newCloseBtn.addEventListener('click', () => this.expandArticle(newDiv, newOpenBtn, newCloseBtn));

    return this;
  }

  expandArticle(newDiv, newOpenBtn, newCloseBtn) {
    newDiv.classList.toggle('article-open');
    newOpenBtn.classList.toggle('hide-btn');
    newCloseBtn.classList.toggle('hide-btn');
  }
}

const test = new NewArticle({
  title: 'Test Title',
  date: 'Mar 6th, 2019',
  paragraph1: 'Test test test test test test test test test test test test test test test test test test test test test test',
  paragraph2: 'Test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2 test2',
  paragraph3: 'Test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3 test3'
});

test.write();

const es5Article = new NewArticle({
  title: 'ES5 Is Cool Again',
  date: 'Mar 6th, 2019',
  paragraph1: 'Bacon ipsum dolor amet shankle chicken picanha ground round jowl beef ribs tail ham porchetta buffalo tri-tip meatloaf cow shoulder. Tail brisket pork chop, prosciutto jowl kevin short loin short ribs pork belly rump porchetta. Meatloaf tongue frankfurter capicola sausage, pancetta swine jowl flank sirloin venison. Doner strip steak ground round, spare ribs tail beef boudin tenderloin ball tip ham corned beef kevin shank meatloaf short ribs. Pork belly pancetta venison, pastrami meatloaf strip steak pig ribeye sausage.',
  paragraph2: 'Meatball filet mignon meatloaf turkey swine alcatra, burgdoggen hamburger brisket doner cupim ribeye capicola salami tail. Meatloaf turkey flank, rump pig jerky tail. Chicken strip steak bresaola, beef hamburger porchetta pig fatback beef ribs andouille pastrami flank tri-tip. Turkey capicola sirloin, salami landjaeger swine filet mignon alcatra porchetta short loin prosciutto. Landjaeger meatball pig salami shoulder chicken cupim t-bone, hamburger tongue spare ribs ham hock buffalo burgdoggen. Sirloin pancetta turducken chuck t-bone ribeye meatloaf cow spare ribs brisket corned beef jowl.',
  paragraph3: 'Ribeye shankle tail brisket short ribs. Spare ribs venison tenderloin prosciutto, bacon chicken doner swine cow chuck meatloaf shoulder tri-tip ribeye. Ham hock turducken sirloin, buffalo pork swine boudin drumstick. Doner swine strip steak shankle rump turducken ball tip. Bacon buffalo porchetta prosciutto, filet mignon turkey jowl spare ribs swine shank shoulder.'
});

es5Article.write();