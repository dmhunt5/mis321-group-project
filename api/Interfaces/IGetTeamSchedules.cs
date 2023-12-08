using api.models;

namespace api.Interfaces
{
    public interface IGetTeamSchedules
    {
         public void GetTeamSchedules(List<TeamSchedule> teamSchedules);
    }
}