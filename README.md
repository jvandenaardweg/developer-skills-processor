# Developer Skills Processor

A tool to identify the skills of a developer and categorize them. So it can be used to find matching project requirements, related developers or missing skills.

In the example below we will get the related roles and skills based on a sentence. A sentence that could be found on someone's LinkedIn profile or Resumé.

```javascript
getRelatedRolesAndSkills(`Dutch developer who loves to work with React and Vue. Sometimes creates API's with Node and PostgresQL.`)
```

Processing this would result in:

```javascript
{
  roles: [
    { label: 'frontend', value: 0.14285714285714285 },
    { label: 'backend', value: 0.07142857142857142 },
    { label: 'devops', value: 0.03571428571428572 },
    { label: 'ios', value: 0.017857142857142856 },
    { label: 'android', value: 0.017857142857142856 },
    { label: 'mobile', value: 0.017857142857142856 }
  ],
  skills: [
    { label: 'javascript', value: 0.014109347442680775 },
    { label: 'vue', value: 0.011904761904761908 },
    { label: 'react', value: 0.011904761904761908 },
    { label: 'node', value: 0.011904761904761908 },
    { label: 'sql', value: 0.011904761904761908 },
    { label: 'postgresql', value: 0.011904761904761908 },
    { label: 'jquery', value: 0.005952380952380952 },
    { label: 'angular', value: 0.005952380952380952 },
    { label: 'mysql', value: 0.005952380952380952 },
    { label: 'databases', value: 0.0035273368606701925 },
    { label: 'java', value: 0.0017636684303350963 },
    { label: 'php', value: 0.0017636684303350963 },
    { label: 'dotnet', value: 0.0017636684303350963 },
    { label: 'ios', value: 0.0017636684303350963 }
  ]
}
```

## How can you use this?
In the example above, we have classified that string of text to match certain roles and skills. We've found out it probably is a `frontend` developer and maybe a `backend` developer. The person has `javascript` skills, like: `vue`, `react`, `node`.

As you can see, we have turned a string of text into code that could be used to automate things.

## Use cases
- Parsing a Resumé and extract related roles and skills
- Matching project requirements with the right developer
- Fuzzy match project requirements. A good "javascript" developer could potentially be good at any javascript framework.
- Finding related developers
- Finding related skills
