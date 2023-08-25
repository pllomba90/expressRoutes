const { expect } = require('chai');
const { findMode, findMean, findMedian } = require('./mathFunctions'); // Replace with the correct path

describe('Math Functions', function() {
  describe('findMode', function() {
    it('should return the correct mode', function() {
      const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
      expect(findMode(arr)).to.equal(4);
    });

    it('should handle an empty array', function() {
      const arr = [];
      expect(findMode(arr)).to.equal(null);
    });
  });

  describe('findMean', function() {
    it('should return the correct mean', function() {
      const arr = [1, 2, 3, 4, 5];
      expect(findMean(arr)).to.equal(3);
    });

    it('should handle an empty array', function() {
      const arr = [];
      expect(findMean(arr)).to.equal(null);
    });
  });

  describe('findMedian', function() {
    it('should return the correct median for odd-length array', function() {
      const arr = [1, 2, 3, 4, 5];
      expect(findMedian(arr)).to.equal(3);
    });

    it('should return the correct median for even-length array', function() {
      const arr = [1, 2, 3, 4];
      expect(findMedian(arr)).to.equal(2.5);
    });

    it('should handle an empty array', function() {
      const arr = [];
      expect(findMedian(arr)).to.equal(null);
    });
  });
});
