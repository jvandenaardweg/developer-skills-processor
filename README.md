# developer-skills-processor

A tool to identify the skills of a developer and categorize them. So it can be used to find matching project requirements, related developers or missing skills.

In the example below we have identified a skills "react":

```javascript
classifier.getClassifications('react')
```

Processing this would suggest these: javascript, react and frontend

```javascript
[
  { label: 'javascript', value: 0.18181818181818182 },
  { label: 'react', value: 0.18181818181818182 },
  { label: 'frontend', value: 0.18181818181818182 },
  { label: 'vue', value: 0.09090909090909091 },
  { label: 'jquery', value: 0.09090909090909091 },
  { label: 'node', value: 0.09090909090909091 },
  { label: 'angular', value: 0.09090909090909091 },
  { label: 'java', value: 0.09090909090909091 },
  { label: 'backend', value: 0.0909090909090909 }
]
```
