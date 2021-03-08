namespace ski
{
    public class Ski
    {
        public enum SkiType
        {
            Classic,
            Freestyle
        }

        public SkiType Type { get; set; }
        
        // length of ski in centimeters
        public int Length { get; set; }
        

    }
}