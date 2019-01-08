const { getRoles } = require('./roles');
const { getSkills } = require('./skills');
const { skillsTree, rolesTree } = require('./trees');

function getRelatedRolesAndSkills (text) {
  const roles = getRoles(rolesTree, text);
  const skills = getSkills(skillsTree, text);

  return {
    ...roles,
    ...skills
  }
}

const relatedRolesAndSkills = getRelatedRolesAndSkills(`Dutch developer who loves to work with React and Vue. Sometimes creates API's with Node and PostgresQL.`)

console.dir(relatedRolesAndSkills, { depth: null })
