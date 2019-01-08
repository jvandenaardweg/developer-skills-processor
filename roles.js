const natural = require('natural');
const classifier = new natural.BayesClassifier();

const getRoles = (rolesTree, text) => {
  const textLower = text.toLowerCase();

  Object.keys(rolesTree).map((key) => {
    classifier.addDocument(rolesTree[key], key);
  })
  classifier.train();

  return {
    roles: classifier.getClassifications(textLower)
  }
}

module.exports = { getRoles }
