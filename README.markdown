# A few basic helpers for Jasmine javascript

**toBeObject:** verify if parameter is object

**toBeString:** verify if parameter is string

**toBeInteger:** verify if parameter is integer

**toBeUnique:** check the uniqueness of the given parameter (.class, #id, element)
**toBeUnique:** check the uniqueness of the given element

**toExist:** verify the existence of the given parameter (.class, #id, element)
**toExist:** verify the existence of the given element

**toBeVisible:** checks if the given element is visible

**DOM:** simplify interactions with DOM
- createElement
  dom.createElement('div')

- withId
  dom.createElement('div').withId('myId')

- withClasses
  dom.createElement('div').withClasses('firstClass secondClass')

- withContent
  dom.createElement('div').withContent('this is my content sample')

