// myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap function
  function myMap(collection, callback) {
    let result = [];
    myEach(collection, function (item) {
      result.push(callback(item));
    });
    return result;
  }
  
  // myReduce function  function myReduce(collection, callback, acc) {
    // myReduce function
function myReduce(collection, callback, acc) {
    let result = acc !== undefined ? acc : (Array.isArray(collection) ? collection[0] : undefined);
    let startIndex = acc !== undefined ? 0 : 1;
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        result = callback(result, collection[i]);
      }
    } else {
      let keys = myKeys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        result = callback(result, collection[keys[i]]);
      }
    }
  
    return result;
  }
  
  
  
  // myFind function
  function myFind(collection, predicate) {
    for (let item of collection) {
      if (predicate(item)) {
        return item;
      }
    }
  }
  
  // myFilter function
  function myFilter(collection, predicate) {
    let result = [];
    myEach(collection, function (item) {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  // mySize function
  function mySize(collection) {
    let size = 0;
    myEach(collection, function () {
      size++;
    });
    return size;
  }
  
  // Array Functions
  
  // myFirst function
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // myLast function
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // BONUS: mySortBy function
  function mySortBy(array, callback) {
    return array.slice().sort(function (a, b) {
      return callback(a) - callback(b);
    });
  }
  
  // BONUS: myFlatten function
  function myFlatten(array, shallow = false) {
    let result = [];
    for (let item of array) {
      if (Array.isArray(item) && !shallow) {
        result.push(...myFlatten(item));
      } else {
        result.push(item);
      }
    }
    return result;
  }
  
  // Object Functions
  
  // myKeys function
  function myKeys(object) {
    let keys = [];
    for (let key in object) {
      keys.push(key);
    }
    return keys;
  }
  
  // myValues function
  function myValues(object) {
    let values = [];
    for (let key in object) {
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    mySortBy,
    myFlatten,
    myKeys,
    myValues
  };
  