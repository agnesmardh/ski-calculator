using System;
using Microsoft.AspNetCore.Mvc;
using ski.Services;

namespace ski.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    
    public class SkiController
    {
        [HttpGet("{age}/{bodyLength}")]
        public int GetSkiLengthChild(int age, int bodyLength)
        {
            return SkiLengthCalculator.CalculateLengthChild(age, bodyLength);
        }
        
        [HttpGet("[action]/{bodyLength}")]
        public int GetSkiLengthClassic(int bodyLength)
        {
            return SkiLengthCalculator.CalculateLengthAdult(bodyLength, SkiLengthCalculator.SkiType.Classic);
        }
        
        [HttpGet("[action]/{bodyLength}")]
        public int GetSkiLengthFreestyle(int bodyLength)
        {
            return SkiLengthCalculator.CalculateLengthAdult(bodyLength, SkiLengthCalculator.SkiType.Freestyle);
        }
    }
}