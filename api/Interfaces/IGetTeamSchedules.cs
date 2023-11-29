using api.models;

namespace api.interfaces
{
    public interface IGetTeamSchedules
    {
         public void GetTeamSchedules(List<TeamSchedule> teamSchedules);
    }
}