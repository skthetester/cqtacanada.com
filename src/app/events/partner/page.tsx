export default function PartnerEvents() {
  const upcomingEvents = [
    {
      title: "Partner Webinar: AI in Testing",
      date: "December 10, 2025",
      location: "Online",
      time: "2:00 PM - 4:00 PM",
      description: "Exclusive webinar for partners on AI advancements in software testing."
    }
  ];

  const pastEvents = [
    {
      title: "AI in Testing Seminar",
      date: "June 10, 2024",
      location: "Montreal, QC",
      time: "1:00 PM - 5:00 PM",
      description: "Discussion on AI and ML in automated testing."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Partner Events</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Upcoming Partner Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-600 mb-1"><strong>Location:</strong> {event.location}</p>
                <p className="text-gray-600 mb-4"><strong>Time:</strong> {event.time}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-gray-800">Past Partner Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
                <p className="text-gray-600 mb-1"><strong>Location:</strong> {event.location}</p>
                <p className="text-gray-600 mb-4"><strong>Time:</strong> {event.time}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}