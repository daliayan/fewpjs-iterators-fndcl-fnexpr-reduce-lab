const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


var totalBatteries = batteryBatches.reduce(function(batteryBatches, total) { return batteryBatches + total })