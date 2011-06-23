beforeEach(function () {
  this.addMatchers({
    toBeObject: function () {
      return typeof(this.actual) === 'object';
    },
    toBeString: function () {
      return typeof(this.actual) === 'string';
    },
    toBeInteger: function () {
      return typeof(this.actual) === 'integer';
    },
    toBeFunction: function () {
      return typeof(this.actual) === 'function';
    },
    toBeUnique: function () {
      return this.actual.length === undefined || this.actual.length === 1;
    },
    toExist: function () {
      return this.actual !== null;
    },
    toBeVisible: function () {
      return this.actual.offsetHeight !== 0 && this.actual.offsetWidth !== 0;
    }
  })
});
var dom = (function () {
  var element, createdElements = [];
  return {
    createElement: function (tagName) {
      element = document.createElement(tagName);
      createdElements.push(element);
      element.display = 'none';
      return this;
    },
    ofType: function (typeOfElement) {
      element.type = typeOfElement;
      return this;
    },
    withId: function (id) {
      element.id = id;
      return this;
    },
    withClasses: function (classNames) {
      element.className = classNames;
      return this;
    },
    withContent: function (content) {
      element.innerHTML = content;
      return this;
    },
    withValue: function (value) {
      element.value = value;
      return this;
    },
    andAppendTo: function (elementToAppend) {
      if (typeof(elementToAppend) !== 'object') {
        if (document.getElementById(elementToAppend) !== null)
          elementToAppend = document.getElementById(elementToAppend);
        else if (document.getElementsByTagName(elementToAppend) !== null)
          elementToAppend = document.getElementsByTagName(elementToAppend)[0];
        else if (document.getElementsByClassName(elementToAppend) !== null)
          elementToAppend = document.getElementsByClassName(elementToAppend)[0];
      }
      elementToAppend.appendChild(element);
      return this;
    },
    getCreatedElements: function () {
      return createdElements;
    },
  };
})();
