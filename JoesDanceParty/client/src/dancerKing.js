// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

 // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  // this.$head = $('<image class="oscillate head" src="' + this.setPosition + '"/>');
  this.$node= $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);


  // now that we have defined the this object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


//  return dancer;
};

  // this.step = function() {
  //   // the basic this doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(this.step, timeBetweenSteps);
  // };

  makeDancer.prototype.step = function() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
