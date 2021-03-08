using System;

namespace ski.Services
{
    public class SkiLengthCalculator
    {
        public enum SkiType
        {
            Classic,
            Freestyle
        }

        public static int CalculateLengthChild(int age, int bodyLength)
        {
            switch (age)
            {
                case <= 4:
                    return bodyLength;
                case <= 8:
                    return bodyLength + 15;
                default:
                    return bodyLength + 15;
            }
        }
        
        public static int CalculateLengthAdult(int bodyLength, SkiType type)
        {
            switch (type)
            {
                case SkiType.Classic:
                    return Math.Min(bodyLength + 20, 207);
                case SkiType.Freestyle:
                    return bodyLength + 15;
                default:
                    return bodyLength + 15;
            }
        }
        
    }
}