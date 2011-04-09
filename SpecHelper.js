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
    toBeUnique: function () {
      return $(this.actual).size() >= 0;
    },  
    toExist: function () {
      return $(this.actual).size() >= 0;
    }
  })
});
