const natural = require('natural');
const classifier = new natural.BayesClassifier();
const flatMap = require('flatmap');

// function findWordDistance () {
//   // Method to match mark "vue.js" the same as "vue"
//   const distance = natural.JaroWinklerDistance("vue", "vue.js")
//   if (distance > 0.8) {
//     console.log('We got a match in word distance', distance)
//   }
// }

// classifier.events.on('trainedWithDocument', function (obj) {
//   console.log(obj);
//   /* {
//   *   total: 23 // There are 23 total documents being trained against
//   *   index: 12 // The index/number of the document that's just been trained against
//   *   doc: {...} // The document that has just been indexed
//   *  }
//   */
// });


const getSkills = (skillsTree, text) => {
  const textLower = text.toLowerCase();
  // const javascriptSkills = Object.keys(skillsTree.javascript).flatMap((key) => [...skillsTree.javascript[key].values()])
  // const javascriptSkills = Object.keys(skillsTree.javascript).flatMap((key) => [...skillsTree.javascript[key].values()])

  // classifier.addDocument(javascriptSkills, 'javascript');

  // Create a classifier for each "javascript" skill key
  // So we can identify someone who has experience in "vue" (key) when we find "vuex"
  // Object.keys(skillsTree.javascript).map((key) => {
  //   classifier.addDocument(skillsTree.javascript[key], key);
  // })

  // // Create a classifier for each "java" skill key
  // Object.keys(skillsTree.java).map((key) => {
  //   classifier.addDocument(skillsTree.java[key], key);
  // })

  Object.keys(skillsTree).map((mainKey) => {
    classifier.addDocument(mainKey, mainKey);
    Object.keys(skillsTree[mainKey]).map((subKey) => {
      classifier.addDocument(skillsTree[mainKey][subKey], subKey);
    })
  })

  classifier.train();

  return {
    skills: classifier.getClassifications(textLower)
  }
}

module.exports = { getSkills }
