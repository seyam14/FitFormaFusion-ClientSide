

// Your ActivityLog component
const ActivityLog = () => {
  // Mock data (replace this with data from your application)
  const userData = {
    trainerName: 'ANALIS CRUZ',
    startTime: '10:00 AM',
    endTime: '11:00 AM',
    trainingFocus: 'Strength Training',
    intensityLevel: 'High',
    progress: 75,
    completedWorkouts: 3,
    upcomingSession: 'Tomorrow at 9:00 AM',
    trainerTip: 'Remember to stay hydrated during your workout!',
    notes: 'Make sure to stretch before starting the session.',
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Activity Log - Today's Progress</h1>

      <div className="bg-white p-6 rounded-md shadow-md">
        <p>Welcome </p>

        <div className="mt-4">
          <strong>Current Trainer:</strong> {userData.trainerName}
        </div>

        <div className="mt-4">
          <strong>Training Time Slot:</strong> {userData.startTime} - {userData.endTime}
        </div>

        {/* Add more details based on your needs */}
        
        <div className="mt-4">
          <strong>Training Overview:</strong>
          <p>Focus: {userData.trainingFocus}</p>
          <p>Intensity Level: {userData.intensityLevel}</p>
          <p>Progress: {userData.progress}%</p>
        </div>

        <div className="mt-4">
          <strong>Achievements:</strong> Completed {userData.completedWorkouts} workouts this week.
        </div>

        <div className="mt-4">
          <strong>Upcoming Sessions:</strong> {userData.upcomingSession}
        </div>

        <div className="mt-4">
          <strong>Tips for Today:</strong> {userData.trainerTip}
        </div>

        <div className="mt-4">
          <strong>Notes and Reminders:</strong> {userData.notes}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
