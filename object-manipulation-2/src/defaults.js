/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
      // console.log('target:', target);
    }
  }
  return target;
}

// this function named defaults has two parameters named target and source.
// source object is compared to target object, and if the source object has any properties that are not within target object,
// those properties and values are added to the target property.
