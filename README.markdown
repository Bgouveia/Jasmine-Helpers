# A few basic helpers for Jasmine javascript

**toBeObject:** verify if parameter is object

**toBeString:** verify if parameter is string

**toBeNumber:** verify if parameter is a number

**toBeFunction:** verify if parameter is a function

**toBeUnique:** verify the uniqueness of the given parameter (array or object)

**toExist:** verify the existence of the given parameter

**toBeUndefined:** checks if the given parameter is undefined

**toBeVisible:** checks if the given dom element is visible

**toBeNull:** checks if the given parameter is null

**DOM:** simplify interactions with DOM
- createElement
  * dom.createElement('div')

- ofType
  * dom.createElement('input').ofType('text')

- withId
  * dom.createElement('div').withId('myId')

- withClasses
  * dom.createElement('div').withClasses('firstClass secondClass')

- withContent
  * dom.createElement('div').withContent('this is my content sample')

- withValue
  * dom.createElement('input').ofType('text').withValue('this is my sample value');

- andAppendTo
  * Ex.1 - object:
  dom.createElement('div').andAppendTo(document.body)
  * Ex.2 - ID:
  dom.createElement('div').andAppendTo('myBodyId')
  * Ex.3 - Tag Name:
  dom.createElement('div').andAppendTo('body')
  * Ex.4 - Class Name:
  dom.createElement('div').andAppendTo('myBodyClass')

- getCreatedElements
  * Returns all the elements created through this helper, for debugging purporses.
  * dom.getCreatedElements()

- destroy
  * Destroy all the elements created through this helper
  * dom.destroy()
