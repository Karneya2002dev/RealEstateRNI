import React from "react";
import { MapPin, Building2, Home } from "lucide-react";

// Sample agent images (replace with your own)
import agent1 from "../../assets/greenpark.png";
import agent2 from "../../assets/keerthi-raja.png";
import agent3 from "../../assets/Divya.png";
import agent4 from "../../assets/Sai_Keerthi.png";

const AgentListings = () => {
  const agents = [
    {
      name: "Divya Promoters",
      company: "Green Park Avenue",
      listings: 357,
      image: agent1,
      location: "Chennai, Tamil Nadu",
      url: "https://realestatesnetworkindiapvtltd.com/projects/green-park-avenue/",
    },
    {
      name: "Keerthi Promoters",
      company: "Keerthi Raja Palace",
      listings: 9,
      image: agent2,
      location: "Madurai, Tamil Nadu",
      url: "https://realestatesnetworkindiapvtltd.com/projects/keerthi-raja-palace/",
    },
    {
      name: "SD Promoters",
      company: "Divya Nagar",
      listings: 145,
      image: agent3,
      location: "Trichy, Tamil Nadu",
      url: "https://realestatesnetworkindiapvtltd.com/projects/divya-nagar/",
    },
    {
      name: "Keerthi Promoters",
      company: "Sai Keerthi",
      listings: 12,
      image: agent4,
      location: "Coimbatore, Tamil Nadu",
      url: "https://realestatesnetworkindiapvtltd.com/projects/sai-keerthi/",
    },
  ];

  return (
    <section id="agents" className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-foreground">
            Agent Listings
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our trusted real estate partners and their active listings.
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Agent Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/40"
            >
              {/* Agent Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold">
                  {agent.listings} Listings
                </div>
              </div>

              {/* Agent Info */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                  {agent.company}
                </h3>
                <p className="text-muted-foreground text-sm flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  {agent.name}
                </p>
                <p className="text-muted-foreground text-sm flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  {agent.location}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Home className="h-4 w-4 text-primary" />
                    {agent.listings} properties
                  </span>

                  {/* Styled link button */}
                  <a
                    href={agent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-all"
                  >
                    View Listings
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentListings;
