

namespace api.models
{
    public class TeamSchedule
    {
        public int GameId {get;set;}
        public string DateOfGame {get;set;}
        public string TimeOfGame {get;set;}
        public int TeamId {get;set;}
        public int OpponentId {get;set;}

    }
}