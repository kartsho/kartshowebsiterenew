// src/data/eventsData.js

// HERO

import heroImage from "../assets/events/hero/event-hero.jpg";

// GALLERY

import event1 from "../assets/events/gallery/event1.jpg";
import event2 from "../assets/events/gallery/event2.jpg";
import event3 from "../assets/events/gallery/event3.jpg";
import event4 from "../assets/events/gallery/event4.jpg";
import event5 from "../assets/events/gallery/event5.jpg";
import event6 from "../assets/events/gallery/event6.jpg";

const eventsData = {
  hero: {
    title: "Kartsho AI Summit 2026",

    description:
      "India’s biggest premium AI and innovation event connecting founders, developers, creators, startups, and investors.",

    date: "25 March 2026",

    location: "New Delhi, India",

    attendees: "10K",

    image: heroImage,

    stats: [
      {
        value: "10K+",
        label: "Attendees",
      },

      {
        value: "120+",
        label: "Speakers",
      },

      {
        value: "45+",
        label: "Sponsors",
      },
    ],
  },

  // ================= GALLERY EVENTS =================

  galleryEvents: [
    {
      title: "AI Innovation Summit",

      category: "Conference",

      date: "12 Jan 2026",

      cover: event1,

      description:
        "Premium AI conference with startups, founders, and live innovation showcases.",

      fullDescription:
        "The AI Innovation Summit brought together industry leaders, AI engineers, creators, and startup founders for keynote sessions, workshops, product showcases, and networking experiences.",

      images: [
        event1,
        event2,
        event3,
      ],
    },

    {
      title: "Startup Networking Night",

      category: "Networking",

      date: "28 Feb 2026",

      cover: event4,

      description:
        "Exclusive founder meetup and investor networking experience.",

      fullDescription:
        "Kartsho hosted a premium networking night connecting startups, creators, investors, and developers for collaborations, partnerships, and growth discussions.",

      images: [
        event4,
        event5,
        event6,
      ],
    },

    {
      title: "Hackathon Arena",

      category: "Hackathon",

      date: "16 March 2026",

      cover: event2,

      description:
        "48-hour coding challenge with developers and innovators.",

      fullDescription:
        "Developers from across India participated in intense coding battles, AI problem-solving challenges, and startup innovation competitions.",

      images: [
        event2,
        event3,
        event5,
      ],
    },
  ],
};

export default eventsData;