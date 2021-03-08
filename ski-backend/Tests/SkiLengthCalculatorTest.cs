using System;
using NUnit.Framework;
using ski.Services;

namespace Tests
{
    public class SkiLengthCalculatorTest
    {

        [Test]
        public void RightLengthForSmallChild()
        {
            const int age = 4;
            const int bodyLength = 105;
            var length = SkiLengthCalculator.CalculateLengthChild(age, bodyLength);
            Assert.AreEqual(bodyLength, length);
        }
        
        [Test]
        public void RightLengthForOlderChild()
        {
            const int age = 8;
            const int bodyLength = 130;
            var length = SkiLengthCalculator.CalculateLengthChild(age, bodyLength);
            Assert.True(length >= bodyLength + 10 && length <= bodyLength + 20);
        }
        
        [Test]
        public void RightLengthForAdultClassic()
        {
            const int bodyLength = 170;
            const SkiLengthCalculator.SkiType type = SkiLengthCalculator.SkiType.Classic;
            var length = SkiLengthCalculator.CalculateLengthAdult(bodyLength, type);
            Assert.AreEqual(bodyLength + 20, length);
        }
        
        [Test]
        public void MaxLengthForAdultClassic()
        {
            const int bodyLength = 200;
            const SkiLengthCalculator.SkiType type = SkiLengthCalculator.SkiType.Classic;
            var length = SkiLengthCalculator.CalculateLengthAdult(bodyLength, type);
            Assert.AreEqual(207, length);
        }
        
        [Test]
        public void RightLengthForAdultFreestyle()
        {
            const int bodyLength = 170;
            const SkiLengthCalculator.SkiType type = SkiLengthCalculator.SkiType.Freestyle;
            var length = SkiLengthCalculator.CalculateLengthAdult(bodyLength, type);
            Assert.True(length >= bodyLength + 10 && length <= bodyLength + 15);
        }
    }
}