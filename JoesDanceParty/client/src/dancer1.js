var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.apply(this, arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

};


  makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
  makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


  //function () {
  //   setTimeout(this.oldStep, this.timeBetweenSteps);
  //   // return this.count++;
  // };
  makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
  makeBlinkyDancer.prototype.step = function() {

    // call the old version of step at the beginning of any call to this new version of step

    this.oldStep();
    //makeDancer.prototype.step.call(this)
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

