

namespace api.models
{
    public class TeamSchedule
    {
        public int GameId {get;set;}
        public DateTime DateOfGame {get;set;}
        public int TimeOfGame {get;set;}
        public int TeamId {get;set;}
        public int OpponentId {get;set;}

    }
}