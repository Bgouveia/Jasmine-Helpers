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
      return $(this.actual).size() === 1;
    },
    toExist: function () {
      return $(this.actual).size() >= 0;
    },
    toBeVisible: function () {
      return $(this.actual).css('display') !== undefined && $(this.actual).css('display') !== 'none';
    }
  })
});
