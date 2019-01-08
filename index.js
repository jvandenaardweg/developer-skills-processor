const natural = require('natural');
const flatMap = require('flatmap');
const classifier = new natural.BayesClassifier();
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

// Java frameworks: https://en.wikipedia.org/wiki/List_of_Java_frameworks

const skillTree = {
  'javascript': {
    'vue': ['vue', 'vuejs', 'vue.js', 'vuex'],
    'react': ['react', 'reactjs', 'react.js', 'react native'],
    'jquery': ['jquery', 'jqueryjs', 'jquery.js'],
    'node': ['node', 'nodejs', 'node.js', 'express', 'express.js'],
    'angular': ['angular', 'angularjs', 'angular.js']
  },
  'java': {
    'java': ['maven', 'apache maven', 'jsf', 'javaserver faces', 'struts', 'hibernate', 'gwt', 'google web toolkit', 'vaadin', 'wicket']
  },
  'dotnet': ['dotnet', '.net']
}
// Creates one array of all the javascript skills
const javascriptSkills = Object.keys(skillTree.javascript).flatMap((key) => [...skillTree.javascript[key].values()])

const titleTree = {
  'frontend': ['frontend', 'javascript', ...javascriptSkills],
  'backend': ['backend', ...skillTree.javascript.node, ...skillTree.java.java],
}

// So we can identify someone who is good in Javascript
// when we find a "javascript" skill like "react" or "vue"
classifier.addDocument(javascriptSkills, 'javascript');

// Create a classifier for each "javascript" skill key
// So we can identify someone who has experience in "vue" (key) when we find "vuex"
Object.keys(skillTree.javascript).map((key) => {
  classifier.addDocument(skillTree.javascript[key], key);
})

// Create a classifier for each "java" skill key
Object.keys(skillTree.java).map((key) => {
  classifier.addDocument(skillTree.java[key], key);
})

// Create a classifier for each title
// So we can identify a "frontend" (key) developer when we find "react" or "vue"
Object.keys(titleTree).map((key) => {
  classifier.addDocument(titleTree[key], key);
})

classifier.addDocument(['.net', 'dotnet', 'php', 'node'], 'backend');

classifier.train();

// console.log(classifier.getClassifications('react and react native'));
console.log(classifier.getClassifications('reactjs maven'));

// tfidf.addDocument('react and react native')
// tfidf.tfidfs('react', function(i, measure) {
//   console.log('document #' + i + ' is ' + measure);
// });
















// tfidf.addDocument('this document is about node. it has node examples');
// tfidf.tfidfs('node', function(i, measure) {
//   console.log('document #' + i + ' is ' + measure);
// });

// classifier.events.on('trainedWithDocument', function (obj) {
//   console.log(obj);
//   /* {
//   *   total: 23 // There are 23 total documents being trained against
//   *   index: 12 // The index/number of the document that's just been trained against
//   *   doc: {...} // The document that has just been indexed
//   *  }
//   */
//  });



