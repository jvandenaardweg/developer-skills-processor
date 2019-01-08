// A relationship tree so we can identify related skills
// TODO: find out if "redux" is used close to the word "react". This way we can identify a relationship between "react" and "redux"


const test = {
  'frontend': {
    'javascript': {
      'frameworks': {
        'vue': ['vue', 'vuex'],
        'react': ['react'],
        'react native': ['react native', 'react'],
        'node': ['node', 'express']
      },
      'libraries': ['jquery', 'rxjs'],
      'stylesheets': ['css', 'scss', 'sass', 'less'],
    },
  },
  'backend': {
    'java': ['maven', 'jsf'],
    'dotnet': ['dotnet', '.net'],
    'databases': {
      'sql': ['mysql', 'postgresql'],
      'nosql': ['nosql', 'mongodb']
    }
  },
  'mobile': {
    'ios': ['swift', 'xcode'],
    'android': ['java', 'android studio']
  }
}

const skillsTree = {
  'javascript': {
    'vue': ['vue', 'vuejs', 'vue.js', 'vuex'],
    'react': ['react', 'reactjs', 'react.js', 'react native'],
    'jquery': ['jquery', 'jqueryjs', 'jquery.js'],
    'node': ['node', 'nodejs', 'node.js', 'express', 'express.js'],
    'angular': ['angular', 'angularjs', 'angular.js'],
    'javascript': ['vue', 'react', 'jquery', 'node', 'angular']
  },
  'java': {
    'java': ['maven', 'apache maven', 'jsf', 'javaserver faces', 'struts', 'hibernate', 'gwt', 'google web toolkit', 'vaadin', 'wicket']
  },
  'php': {
    'php': ['php', 'laravel', 'symfony', 'zend', 'cakephp', 'codeigniter', 'yii', 'fuelphp', 'phpixie']
  },
  'dotnet': {
    'dotnet': ['dotnet', '.net']
  },
  'databases': {
    'sql': ['mysql', 'postgresql', 'mariadb', 'microsoft access', 'microsoft sql server', 'oracle', 'sqlite'],
    'mysql': ['mysql'],
    'postgresql': ['postgresql'],
    'databases': ['mysql', 'postgresql', 'sql'],
  },
  'ios': {
    'ios': ['swift']
  }
}
// Creates one array of all the javascript skills
const javascriptSkills = Object.keys(skillsTree.javascript).flatMap((key) => [...skillsTree.javascript[key].values()])
// const javaSkills = Object.keys(skillsTree.java).flatMap((key) => [...skillsTree.java[key].values()])

const rolesTree = {
  'frontend': ['frontend', 'front-end', 'javascript', ...javascriptSkills],
  'backend': ['backend', 'back-end', 'node', 'java', 'databases', ...skillsTree.javascript.node, ...skillsTree.java.java, ...skillsTree.databases.databases, ...skillsTree.php.php],
  'devops': ['devops', 'dev-ops', 'databases', ...skillsTree.databases.databases],
  'ios': ['ios', 'mobile', ...skillsTree.ios.ios],
  'android': ['android', 'mobile'],
  'mobile': ['ios', 'android']
}


module.exports = { skillsTree, rolesTree }
