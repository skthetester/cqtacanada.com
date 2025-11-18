export default function Sponsorship() {
  const sponsorshipOptions = [
    {
      level: "Platinum",
      price: "$5,000+",
      benefits: [
        "Prime logo placement on all marketing materials",
        "Keynote speaking opportunity",
        "Dedicated booth space at events",
        "Social media shoutouts",
        "Website feature on sponsor page"
      ]
    },
    {
      level: "Gold",
      price: "$3,000+",
      benefits: [
        "Logo on event materials and website",
        "Speaking slot at conference",
        "Booth space at main events",
        "Recognition in newsletters",
        "Access to attendee list"
      ]
    },
    {
      level: "Silver",
      price: "$1,500+",
      benefits: [
        "Logo on select marketing materials",
        "Mention in event announcements",
        "Small booth space",
        "Newsletter recognition",
        "Event ticket for 2 representatives"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Sponsorship Options</h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Support CQTA Canada and gain visibility among software quality professionals. Choose from our sponsorship tiers
          designed to meet different investment levels and marketing goals.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {sponsorshipOptions.map((option, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2 text-center">{option.level}</h2>
              <p className="text-3xl font-bold text-blue-600 mb-4 text-center">{option.price}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                {option.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Contact Us
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Custom sponsorship packages are available. Contact us to discuss your specific needs.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}