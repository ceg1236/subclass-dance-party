var BlinkyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps); 
  // Keep our vars/work from Dancer class, call them

  };
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer; 

BlinkyDancer.prototype.step = function(){
  // Dancer.prototype.step(); --> Right track, but not correct
  // we still want our subclass to do work that our superclass does
  // but we want it in the context of current object

  Dancer.prototype.step.call(this); // Common pattern
  // Take our Dancer step, but use it appropriately w Blinky


  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};